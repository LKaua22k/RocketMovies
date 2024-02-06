const { Router } = require('express')

const MovieNotesController = require('../controllers/movie_notes.controller')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const movienotescontroller = new MovieNotesController()

const NotesRoutes = Router()

NotesRoutes.use(ensureAuthenticated)

NotesRoutes.get('/', movienotescontroller.index)
NotesRoutes.post('/', movienotescontroller.create)
NotesRoutes.get('/:id', movienotescontroller.show)
NotesRoutes.delete('/:id', movienotescontroller.delete)

module.exports = NotesRoutes
