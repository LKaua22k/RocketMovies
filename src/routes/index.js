const { Router } = require('express')

const usersRoutes = require('../routes/users.routes')
const MovieNotesRoutes = require('../routes/movie_notes.routes')

const routes = Router()

routes.use("/users" , usersRoutes)
routes.use("/notes" , MovieNotesRoutes)

module.exports = routes