const express = require('express');
const validate = require('../middlewares/validate')
const { oncelikValidation } = require('../validations')
const { oncelikController } = require('../controllers')

const router = express.Router();

router
    .route('/')
    .get(oncelikController.list.bind(oncelikController))
    .post(validate(oncelikValidation.yeniOlustur), oncelikController.create.bind(oncelikController))

router
    .route('/:id')
    .get(validate(oncelikValidation.kayitGetir), oncelikController.find.bind(oncelikController))
    .patch(validate(oncelikValidation.kayitGuncelle), oncelikController.update.bind(oncelikController))
    .delete(validate(oncelikValidation.kayitSil), oncelikController.delete.bind(oncelikController))

module.exports = router;
