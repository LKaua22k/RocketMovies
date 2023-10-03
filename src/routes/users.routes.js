const { Router } = require('express')

const usersController = require('../controllers/users.controller.js')

const usercontroller = new usersController()

const routes = Router()

routes.use('/:id', usercontroller)

module.exports = routes


