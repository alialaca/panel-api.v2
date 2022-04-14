const { atamaService } = require('../../../src/services')

describe('Atama service', () => {
    let kayit

    test('Liste', async () => {
        const kayitlar = await atamaService.list()

        expect(kayitlar).toBeDefined()
        expect(kayitlar.length).toBeGreaterThanOrEqual(0)
    })

    test('Ekleme', async () => {
        kayit = await atamaService.create({
            isim: 'Test atama tipi',
        })

        expect(kayit).toBeDefined()
        expect(kayit.id).toBeDefined()
    })

    test('Güncelleme', async () => {
        const data = {...kayit}
        data.isim = 'Test atama tipi 2'

        const postData = {...data}
        delete postData.Olusturan
        delete postData.Gorevler
        const guncelKayit = await atamaService.update(postData)

        expect(guncelKayit).toBeDefined()
        expect(guncelKayit).toStrictEqual(data)
    })

    test('Silme', async () => {
        const silinenKayit = await atamaService.delete(kayit.id)

        expect(silinenKayit.id).toBe(kayit.id)
        expect(silinenKayit).toBeDefined()
    })
})