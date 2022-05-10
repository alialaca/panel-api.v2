const BaseModel = require('../utils/classes/baseModel')

const TABLE_NAME = 'gorevler'
const fields = {
    id: true,
    Proje: {
        select: {
            id: true,
            isim: true
        }
    },
    aciklama: true,
    Olusturan: {
        select: {
            personel_id: true,
            personel_ad: true,
            personel_soyad: true,
        }
    },
    olusturma_tarihi: true,
    baslangic_tarihi: true,
    bitis_tarihi: true,
    Oncelik: {
      select: {
          id: true,
          isim: true
      }
    },
    silindi: true,
    AltGorevler: {
        select: {
            id: true,
            isim: true
        }
    },
    Durumlar: {
        select: {
            id: true,
            Durum: true
        }
    },
    Etiketler: {
        select: {
            id: true,
            Etiket: {
                select: { isim: true }
            }
        }
    },
    Yorumlar: {
        select: {
            id: true,
            Yorumlar: {
                select: {
                    yorum: true,
                    olusturma_tarihi: true,
                    Olusturan: {
                        select: {
                            personel_id: true,
                            personel_ad: true,
                            personel_soyad: true,
                        }
                    }
                }
            },
        }
    }
}

class GorevModel extends BaseModel {
    constructor() {
        super(TABLE_NAME, fields);
    }

    list() {
        const { id, baslangic_tarihi, bitis_tarihi, Proje, Oncelik } = this.fields
        return super.list({ id, baslangic_tarihi, bitis_tarihi, Proje, Oncelik });
    }
}

module.exports = new GorevModel()