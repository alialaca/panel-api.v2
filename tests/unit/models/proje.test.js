const ProjeModel = require('../../../src/models/proje.model')

describe('Proje model', () => {
    let proje

    test('Liste', async () => {
        const projeler = await ProjeModel.list()

        expect(projeler).toBeDefined()
        expect(projeler.length).toBeGreaterThanOrEqual(0)
    })

    test('Ekleme', async () => {
        proje = await ProjeModel.create({
            isim: 'Test projesi',
            olusturan: 24
        })

        expect(proje).toBeDefined()
        expect(proje.id).toBeDefined()
    })

    test('Detay', async () => {
        const detay = await ProjeModel.find({
            id: proje.id
        })

        expect(detay).toBeDefined()
        expect(detay.id).toBe(proje.id)
    })

    test('Güncelleme', async () => {
        const data = {...proje}
        data.isim = 'Güncellenmiş Test Projesi'

        const postData = {...data}
        delete postData.Olusturan
        delete postData.Gorevler
        const guncellenenProje = await ProjeModel.update(postData)

        expect(guncellenenProje).toBeDefined()
        expect(guncellenenProje).toStrictEqual(data)
    })

    test('Silme', async () => {
        const silinenProje = await ProjeModel.delete(proje.id)

        expect(silinenProje.id).toBe(proje.id)
        expect(silinenProje).toBeDefined()
    })
})