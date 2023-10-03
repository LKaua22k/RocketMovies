const { Router } = require('express')

const usersController = require('../controllers/users.controller')

const usercontroller = new usersController()

const usersRoutes = Router()

usersRoutes.post('/users', usercontroller.create)

module.exports = usersRoutes;


