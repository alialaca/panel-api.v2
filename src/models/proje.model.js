const prisma = require('../services/mysql')()

const selectField = {
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

const liste = (fields = selectField) => {
    return prisma.projeler.findMany({
        select: fields
    })
}

const ekle = (data, fields = selectField) => {
    return prisma.projeler.create({
        data: data,
        select: fields
    })
}

const sil = (id) => {
    return prisma.projeler.delete({
        where: {id},
        select: selectField
    })
}

const guncelle = ({id, ...data}, fields= selectField) => {
    return prisma.projeler.update({
        where: {id},
        data,
        select: fields
    })
}

module.exports = {
    liste,
    ekle,
    guncelle,
    sil
}