const { PrismaClient } = require('@prisma/client')

class BaseModel {
    constructor(tableName, fields) {
        this.fields = fields

        const prisma = new PrismaClient({
            log: process.env.NODE_ENV === 'development' ? [
                // { emit: 'stdout', level: 'query' },
                { emit: 'stdout', level: 'error' },
                { emit: 'stdout', level: 'info' },
                { emit: 'stdout', level: 'warn' },
            ] : [],
        })
        this.db = prisma[tableName]
    }

    list(fields = this.fields){
        return this.db.findMany({select: fields})
    }

    create(data, fields = this.fields){
        return this.db.create({
            data: data,
            select: fields
        })
    }

    find(data, fields = this.fields){
        return this.db.findUnique({
            where: data,
            select: fields
        })
    }

    update({id, ...data}, fields = this.fields){
        return this.db.update({
            where: {id},
            data,
            select: fields
        })
    }

    delete(id){
        return this.db.delete({
            where: {id},
            select: this.fields
        })
    }
}

module.exports = BaseModel