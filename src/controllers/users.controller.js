const { hash, compare } = require("bcryptjs")
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
        const { name, email , password , old_password} = req.body
        const {id} = req.params

        const user = await knex('users').where({id}).first()

        if(!user){
            throw new AppError('Usuario não encontrado')
        }

        const UserEmailExist = await knex('users').where({email}).first()

        if(UserEmailExist && UserEmailExist.id !== user.id){
            throw new AppError('Usuario ja tem o email cadastrado')
        }

        user.name = name ?? user.name
        user.email = email ?? user.email

        if(password && !old_password){
            throw new AppError('Senha antiga não confere')
        }

        if(password && old_password){
            const checkPassword = compare(old_password,user.password)

            if(!checkPassword){
                throw new AppError('A senha antiga não confere')
            }
        }

        user.password = await hash(password, 8)

        

        return res.json({message: "Usuario atualizado"})
    }
}

module.exports = Usercontroller;