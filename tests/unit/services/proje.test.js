const { projeService } = require('../../../src/services')

describe('Proje service', () => {
    let proje

    test('Liste', async () => {
        const projeler = await projeService.liste()

        expect(projeler).toBeDefined()
        expect(projeler.length).toBeGreaterThanOrEqual(0)
    })

    test('Ekleme', async () => {
        proje = await projeService.ekle({
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
        const guncellenenProje = await projeService.guncelle(postData)

        expect(guncellenenProje).toBeDefined()
        expect(guncellenenProje).toStrictEqual(data)
    })

    test('Silme', async () => {
        const silinenProje = await projeService.sil(proje.id)

        expect(silinenProje.id).toBe(proje.id)
        expect(silinenProje).toBeDefined()
    })
})