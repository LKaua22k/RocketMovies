const knex = require('../database/knex')
const AppError = require("../utils/App.Error")
const { compare } = require('bcryptjs')
const TokenConfig = require('../config/auth')
const { sign } = require('jsonwebtoken')

class SessinosController {
    async create(req,res){
        const {email,password} = req.body

        const user = await knex('users').where({email}).first()

        if(!user){  
            throw new AppError('Email ou senha não encontrado', 401)
        }

        const CheckedPassword = await compare(password, user.password)

        if(!CheckedPassword){
            throw new AppError('Email ou senha não encontrado', 401)
        }

        const {secret,expiresIn} = TokenConfig.jwt

        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return res.json({user , token})

    }
}

module.exports = SessinosController