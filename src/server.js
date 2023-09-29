const express = require('express')
const MyDatabase = require('./database/sqlite')

const  app = express()
app.use(express.json())

MyDatabase()

const port = 3335

app.listen(port, console.log(`Server iniciado na Porta ${port}`))