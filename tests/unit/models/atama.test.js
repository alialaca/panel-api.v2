const {Atama} = require('../../../src/models')

describe('Atama Model', () => {
    let atama_tip

    test('Liste', async () => {
        const atama_tipler = await Atama.list()

        expect(atama_tipler).toBeDefined()
        expect(atama_tipler.length).toBeGreaterThanOrEqual(0)
    })

    test('Ekleme', async () => {
        atama_tip = await Atama.create({
            isim: 'Test atama_tipi',
        })

        expect(atama_tip).toBeDefined()
        expect(atama_tip.id).toBeDefined()
    })

    test('Detay', async () => {
        const detay = await Atama.find({
            id: atama_tip.id
        })

        expect(detay).toBeDefined()
        expect(detay.id).toBe(atama_tip.id)
    })

    test('Güncelleme', async () => {
        const data = {...atama_tip}
        data.isim = 'Güncellenmiş Atama Tipi'

        const postData = {...data}
        delete postData.Olusturan
        delete postData.Gorevler
        const guncellenenProje = await Atama.update(postData)

        expect(guncellenenProje).toBeDefined()
        expect(guncellenenProje).toStrictEqual(data)
    })

    test('Silme', async () => {
        const silinenProje = await Atama.delete(atama_tip.id)

        expect(silinenProje.id).toBe(atama_tip.id)
        expect(silinenProje).toBeDefined()
    })
})