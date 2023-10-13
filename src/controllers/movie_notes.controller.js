const knex = require('../database/knex')

class MovieNotesController {
    async create(req,res){
        const { title , description , rating , tags} = req.body
        const {user_id} = req.params

        const note_id = await knex('movie_notes').insert({
            title,
            description,
            rating,
            user_id
        })

        const TagsInsert = tags.map( (name) => {
            return {
                name,
                note_id,
                user_id
            }
        })

        await knex('movie_tags').insert(TagsInsert) 

        return res.json({message: "Nota criada"})
    }

    async show(req,res){

        const {id} = req.params

        const notes = await knex('movie_notes').where({id}).first()
        const tags = await knex('movie_tags').where({note_id: id}).orderBy(name)

        return res.json(
            ...notes,
            tags
        )
    }

    async delete(req,res){
        const {id} = req.params

        await knex('movie_notes').where({id}).delete({})

        return res.json({message: "Nota Apagada"})
    }

    async index(req,res){
        const {title ,user_id,tags} = req.params

        let note;

        if(tags){
            const FilteredTags = tags.split(",").map(tag => tag)

            note = await knex('movie_tags').select([movie_notes.id,movie_notes.title,movie_notes.user_id]).where('movie_notes.user_id',user_id).whereLike('movie_notes.title', `%${title}%`).whereIn('name',FilteredTags).innerJoin('movie_notes', 'movie_notes.id' , 'movie_tags.note_id')
        }else{
            note = await knex('movie_note').where({user_id}).whereLike('title', `%${title}%`).orderBy('title')
        }

        const NoteTags = await knex('movie_tags').where({user_id})
        const noteAndTags = note.map(note => {
            const userTags = NoteTags.filter(tag => tag.user_id === note.id)

            return{
                note,
                tags: userTags
            }
        })

        return res.json(noteAndTags)

    }
}

module.exports = MovieNotesController