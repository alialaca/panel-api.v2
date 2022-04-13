const prisma = require('../services/mysql')()

const liste = () => {
    return prisma.gOREVLER.findMany()
}

module.exports = {
    liste
}