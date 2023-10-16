const { Router } = require('express')

const usersRoutes = require('../routes/users.routes')
const MovieNotesRoutes = require('../routes/movie_notes.routes')
const MovieTagsRoutes = require('../routes/movie_tags.routes')

const routes = Router()

routes.use("/users" , usersRoutes)
routes.use("/notes" , MovieNotesRoutes)
routes.use('/tags', MovieTagsRoutes)

module.exports = routes