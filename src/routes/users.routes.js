const { Router } = require('express')

const usersController = require('../controllers/users.controller')

const usercontroller = new usersController()

const usersRoutes = Router()

usersRoutes.post('/', usercontroller.create)
usersRoutes.put('/:id', usercontroller.update)

module.exports = usersRoutes;


