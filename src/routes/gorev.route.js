const express = require('express');
const validate = require('../middlewares/validate')
const { gorevValidation } = require('../validations')
const { gorevController } = require('../controllers')

const router = express.Router();

router
    .route('/')
    .get(gorevController.list.bind(gorevController))
    .post(validate(gorevValidation.yeniOlustur), gorevController.create.bind(gorevController))

router
    .route('/:id')
    .get(validate(gorevValidation.kayitGetir), gorevController.find.bind(gorevController))
    .patch(validate(gorevValidation.kayitGuncelle), gorevController.update.bind(gorevController))
    .delete(validate(gorevValidation.kayitSil), gorevController.delete.bind(gorevController))

module.exports = router;
