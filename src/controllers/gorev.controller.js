const BaseController = require('../utils/classes/baseController')
const { gorevService } = require('../services')

class GorevController extends BaseController{
    constructor() {
        super(gorevService);
    }

    create(req, res, next) {
        req.body.olusturan = parseInt(req.user.id)
        super.create(req, res, next);
    }
}

module.exports = new GorevController()
