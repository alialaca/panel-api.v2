const express = require('express');
const validate = require('../middlewares/validate')
const { atamaValidation } = require('../validations')
const { atamaController } = require('../controllers')

const router = express.Router();

router
    .route('/')
    .get(atamaController.list.bind(atamaController))
    .post(validate(atamaValidation.yeniOlustur), atamaController.create.bind(atamaController))

router
    .route('/:id')
    .get(validate(atamaValidation.kayitGetir), atamaController.find.bind(atamaController))
    .patch(validate(atamaValidation.kayitGuncelle), atamaController.update.bind(atamaController))
    .delete(validate(atamaValidation.kayitSil), atamaController.delete.bind(atamaController))

module.exports = router;
