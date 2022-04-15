const httpStatus = require("http-status");

class BaseController {
    constructor(service) {
        this.service = service
    }

    list(req, res, next){
        this.service.list()
            .then( response => {
                res.status(httpStatus.OK).json(response)
            }).catch( error => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
        })
    }

    create(req, res, next){
        this.service.create(req.body)
            .then( response => {
                res.status(200).send(response)
            }).catch( error => {
                res.status(500).send(error)
        })
    }

    find(req, res, next){
        this.service.find({id: req.params.id})
            .then( response => {
                console.log("response", response)
                if (response){
                    res.status(httpStatus.OK).json(response)
                } else {
                    res.status(httpStatus.NO_CONTENT).json({
                        status: true,
                        message: "Kayıt bulunamadı"
                    })
                }
            }).catch( error => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
        })
    }

    update(req, res, next){
        this.service.update({...req.body, ...req.params})
            .then( response => {
                res.status(200).send(response)
            }).catch( error => {
            res.status(500).send(error)
        })
    }

    delete(req, res, next){
        this.service.delete(req.params.id)
            .then( response => {
                res.status(httpStatus.ACCEPTED).json({
                    message: "Kayıt silindi"
                })
            }).catch( error => {
                if (error.code === "P2025") {
                    res.status(httpStatus.NOT_FOUND).json({
                        message: "Kayıt bulunamadı"
                    })
                } else {
                    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
                }
        })
    }
}

module.exports = BaseController