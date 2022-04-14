const { oncelikService } = require('../../../src/services')

describe('Atama service', () => {
    let kayit

    test('Liste', async () => {
        const kayitlar = await oncelikService.list()

        expect(kayitlar).toBeDefined()
        expect(kayitlar.length).toBeGreaterThanOrEqual(0)
    })

    test('Ekleme', async () => {
        kayit = await oncelikService.create({
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
        const guncelKayit = await oncelikService.update(postData)

        expect(guncelKayit).toBeDefined()
        expect(guncelKayit).toStrictEqual(data)
    })

    test('Silme', async () => {
        const silinenKayit = await oncelikService.delete(kayit.id)

        expect(silinenKayit.id).toBe(kayit.id)
        expect(silinenKayit).toBeDefined()
    })
})