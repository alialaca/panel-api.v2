const BaseModel = require('../utils/classes/baseModel')

const TABLE_NAME = 'projeler'
const fields = {
    id: true,
    isim: true,
    aciklama: true,
    simge: true,
    renk: true,
    silindi: true,
    sonlandi: true,
    olusturma_tarihi: true,
    Olusturan: {
        select: {
            personel_id: true,
            personel_ad: true,
            personel_soyad: true,
        }
    },
    Gorevler: {
        where: { silindi: false },
        select: {
            id: true,
            isim: true,
            Durumlar: true
        }
    }
}

module.exports = new BaseModel(TABLE_NAME, fields)