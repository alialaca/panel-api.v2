const BaseController = require('../utils/classes/baseController')
const { yorumService } = require('../services')

class YorumController extends BaseController{
    constructor() {
        super(yorumService);
    }

    create(req, res, next) {
        req.body.olusturan = parseInt(req.user.id)
        super.create(req, res, next);
    }
}

module.exports = new YorumController(yorumService)
