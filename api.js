const axios = require('axios')

const baseURL = 'https://como-fazer-logusit.firebaseio.com/'

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

const apagar = async (key, id) => {
    console.log(baseURL + key + '/excluir/' + id + '.json')
    await axios.delete(baseURL + key + '/excluir/' + id + '.json')
    return true
}

module.exports = {
    list,
    apagar
}