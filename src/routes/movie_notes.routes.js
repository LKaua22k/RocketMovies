const { Router } = require('express')

const MovieNotesController = require('../controllers/movie_notes.controller')

const movienotescontroller = new MovieNotesController()

const routes = Router()

routes.get('/:id', movienotescontroller.show)
routes.post('/:user_id', movienotescontroller.create)
routes.delete('/delte/:id', movienotescontroller.delete)

module.exports = routes
