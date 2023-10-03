const knex = require("../database/knex")
const AppError = require("../utils/App.Error")

class Usercontroller{
    async create(req,res){
        const { name,email,password } = req.body

        const checkUser = await knex('users').where({email}).first()

        if(checkUser){
            throw new AppError('Usuario ja existe')
        }

        await knex('users').insert({name,email,password})

        return res.status(201).json()
    }
}

module.exports = Usercontroller;