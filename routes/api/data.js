const express = require('express')
const router = express.Router()
const birdsController = require('../../controllers/birdsController')

router.post('/add-birds', birdsController.add_birds)
router.get('/birds', birdsController.birds)

module.exports = router
