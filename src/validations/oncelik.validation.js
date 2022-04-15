const Joi = require('joi')

const yeniOlustur = {
    body: Joi.object().keys({
        isim: Joi.string().max(24).required(),
        aciklama: Joi.string().min(0).max(256),
        simge: Joi.string().min(0).max(24),
        renk: Joi.string().min(0).max(24)
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
        id: Joi.number().integer(),
        isim: Joi.string().max(24).required(),
        aciklama: Joi.string().min(0).max(256),
        simge: Joi.string().min(0).max(24),
        renk: Joi.string().min(0).max(24),
        silindi: Joi.boolean()
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