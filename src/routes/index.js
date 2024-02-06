const { Router } = require('express')

const usersRoutes = require('../routes/users.routes')
const MovieNotesRoutes = require('../routes/movie_notes.routes')
const MovieTagsRoutes = require('../routes/movie_tags.routes')
const SessionsRoutes = require('../routes/sessions.routes')


const routes = Router()

routes.use("/users" , usersRoutes)
routes.use("/notes" , MovieNotesRoutes)
routes.use('/tags', MovieTagsRoutes)
routes.use('/sessions', SessionsRoutes)

module.exports = routes