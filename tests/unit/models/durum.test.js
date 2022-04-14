const {Durum} = require('../../../src/models')

describe('Durum Model', () => {
    let kayit

    test('Liste', async () => {
        const kayitlar = await Durum.list()

        expect(kayitlar).toBeDefined()
        expect(kayitlar.length).toBeGreaterThanOrEqual(0)
    })

    test('Ekleme', async () => {
        kayit = await Durum.create({
            isim: 'Test kayiti',
        })

        expect(kayit).toBeDefined()
        expect(kayit.id).toBeDefined()
    })

    test('Detay', async () => {
        const detay = await Durum.find({
            id: kayit.id
        })

        expect(detay).toBeDefined()
        expect(detay.id).toBe(kayit.id)
    })

    test('Güncelleme', async () => {
        const data = {...kayit}
        data.isim = 'Güncellenmiş Durum Tipi'

        const postData = {...data}
        delete postData.Olusturan
        delete postData.Gorevler
        const guncelKayit = await Durum.update(postData)

        expect(guncelKayit).toBeDefined()
        expect(guncelKayit).toStrictEqual(data)
    })

    test('Silme', async () => {
        const silinenKayit = await Durum.delete(kayit.id)

        expect(silinenKayit.id).toBe(kayit.id)
        expect(silinenKayit).toBeDefined()
    })
})