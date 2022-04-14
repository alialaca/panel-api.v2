const BaseModel = require('../utils/classes/baseModel')

const TABLE_NAME = 'atamaTipleri'
const fields = {
    id: true,
    isim: true,
    aciklama: true,
    simge: true
}

module.exports = new BaseModel(TABLE_NAME, fields)