const express = require('express');
const validate = require('../middlewares/validate')
const { durumValidation } = require('../validations')
const { durumController } = require('../controllers')

const router = express.Router();

router
    .route('/')
    .get(durumController.list.bind(durumController))
    .post(validate(durumValidation.yeniOlustur), durumController.create.bind(durumController))

router
    .route('/:id')
    .get(validate(durumValidation.kayitGetir), durumController.find.bind(durumController))
    .patch(validate(durumValidation.kayitGuncelle), durumController.update.bind(durumController))
    .delete(validate(durumValidation.kayitSil), durumController.delete.bind(durumController))

module.exports = router;
