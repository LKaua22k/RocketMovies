const {Router} = require('express')

const MovietagsController = require('../controllers/movi_tags.controller')

const movietagscontroller = new MovietagsController()

const routes = Router()

routes.get('/', movietagscontroller.index)

module.exports = routes