const BaseModel = require('../utils/classes/baseModel')

const TABLE_NAME = 'oncelikler'
const fields = {
    id: true,
    isim: true,
    aciklama: true,
    simge: true,
    renk: true,
    silindi: true
}

module.exports = new BaseModel(TABLE_NAME, fields)