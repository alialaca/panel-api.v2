const prisma = require('../services/mysql')()

const liste = () => {
    return prisma.gorevler.findMany()
}

module.exports = {
    liste
}