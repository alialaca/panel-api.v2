const { yorumService } = require('../../../src/services')

describe('Yorum service', () => {
    let kayit

    test('Liste', async () => {
        const kayitlar = await yorumService.list()

        expect(kayitlar).toBeDefined()
        expect(kayitlar.length).toBeGreaterThanOrEqual(0)
    })

    test('Ekleme', async () => {
        kayit = await yorumService.create({
            olusturan: 24,
            yorum: 'Test yorum'
        })

        expect(kayit).toBeDefined()
        expect(kayit.id).toBeDefined()
    })

    test('Güncelleme', async () => {
        const data = {...kayit}
        data.yorum = 'Test atama tipi 2'

        const postData = {...data}
        delete postData.Olusturan
        delete postData.Gorevler
        const guncelKayit = await yorumService.update(postData)

        expect(guncelKayit).toBeDefined()
        expect(guncelKayit).toStrictEqual(data)
    })

    test('Silme', async () => {
        const silinenKayit = await yorumService.delete(kayit.id)

        expect(silinenKayit.id).toBe(kayit.id)
        expect(silinenKayit).toBeDefined()
    })
})