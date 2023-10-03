const knex = require("../database/knex");

class Usercontroller{
    async create(req,res){
        const { name,email,password } = req.body

        await knex('users').insert({
            name,
            email,
            password
        })

        return res.status(201).json()
    }
}

module.exports = Usercontroller