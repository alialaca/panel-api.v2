const BaseModel = require('../utils/classes/baseModel')

const TABLE_NAME = 'etiketler'
const fields = {
    id: true,
    isim: true,
    Olusturan: {
        select: {
            personel_id: true,
            personel_ad: true,
            personel_soyad: true,
        }
    },
    olusturma_tarihi: true,
    silindi: true
}
module.exports = new BaseModel(TABLE_NAME, fields)