class BaseService {
    constructor(model) {
        this.model = model
    }

    list(){
        return this.model.list()
    }

    create(data){
        return this.model.create(data)
    }

    find(data){
        return this.model.find(data)
    }

    update(data){
        return this.model.update(data)
    }

    delete(id){
        return this.model.delete(id)
    }
}

module.exports = BaseService