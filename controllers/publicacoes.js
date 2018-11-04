const api = require('../api')

const novaForm = (req, res) => {
    res.render('publicacoes/nova')
}

const nova = async (req, res) => {
    await api.create('publicacoes', {
        publicacao: {
            nome: req.body.nome,
            descricao: req.body.descricao
        }
    })
    res.redirect('/publicacoes')
}

const list = async (req, res) => {
    const publicacoes = await api.list('publicacoes')
    res.render('publicacoes/index', { publicacoes })
}

const excluir = async (req, res) => {
    await api.apagar('publicacoes', req.params.id)
    res.redirect('/publicacoes')
}

const editarForm = async (req, res) => {
    const publicacao = await api.get(`publicacoes`, req.params.id)
    res.render('publicacoes/editar', {
        publicacao
    })
}

const updateForm = async (req, res) => {
    await api.update('publicacoes', req.params.id, {
        publicacao: {
            nome: req.body.nome,
            descricao: req.body.descricao
        }
    })
    res.redirect('/publicacoes')
}

module.exports = {
    novaForm,
    nova,
    list,
    excluir,
    editarForm,
    updateForm
}