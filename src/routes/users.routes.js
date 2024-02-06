const { Router } = require('express')

const usersController = require('../controllers/users.controller')
const UserAvatarController = require('../controllers/UserAvatarController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')
const multer = require('multer')
const uploadConfig = require('../config/upload')

const usercontroller = new usersController()
const userAvatarController = new UserAvatarController()

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)




usersRoutes.post('/', usercontroller.create)
usersRoutes.put('/', ensureAuthenticated ,usercontroller.update)
usersRoutes.patch('/avatar', ensureAuthenticated ,upload.single("avatar"),userAvatarController.update)

module.exports = usersRoutes;


