const axios = require('axios')

const baseURL = 'https://como-fazer-logusit.firebaseio.com/'


// CATEGORIAS
// Create
const create = async (key, data) => {
    await axios.post(baseURL + `/` + `${key}` + '.json', data)
    return true
}

// Listar
const list = async (key) => {
    const content = await axios.get(baseURL + key + '.json')
    if (content.data) {
        const objetos = Object
            .keys(content.data)
            .map(key => {
                return {
                    id: key,
                    ...content.data[key]
                }
            })
        return objetos
    }
    return []
}

// Editar
const get = async (key, id) => {
    const content = await axios.get(baseURL + `/` + key + `/` + `${id}.json`)
    return {
        id,
        ...content.data
    }
}

// Update
const update = async (key, id, data) => {
    await axios.put(baseURL + '/' + key + '/' + `${id}.json`, data)
    return true
}

// Excluir
const apagar = async (key, id) => {
    await axios.delete(baseURL + key + '/' + id + '.json')
    return true
}



// Exporta todos os módulos
module.exports = {
    create,
    list,
    get,
    apagar,
    update
}