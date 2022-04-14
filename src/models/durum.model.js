const BaseModel = require('../utils/classes/baseModel')

const TABLE_NAME = 'durumTipleri'
const fields = {
    id: true,
    isim: true,
    aciklama: true,
    simge: true,
    renk: true
}

module.exports = new BaseModel(TABLE_NAME, fields)