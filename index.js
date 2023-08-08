require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const corsOptions = require('./config/cors')
const connectDB = require('./config/database')
const credentials = require('./middleware/credentials')
const errorHandlerMiddleware = require('./middleware/error_handler')

const app = express()
const PORT = process.env.PORT

connectDB()

// Allow credentials
app.use(credentials)

//CORS
app.use(cors(corsOptions))
// application.x-www-form-urlencoded
app.use(express.urlencoded({
    extended: false
}))
// application/json response
app.use(express.json())

// middleware for cookies
app.use(cookieParser())

//static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// Default error handler
app.use(errorHandlerMiddleware)

// Routes
app.use('api/auth', require('./routes/api/auth'))
app.all('*', (req, res) => {
    res.status(404)

    if(req.accepts('json')){
        res.json({'error': 'Not found'})
    }else {
        res.type('text').send('Not found')
    }
})

mongoose.connection.once('open', () => {
    console.log('DB connected')
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
})
