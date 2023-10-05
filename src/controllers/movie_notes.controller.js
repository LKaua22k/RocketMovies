const knex = require('../database/knex')

class MovieNotesController {
    async create(req,res){
        const {title , description , rating} = req.body
        const user_id = req.params

        const movie_notes = await knex('movie_notes').insert({title,description,rating,user_id})

        return res.json({message: "Nota criada"})
    }

}

module.exports = MovieNotesController