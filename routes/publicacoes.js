const express = require('express')
const router = express.Router()
const controller = require('../controllers/publicacoes')

// CATEGORIAS
// Nova categoria
router.get('/nova', controller.novaForm)

// Create
router.post('/nova', controller.nova)

// Listar
router.get('/categoria/:categoria', controller.list)

// Editar
router.get('/editar/:categoria/:id', controller.editarForm)

// Update
router.post('/editar/:categoria/:id', controller.updateForm)

// Excluir
router.get('/excluir/:categoria/:id', controller.excluir)
module.exports = router