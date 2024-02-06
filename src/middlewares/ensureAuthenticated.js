const {verify} = require('jsonwebtoken')
const AppError = require('../utils/App.Error')
const authConfig = require('../config/auth')

function ensureAuthenticated(req,res,next){
    const authHeaders = req.headers.authorization;

    if(!authHeaders){
        throw new AppError('jwt token é invalido')
    }

    const [ , token] = authHeaders.split(" ")

    try {
        const {sub: user_id} = verify(token, authConfig.jwt.secret)
        
        req.user = {
            id: Number(user_id)
        }

        return next()

    } catch (error) {
        throw new AppError('jwt token é invalido')
    }
}

module.exports = ensureAuthenticated