const { Proje } = require('../models')

const liste = () => Proje.liste()

const ekle = async (data) => Proje.ekle(data)

const guncelle = async (data) => Proje.guncelle(data)

const sil = async (data) => Proje.sil(data)

module.exports = {
    liste,
    ekle,
    guncelle,
    sil
}