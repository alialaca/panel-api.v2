const express = require('express');
const validate = require('../middlewares/validate')
const { projeValidation } = require('../validations')
const { projeController } = require('../controllers')

const router = express.Router();

router
    .route('/')
    .get(projeController.list.bind(projeController))
    .post(validate(projeValidation.yeniOlustur), projeController.create.bind(projeController))

router
    .route('/:id')
    .get(validate(projeValidation.kayitGetir), projeController.find.bind(projeController))
    .patch(validate(projeValidation.kayitGuncelle), projeController.update.bind(projeController))
    .delete(validate(projeValidation.kayitSil), projeController.delete.bind(projeController))

module.exports = router;
