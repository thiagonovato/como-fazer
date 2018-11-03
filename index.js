const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const categorias = require('./routes/categorias')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

const port = process.env.PORT || 3000

app.get('/', async (request, response) => {
    const content = await axios.get('https://como-fazer-logusit.firebaseio.com/teste.json')

    response.render('index', { i: content.data })
})

// Chamando todas as rotas de CATEGORIAS
app.use('/categorias', categorias)

// GERAL
// Caso der erro ao ouvir a porta...
app.listen(port, (err) => {
    if (err) {
        console.log('error')
    } else {
        console.log('Como-fazer is running on port', port)
    }
})