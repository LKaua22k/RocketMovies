const express = require('express')
const MyDatabase = require('./database/sqlite')
const routes = require('./routes')

const  app = express()

app.use(routes)
app.use(express.json())

MyDatabase()

const port = 3335

app.listen(port, console.log(`Server iniciado na Porta ${port}`))