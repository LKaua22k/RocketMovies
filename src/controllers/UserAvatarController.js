const knex = require('../database/knex')
const DiskStorage = require('../providers/DISKSTORAGE')
const AppError = require('../utils/App.Error')


class UserAvatarController{
    async update(req,res){
        const user_id = req.user.id
        const avatarfilename  = req.file.filename

        const diskStorage = new DiskStorage()

        const user = await knex('users').where({id: user_id}).first()

        if(!user){
            throw new AppError('Somente usuarios autenticados podem mudar o avatar')
        }

        if(user.avatar){
            await diskStorage.deleteFile(user.avatar)
        }

        const fileName = await diskStorage.saveFile(avatarfilename)
        user.avatar = fileName

        await knex('users').update(user).where({id: user_id})

        return res.json(user)
    }
}

module.exports = UserAvatarController