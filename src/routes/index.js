const { Router } = require('express')

const usersRoutes = require('../routes/users.routes')

const routes = Router()

routes.use("/" , usersRoutes)

module.exports = routes