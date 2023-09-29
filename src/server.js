const express = require('express')

const  app = express()

app.use(express.json())

const port = 3335

app.listen(port, console.log(`Server iniciado na Porta ${port}`))