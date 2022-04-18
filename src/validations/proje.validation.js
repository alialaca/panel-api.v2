const Joi = require('joi')

const yeniOlustur = {
    body: Joi.object().keys({
        isim: Joi.string().max(64).required(),
        aciklama: Joi.string().allow('', null),
        renk: Joi.string().allow('', null).max(16),
        simge: Joi.string().allow('', null).max(48)
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
        isim: Joi.string().max(64).required(),
        aciklama: Joi.string().allow('', null),
        renk: Joi.string().allow('', null).max(16),
        simge: Joi.string().allow('', null).max(48),
        sonlandi: Joi.boolean()
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