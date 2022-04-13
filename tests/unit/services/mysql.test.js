require('custom-env').env()

describe('Db client', () => {
    let prisma;
    beforeAll(() => {
        prisma = require('../../../src/services/mysql')()
    })
    test('should be connect', async () => {
        const connect = await prisma.$connect();
        expect(!!connect)
    })
})