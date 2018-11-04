const express = require('express')
const router = express.Router()
const controller = require('../controllers/publicacoes')

// CATEGORIAS
// Nova categoria
router.get('/nova', controller.novaForm)

// Create
router.post('/nova', controller.nova)

// Listar
router.get('/', controller.list)

// Editar
router.get('/editar/:id', controller.editarForm)

// Update
router.post('/editar/:id', controller.updateForm)

// Excluir
router.get('/excluir/:id', controller.excluir)
module.exports = router