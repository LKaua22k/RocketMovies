require('express-async-errors')

const express = require('express')
const MyDatabase = require('./database/sqlite')
const routes = require('./routes')
const AppError = require('./utils/App.Error')

const  app = express()

app.use(express.json())

app.use(routes)

MyDatabase()

app.use((error,req,res,next) => {

    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            Stauts: "Error",
            message: error.message
        })

    }

    console.log(error)

    return res.status(500).json({
        Stauts: "Error",
        message: "internal Server error"
    })
})

const port = 3335

app.listen(port, console.log(`Server iniciado na Porta ${port}`))