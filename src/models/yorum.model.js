const BaseModel = require('../utils/classes/baseModel')

const TABLE_NAME = 'yorumlar'
const fields = {
    id: true,
    Olusturan: {
        select: {
            personel_id: true,
            personel_ad: true,
            personel_soyad: true,
        }
    },
    olusturma_tarihi: true,
    yorum: true,
    silindi: true
}

module.exports = new BaseModel(TABLE_NAME, fields)