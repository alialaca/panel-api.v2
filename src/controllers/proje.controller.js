const ProjeModel = require('../models/proje.model')

const liste = () => {
    return ProjeModel.liste()
}

const ekle = (data) => {
    return ProjeModel.ekle({
        isim: 'Test projesi',
        olusturan: 24
    })
}

module.exports = {
    liste,
    ekle
}