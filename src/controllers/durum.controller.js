const BaseController = require('../utils/classes/baseController')
const { durumService } = require('../services')

module.exports = new BaseController(durumService)