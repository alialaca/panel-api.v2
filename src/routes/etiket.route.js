const express = require('express');
const validate = require('../middlewares/validate')
const { etiketValidation } = require('../validations')
const { etiketController } = require('../controllers')

const router = express.Router();

router
    .route('/')
    .get(etiketController.list.bind(etiketController))
    .post(validate(etiketValidation.yeniOlustur), etiketController.create.bind(etiketController))

router
    .route('/:id')
    .get(validate(etiketValidation.kayitGetir), etiketController.find.bind(etiketController))
    .patch(validate(etiketValidation.kayitGuncelle), etiketController.update.bind(etiketController))
    .delete(validate(etiketValidation.kayitSil), etiketController.delete.bind(etiketController))

module.exports = router;
