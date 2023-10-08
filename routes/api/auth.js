const express = require('express')
const router = express.Router()
const authController = require('../../controllers/authController')
const birdsController = require('../../controllers/birdsController')
const authMiddleware = require('../../middleware/auth')

router.post('/register', authController.register)
router.post('/login', authController.login )
router.post('/logout', authController.logout )
router.post('/refresh', authController.refresh)
router.get('/user', authMiddleware, authController.user)
router.post('/add-birds', birdsController.add_birds)
router.get('/birds', birdsController.birds)

module.exports = router
