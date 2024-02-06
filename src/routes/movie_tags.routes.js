const {Router} = require('express')

const MovietagsController = require('../controllers/movi_tags.controller')

const movietagscontroller = new MovietagsController()

const MovieTagsRoutes = Router()

MovieTagsRoutes.get('/', movietagscontroller.index)

module.exports = MovieTagsRoutes