const { Yorum } = require('../../../src/models')

describe('Yorum Model', () => {
    let kayit

    test('Liste', async () => {
        const kayitlar = await Yorum.list()

        expect(kayitlar).toBeDefined()
        expect(kayitlar.length).toBeGreaterThanOrEqual(0)
    })

    test('Ekleme', async () => {
        kayit = await Yorum.create({
            olusturan: 24,
            yorum: 'Test yorum'
        })

        expect(kayit).toBeDefined()
        expect(kayit.id).toBeDefined()
    })

    test('Detay', async () => {
        const detay = await Yorum.find({
            id: kayit.id
        })

        expect(detay).toBeDefined()
        expect(detay.id).toBe(kayit.id)
    })

    test('Güncelleme', async () => {
        const data = {...kayit}
        data.yorum = 'Güncellenmiş kayit'

        const postData = {...data}
        delete postData.Olusturan
        delete postData.Gorevler
        const guncelKayit = await Yorum.update(postData)

        expect(guncelKayit).toBeDefined()
        expect(guncelKayit).toStrictEqual(data)
    })

    test('Silme', async () => {
        const silinenKayit = await Yorum.delete(kayit.id)

        expect(silinenKayit.id).toBe(kayit.id)
        expect(silinenKayit).toBeDefined()
    })
})