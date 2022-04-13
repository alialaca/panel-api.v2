const ProjeModel = require('../../../src/models/proje.model')

describe('Proje model', () => {
    let proje

    test('Liste', async () => {
        const projeler = await ProjeModel.liste()

        expect(projeler).toBeDefined()
        expect(projeler.length).toBeGreaterThanOrEqual(0)
    })

    test('Ekleme', async () => {
        proje = await ProjeModel.ekle({
            isim: 'Test projesi',
            olusturan: 24
        })

        expect(proje).toBeDefined()
        expect(proje.id).toBeDefined()
    })

    test('Güncelleme', async () => {
        const data = {...proje}
        data.isim = 'Güncellenmiş Test Projesi'

        const postData = {...data}
        delete postData.Olusturan
        delete postData.Gorevler
        const guncellenenProje = await ProjeModel.guncelle(postData)

        expect(guncellenenProje).toBeDefined()
        expect(guncellenenProje).toStrictEqual(data)
    })

    test('Silme', async () => {
        const silinenProje = await ProjeModel.sil(proje.id)

        expect(silinenProje.id).toBe(proje.id)
        expect(silinenProje).toBeDefined()
    })
})