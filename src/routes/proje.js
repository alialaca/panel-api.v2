const express = require('express');
const router = express.Router();
const GorevModel= require('../models/gorevler')


/* GET users listing. */
router.get('/', async (req, res) => {
  const gorevler = await GorevModel.liste()
  res.status(200).json(gorevler)
});

module.exports = router;
