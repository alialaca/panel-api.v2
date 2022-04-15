const BaseController = require('../utils/classes/baseController')
const { oncelikService } = require('../services')

module.exports = new BaseController(oncelikService)