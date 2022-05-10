const Joi = require('joi')

const yeniOlustur = {
    body: Joi.object().keys({
        isim: Joi.string().max(124).required(),
        proje: Joi.number().integer().required(),
        aciklama: Joi.string().allow('', null),
        baslangic_tarihi: Joi.date().allow('', null),
        bitis_tarihi: Joi.date().allow('', null),
        ustgorev: Joi.number().integer().allow(null),
        oncelik: Joi.number().integer().allow(null)
    })
}

const kayitGetir = {
    params: Joi.object().keys({
        id: Joi.number().integer().required(),
    })
}

const kayitGuncelle = {
    params: Joi.object().keys({
        id: Joi.number().integer().required(),
    }),
    body: Joi.object().keys({
        isim: Joi.string().max(124).required(),
        proje: Joi.number().integer().required(),
        aciklama: Joi.string().allow('', null),
        baslangic_tarihi: Joi.date().allow('', null),
        bitis_tarihi: Joi.date().allow('', null),
        ustgorev: Joi.number().integer().allow(null)
    })
}

const kayitSil = {
    params: Joi.object().keys({
        id: Joi.number().integer().required(),
    })
}

module.exports = {
    yeniOlustur,
    kayitGetir,
    kayitGuncelle,
    kayitSil
}