require('custom-env').env()
const GorevModel = require('../../../src/models/gorevler')

describe('Görev model', () =>{
    test('Görevlerin geliyor olması lazım', async () => {
        const gorevler = await GorevModel.liste()
        expect(gorevler.length).toBeGreaterThanOrEqual(0)
    })
})