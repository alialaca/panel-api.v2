const BaseController = require('../utils/classes/baseController')
const { etiketService } = require('../services')

class EtiketController extends BaseController{
    constructor() {
        super(etiketService);
    }

    create(req, res, next) {
        req.body.olusturan = parseInt(req.user.id)
        super.create(req, res, next);
    }
}

module.exports = new EtiketController(etiketService)
