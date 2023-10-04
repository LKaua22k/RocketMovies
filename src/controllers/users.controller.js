const { hash } = require("bcryptjs")
const knex = require("../database/knex")
const AppError = require("../utils/App.Error")

class Usercontroller{
    async create(req,res){
        const { name,email,password } = req.body

        const checkUser = await knex('users').where({email}).first()

        const HashPassword = await hash(password, 8)

        if(checkUser){
            throw new AppError('Usuario ja existe')
        }

        await knex('users').insert({name,email,password: HashPassword})

        return res.status(201).json({message: "User create"})
    }

    async update(req,res){
        const { name, email , password} = req.body
        const {id} = req.params

        const user = await knex('users').where({id}).first()

        if(!user){
            throw new AppError('Usuario não encontrado')
        }

        return res.json({message: "Usuario atualizado"})
    }
}

module.exports = Usercontroller;