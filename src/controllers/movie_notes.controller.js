const knex = require('../database/knex')

class MovieNotesController {
    async create(req,res){
        const { title , description , rating , tags} = req.body
        const user_id = req.params

        const note_id = await knex('movie_notes').insert({
            title,
            description,
            rating,
            user_id
        })

        const TagsInsert = tags.map( name => {
            return {
                name,
                note_id,
                user_id
            }
        })

        await knex('movie_tags').insert(TagsInsert)

        

        return res.json({message: "Nota criada"})
    }

}

module.exports = MovieNotesController