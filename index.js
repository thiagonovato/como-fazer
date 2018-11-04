const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')
const api = require('./api')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

const port = process.env.PORT || 3000

app.get('/', async (request, response) => {
    response.render('index')
})

// Chamando todas as rotas
app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)

// GERAL
// Caso der erro ao ouvir a porta...
app.listen(port, (err) => {
    if (err) {
        console.log('error')
    } else {
        console.log('Como-fazer is running on port', port)
    }
})