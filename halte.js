class Halte {
    constructor(nama, koridor, lokasi) {
        this.nama = nama
        this.koridor = koridor
        this.lokasi = lokasi
    }
    introduction() {
        return `Halte ${this.nama} adalah halte yang berada di ${this.lokasi},melayani koridor ${this.koridor}`
    }
    place(a) {
        return `Halte ${this.nama} dekat dengan ${a}`
    }
}
const halte = [
    { id: 0, nama: "Blok M", koridor: ['1'], lokasi: "Jakarta Selatan" },
    { id: 1, nama: "Sisingamangaraja", koridor: ['1'], lokasi: "Jakarta Selatan" },
    { id: 2, nama: "Masjid Agung", koridor: ['1'], lokasi: "Jakarta Selatan" },
    { id: 3, nama: "Bundaran Senayan", koridor: ['1'], lokasi: "Jakarta Selatan" },
    { id: 4, nama: "Gelora Bung Karno", koridor: ['1'], lokasi: "Jakarta Pusat" },
    { id: 5, nama: "Polda Metro Jaya", koridor: ['1'], lokasi: "Jakarta Selatan" },
    { id: 6, nama: "Bendungan Hilir", koridor: ['1'], lokasi: "Jakarta Pusat" },
    { id: 7, nama: "Karet Sudirman", koridor: ['1'], lokasi: "Jakarta Pusat" },
    { id: 8, nama: "Dukuh Atas 1", koridor: ['1', '4', '6', '13'], lokasi: "Jakarta Pusat" },
    { id: 9, nama: "Tosari", koridor: ['1'], lokasi: "Jakarta Pusat" },
    { id: 10, nama: "Bundaran HI", koridor: ['1'], lokasi: "Jakarta Pusat" },
    { id: 11, nama: "Sarinah", koridor: ['1'], lokasi: "Jakarta Pusat" },
    { id: 12, nama: "Bank Indonesia", koridor: ['1'], lokasi: "Jakarta Pusat" },
    { id: 13, nama: "Monumen Nasional", koridor: ['1', '2'], lokasi: "Jakarta Pusat" },
    { id: 14, nama: "Harmoni Sentral", koridor: ['1', '2', '3', '8'], lokasi: "Jakarta Pusat" },
    { id: 15, nama: "Sawah Besar", koridor: ['1', '3'], lokasi: "Jakarta Pusat" },
    { id: 16, nama: "Mangga Besar", koridor: ['1', '3'], lokasi: "Jakarta Barat" },
    { id: 17, nama: "Olimo", koridor: ['1'], lokasi: "Jakarta Barat" },
    { id: 18, nama: "Glodok", koridor: ['1'], lokasi: "Jakarta Barat" },
    { id: 19, nama: "Kota", koridor: ['1'], lokasi: "Jakarta Barat" },
    { id: 20, nama: "Pulogadung", koridor: ['2', '4'], lokasi: "Jakarta Timur" },
    { id: 21, nama: "Bermis", koridor: ['2'], lokasi: "Jakarta Timur" },
    { id: 22, nama: "Pulomas", koridor: ['2'], lokasi: "Jakarta Timur" },
    { id: 23, nama: "ASMI", koridor: ['2'], lokasi: "Jakarta Timur" },
    { id: 24, nama: "Pedongkelan", koridor: ['2'], lokasi: "Jakarta Pusat" },
    { id: 25, nama: "Cempaka Mas", koridor: ['2', '10'], lokasi: "Jakarta Pusat" },
    { id: 26, nama: "Sumur Batu", koridor: ['2'], lokasi: "Jakarta Pusat" },
    { id: 27, nama: "Cempaka Putih", koridor: ['2'], lokasi: "Jakarta Pusat" },
    { id: 28, nama: "Senen Sentral", koridor: ['2', '5', '7F'], lokasi: "Jakarta Pusat" },
    { id: 29, nama: "Kwitang", koridor: ['2'], lokasi: "Jakarta Pusat" },
    { id: 30, nama: "Gambir 2", koridor: ['2'], lokasi: "Jakarta Pusat" },
    { id: 31, nama: "Kalideres", koridor: ['3'], lokasi: "Jakarta Barat" },
    { id: 32, nama: "Pesakih", koridor: ['3'], lokasi: "Jakarta Barat" },
    { id: 33, nama: "Sumur Bor", koridor: ['3'], lokasi: "Jakarta Barat" },
    { id: 34, nama: "Rawa Buaya", koridor: ['3'], lokasi: "Jakarta Barat" },
    { id: 35, nama: "Jembatan Baru", koridor: ['3'], lokasi: "Jakarta Barat" },
    { id: 36, nama: "Dispenda Samsat Barat", koridor: ['3'], lokasi: "Jakarta Barat" },
    { id: 37, nama: "Jembatan Gantung", koridor: ['3'], lokasi: "Jakarta Barat" },
    { id: 38, nama: "Taman Kota", koridor: ['3'], lokasi: "Jakarta Barat" },
    { id: 39, nama: "Indosiar", koridor: ['3', '8'], lokasi: "Jakarta Barat" },
    { id: 40, nama: "Jelambar", koridor: ['3', '8', '9'], lokasi: "Jakarta Barat" },
    { id: 41, nama: "Grogol 1", koridor: ['3', '8', '9'], lokasi: "Jakarta Barat" },
    { id: 42, nama: "Roxy", koridor: ['3', '8'], lokasi: "Jakarta Pusat" },
    { id: 43, nama: "Pecenongan", koridor: ['2', '3', '8'], lokasi: "Jakarta Pusat" },
    { id: 44, nama: "Juanda", koridor: ['2', '3', '5C', '7F'], lokasi: "Jakarta Pusat" },
    { id: 45, nama: "Pasar Baru", koridor: ['2', '3', '5', '5C'], lokasi: "Jakarta Pusat" },
    { id: 46, nama: "Dukuh Atas 2", koridor: ['4', '6'], lokasi: "Jakarta Pusat" },
    { id: 47, nama: "Halimun", koridor: ['4', '6'], lokasi: "Jakarta Selatan" },
    { id: 48, nama: "Manggarai", koridor: ['4'], lokasi: "Jakarta Selatan" },
    { id: 49, nama: "Matraman", koridor: ['4', '5'], lokasi: "Jakarta Timur" },
    { id: 50, nama: "Tegal Parang", koridor: ['9', '13'], lokasi: "Jakarta Selatan" },
    { id: 51, nama: "Pancoran Barat", koridor: ['9'], lokasi: "Jakarta Selatan" },
    { id: 52, nama: "Cawang Ciliwung", koridor: ['9'], lokasi: "Jakarta Timur" },
    { id: 53, nama: "Cikoko Stasiun Cawang", koridor: ['9'], lokasi: "Jakarta Timur" },
    { id: 54, nama: "Tanjung Priok", koridor: ['10', '12'], lokasi: "Jakarta Utara" },
    { id: 55, nama: "Enggano", koridor: ['10', '12'], lokasi: "Jakarta Utara" },
    { id: 56, nama: "Permai Koja", koridor: ['10'], lokasi: "Jakarta Utara" },
    { id: 57, nama: "Sunter Kelapa Gading", koridor: ['10', '12'], lokasi: "Jakarta Utara" },
    { id: 58, nama: "Yos Sudarso Kodamar", koridor: ['10'], lokasi: "Jakarta Utara" },
    { id: 59, nama: "PGC 1", koridor: ['5', '7', '9', '10'], lokasi: "Jakarta Timur" },
    { id: 60, nama: "Kampung Melayu", koridor: ['5', '7', '11'], lokasi: "Jakarta Timur" },
    { id: 61, nama: "Ragunan", koridor: ['6'], lokasi: "Jakarta Selatan" },
    { id: 62, nama: "Deptan", koridor: ['6'], lokasi: "Jakarta Selatan" },
    { id: 63, nama: "Mampang Prapatan", koridor: ['6', '7', '9'], lokasi: "Jakarta Selatan" },
    { id: 64, nama: "Kuningan Timur", koridor: ['6', '9'], lokasi: "Jakarta Selatan" },
    { id: 65, nama: "Gatot Subroto Jamsostek", koridor: ['9'], lokasi: "Jakarta Selatan" },
    { id: 66, nama: "Slipi Petamburan", koridor: ['9'], lokasi: "Jakarta Pusat" },
    { id: 67, nama: "Slipi Kemanggisan", koridor: ['9'], lokasi: "Jakarta Barat" },
    { id: 68, nama: "Harapan Kita", koridor: ['9'], lokasi: "Jakarta Barat" },
    { id: 69, nama: "S. Parman Podomoro City", koridor: ['9'], lokasi: "Jakarta Barat" },
    { id: 70, nama: "Pinang Ranti", koridor: ['9'], lokasi: "Jakarta Timur" },
    { id: 71, nama: "Pluit", koridor: ['9', '12'], lokasi: "Jakarta Utara" },
    { id: 72, nama: "Ancol", koridor: ['5'], lokasi: "Jakarta Utara" },
    { id: 73, nama: "Lebak Bulus Grab", koridor: ['8'], lokasi: "Jakarta Selatan" },
    { id: 74, nama: "Pondok Indah 1", koridor: ['8'], lokasi: "Jakarta Selatan" },
    { id: 75, nama: "Kebayoran Lama", koridor: ['8', '13'], lokasi: "Jakarta Selatan" },
    { id: 76, nama: "Permata Hijau", koridor: ['8'], lokasi: "Jakarta Selatan" },
    { id: 77, nama: "Tomang Mandala", koridor: ['8'], lokasi: "Jakarta Barat" },
    { id: 78, nama: "CSW", koridor: ['1', '13'], lokasi: "Jakarta Selatan" },
    { id: 79, nama: "Ciledug Puri Beta 2", koridor: ['13'], lokasi: "Tangerang" },
]
// const halteSenen = new Halte('Senen Sentral',['2','2A','7F','14'],'Jakarta Pusat')
// const halteLapTeng = new Halte('Lapangan Banteng',['5','5C','6H'],'Jakarta Pusat')
// const halteMatraman = new Halte('Matraman',['5','5C','4','4D'],'Jakarta Timur')

// console.info(halteSenen)
// console.info(halteLapTeng.place('SMKN 1 Jakarta'))
// console.info(halteMatraman.introduction())
let i = 0
halte.map((h) => {
    halte[h.id] = new Halte(h.nama, h.koridor, h.lokasi)
})

console.table(halte)