const { Oncelik } = require('../../../src/models')

describe('Oncelik Model', () => {
    let kayit

    test('Liste', async () => {
        const kayitlar = await Oncelik.list()

        expect(kayitlar).toBeDefined()
        expect(kayitlar.length).toBeGreaterThanOrEqual(0)
    })

    test('Ekleme', async () => {
        kayit = await Oncelik.create({
            isim: 'Test kayiti',
        })

        expect(kayit).toBeDefined()
        expect(kayit.id).toBeDefined()
    })

    test('Detay', async () => {
        const detay = await Oncelik.find({
            id: kayit.id
        })

        expect(detay).toBeDefined()
        expect(detay.id).toBe(kayit.id)
    })

    test('Güncelleme', async () => {
        const data = {...kayit}
        data.isim = 'Güncellenmiş kayit'

        const postData = {...data}
        delete postData.Olusturan
        delete postData.Gorevler
        const guncelKayit = await Oncelik.update(postData)

        expect(guncelKayit).toBeDefined()
        expect(guncelKayit).toStrictEqual(data)
    })

    test('Silme', async () => {
        const silinenKayit = await Oncelik.delete(kayit.id)

        expect(silinenKayit.id).toBe(kayit.id)
        expect(silinenKayit).toBeDefined()
    })
})