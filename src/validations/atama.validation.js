const Joi = require('joi')

const yeniOlustur = {
    body: Joi.object().keys({
        isim: Joi.string().max(24).required(),
        aciklama: Joi.string().max(128),
        simge: Joi.string().max(48)
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
        isim: Joi.string().max(24),
        aciklama: Joi.string().max(128),
        simge: Joi.string().min(0).max(48)
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