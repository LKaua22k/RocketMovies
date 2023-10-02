const { Router } = require('express')

const usersController = require('../controllers/users.contoller')

const usercontroller = new usersController()

const routes = Router()

module.exports = routes


