const BaseController = require('../utils/classes/baseController')
const { projeService } = require('../services')

class ProjeController extends BaseController{
    constructor() {
        super(projeService);
    }

    create(req, res, next) {
        req.body.olusturan = parseInt(req.user.id)
        super.create(req, res, next);
    }
}

module.exports = new ProjeController()
