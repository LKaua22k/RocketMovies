const {Router} = require('express')

const SessinosController = require('../controllers/sessions.controller')

const sessionsController = new SessinosController()

const routes = Router()

routes.post('/', sessionsController.create)

module.exports = routes