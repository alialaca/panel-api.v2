const express = require('express');
const { atamaValidation } = require('../validations')
const { oncelikController } = require('../controllers')

const router = express.Router();

router
    .route('/')
    .get(oncelikController.list.bind(oncelikController))
    .post(oncelikController.list.bind(oncelikController))

module.exports = router;
