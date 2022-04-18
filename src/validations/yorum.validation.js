const Joi = require('joi')

const yeniOlustur = {
    body: Joi.object().keys({
        yorum: Joi.string().required(),
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
        yorum: Joi.string().required()
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