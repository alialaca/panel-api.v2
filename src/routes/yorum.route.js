const express = require('express');
const validate = require('../middlewares/validate')
const { yorumValidation } = require('../validations')
const { yorumController } = require('../controllers')

const router = express.Router();

router
    .route('/')
    .get(yorumController.list.bind(yorumController))
    .post(validate(yorumValidation.yeniOlustur), yorumController.create.bind(yorumController))

router
    .route('/:id')
    .get(validate(yorumValidation.kayitGetir), yorumController.find.bind(yorumController))
    .patch(validate(yorumValidation.kayitGuncelle), yorumController.update.bind(yorumController))
    .delete(validate(yorumValidation.kayitSil), yorumController.delete.bind(yorumController))

module.exports = router;
