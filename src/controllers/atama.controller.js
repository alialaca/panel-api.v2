const BaseController = require('../utils/classes/baseController')
const { atamaService } = require('../services')

module.exports = new BaseController(atamaService)