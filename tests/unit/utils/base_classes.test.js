const BaseModel = require('../../../src/utils/classes/baseModel')
const BaseService = require('../../../src/utils/classes/baseService')
const {projeService} = require("../../../src/services");

describe('Base Classes', () => {
    let tableName
    let fields

    beforeAll(() => {
        tableName = 'projeler'
        fields = {
            id: true,
            isim: true,
            aciklama: true,
            simge: true,
            renk: true,
            silindi: true,
            sonlandi: true,
            olusturma_tarihi: true,
            Olusturan: {
                select: {
                    personel_id: true,
                    personel_ad: true,
                    personel_soyad: true,
                }
            },
            Gorevler: {
                where: { silindi: false },
                select: {
                    id: true,
                    isim: true,
                    Durumlar: true
                }
            }
        }
    })

    describe('Base Model', () => {
        let model
        let proje

        test('Model oluşturulabiliyor olmalı', () => {
            model = new BaseModel(tableName, fields)

            expect(model).toBeDefined()
        })

        test('list() metodu çalışıyor olmalı', async () => {
            const projeler = await model.list()

            expect(projeler).toBeDefined()
            expect(projeler.length).toBeGreaterThanOrEqual(0)
        })

        test('create() metodu çalışıyor olmalı', async () => {
            const data = {
                isim: 'Test projesi',
                aciklama: 'Unit test deneme projesidir. Tüm testler beraber yapıldığında silinmektedir.',
                olusturan: 24
            }

            proje = await model.create(data)

            expect(proje).toBeDefined()
            expect(proje.id).toBeDefined()
        })

        describe('find() metodu çalışıyor olmalı', () => {
            test('Varolan kaydı getirebilmeli', async () => {
                const filter = {
                    id: proje.id || 0
                }
                const proje_detay = await model.find(filter)

                expect(proje_detay).toBeDefined()
                expect(proje_detay.id).toBe(proje.id)
            })

            test('Kayıt mevcut olmayınca boş dönmeli', async () => {
                const filter = {
                    id: 15624
                }
                const proje_detay = await model.find(filter)

                expect(proje_detay).toBeNull()
            })
        })

        test('update() metodu çalışıyor olmalı', async () => {
            const yeniProje = {...proje, isim: 'Güncellenmiş Test Projesi'}

            const postData = {...yeniProje}
            delete postData.Olusturan
            delete postData.Gorevler
            const guncellenenProje = await projeService.update(postData)

            expect(guncellenenProje).toBeDefined()
            expect(guncellenenProje).toStrictEqual(yeniProje)
        })

        test('delete() metodu çalışıyor olmalı', async () => {
            const silinenProje = await projeService.delete(proje.id)

            expect(silinenProje.id).toBe(proje.id)
            expect(silinenProje).toBeDefined()
        })
    })

    describe('Base Service', () => {
        let service
        let proje
        test('Service oluşturulabiliyor olmalı', () => {
            const model = new BaseModel(tableName, fields)
            service = new BaseService(model)

            expect(service).toBeDefined()
        })

        test('list() metodu çalışıyor olmalı', async () => {
            const projeler = await service.list()

            expect(projeler).toBeDefined()
            expect(projeler.length).toBeGreaterThanOrEqual(0)
        })

        test('create() metodu çalışıyor olmalı', async () => {
            const data = {
                isim: 'Test projesi',
                aciklama: 'Unit test deneme projesidir. Tüm testler beraber yapıldığında silinmektedir.',
                olusturan: 24
            }

            proje = await service.create(data)

            expect(proje).toBeDefined()
            expect(proje.id).toBeDefined()
        })

        test('find() metodu çalışıyor olmalı', async () => {
            const filter = {id: proje.id}

            const detay = await service.find(filter)

            expect(detay).toBeDefined()
            expect(detay.id).toBe(proje.id)
        })

        test('update() metodu çalışıyor olmalı', async () => {
            const yeniProje = {...proje, isim: 'Güncellenmiş Test Projesi'}

            const postData = {...yeniProje}
            delete postData.Olusturan
            delete postData.Gorevler
            const guncellenenProje = await service.update(postData)

            expect(guncellenenProje).toBeDefined()
            expect(guncellenenProje).toStrictEqual(yeniProje)
        })

        test('delete() metodu çalışıyor olmalı', async () => {
            const silinenProje = await service.delete(proje.id)

            expect(silinenProje.id).toBe(proje.id)
            expect(silinenProje).toBeDefined()
        })
    })
})