class Halte {
    constructor(id, nama, koridor, lokasi, lokasi_dekat, lokasi_detail) {
        this.id = id
        this.nama = nama
        this.koridor = koridor
        this.lokasi = lokasi
        this.lokasi_dekat = lokasi_dekat
        this.lokasi_detail = lokasi_detail
    }
    introduction() {
        return `Halte ${this.nama} adalah halte yang berada di ${this.lokasi},melayani koridor ${this.koridor}`
    }
    place() {
        return `Halte ${this.nama} dekat dengan ${this.lokasi_dekat}`
    }
    dimana() {
        return `Halte ${this.nama} berada di ${this.lokasi_detail}`
    }
}
class LandMark extends Halte {
    constructor(id, nama, koridor, lokasi, lokasi_dekat, lokasi_detail, momen) {
        super(id,nama,koridor,lokasi,lokasi_dekat,lokasi_detail)
        this.momen=momen
    }
    notes(a){
        return `${a} pernah ${this.momen} di Halte ${this.nama}`
    }
}
const halte = [
    {
        id: 0,
        nama: "Blok M",
        koridor: ['1'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Trunojoyo, Kebayoran Baru, Jakarta Selatan",
        lokasi_dekat: "Terminal Bus Blok M, Blok M Plaza, Kejaksaan Agung, Gedung ASEAN"
    },
    {
        id: 1,
        nama: "Sisingamangaraja",
        koridor: ['1'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Sisingamangaraja, Kebayoran Baru, Jakarta Selatan",
        lokasi_dekat: "Masjid Agung Al-Azhar, Mabes Polri"
    },
    {
        id: 2,
        nama: "Masjid Agung",
        koridor: ['1'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Sisingamangaraja, Kebayoran Baru, Jakarta Selatan",
        lokasi_dekat: "Masjid Agung Al-Azhar, Mabes Polri"
    },
    {
        id: 3,
        nama: "Bundaran Senayan",
        koridor: ['1'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Jenderal Sudirman, Senayan, Jakarta Selatan",
        lokasi_dekat: "Senayan City, Ratu Plaza, Bundaran Senayan"
    },
    {
        id: 4,
        nama: "Gelora Bung Karno",
        koridor: ['1'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Jenderal Sudirman, Senayan, Jakarta Pusat",
        lokasi_dekat: "Stadion Utama Gelora Bung Karno, FX Sudirman"
    },
    {
        id: 5,
        nama: "Polda Metro Jaya",
        koridor: ['1'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Jenderal Sudirman, Senayan, Jakarta Selatan",
        lokasi_dekat: "Polda Metro Jaya, Jakarta Convention Center"
    },
    {
        id: 6,
        nama: "Bendungan Hilir",
        koridor: ['1'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Jenderal Sudirman, Bendungan Hilir, Jakarta Pusat",
        lokasi_dekat: "Pasar Bendungan Hilir, Graha BIP"
    },
    {
        id: 7,
        nama: "Karet Sudirman",
        koridor: ['1'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Jenderal Sudirman, Karet Tengsin, Jakarta Pusat",
        lokasi_dekat: "Wisma Indocement, Citywalk Sudirman"
    },
    {
        id: 8,
        nama: "Dukuh Atas 1",
        koridor: ['1', '4', '6', '13'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Jenderal Sudirman, Dukuh Atas, Jakarta Pusat",
        lokasi_dekat: "Stasiun Sudirman, Stasiun MRT Dukuh Atas BNI, Landmark Tower"
    },
    {
        id: 9,
        nama: "Tosari",
        koridor: ['1'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan M.H. Thamrin, Kebon Melati, Jakarta Pusat",
        lokasi_dekat: "Taman Menteng, Hotel Mandarin Oriental"
    },
    {
        id: 10,
        nama: "Bundaran HI",
        koridor: ['1'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan M.H. Thamrin, Gondangdia, Jakarta Pusat",
        lokasi_dekat: "Hotel Indonesia Kempinski, Plaza Indonesia, Bundaran HI"
    },
    {
        id: 11,
        nama: "Sarinah",
        koridor: ['1'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan M.H. Thamrin, Gondangdia, Jakarta Pusat",
        lokasi_dekat: "Gedung Sarinah, Djakarta Theater"
    },
    {
        id: 12,
        nama: "Bank Indonesia",
        koridor: ['1'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan M.H. Thamrin, Kebon Sirih, Jakarta Pusat",
        lokasi_dekat: "Bank Indonesia, Monumen Selamat Datang"
    },
    {
        id: 13,
        nama: "Monumen Nasional",
        koridor: ['1', '2'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Medan Merdeka Barat, Gambir, Jakarta Pusat",
        lokasi_dekat: "Monumen Nasional (Monas), Istana Negara"
    },
    {
        id: 14,
        nama: "Harmoni Sentral",
        koridor: ['1', '2', '3', '8'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Gajah Mada, Petojo Utara, Jakarta Pusat",
        lokasi_dekat: "Gedung Duta Merlin, Sekretariat Negara"
    },
    {
        id: 15,
        nama: "Sawah Besar",
        koridor: ['1', '3'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Gajah Mada, Sawah Besar, Jakarta Pusat",
        lokasi_dekat: "Stasiun Sawah Besar, Gedung Sumpah Pemuda"
    },
    {
        id: 16,
        nama: "Mangga Besar",
        koridor: ['1', '3'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Hayam Wuruk, Mangga Besar, Jakarta Barat",
        lokasi_dekat: "Lippo Mall Puri, Hotel Jayakarta"
    },
    {
        id: 17,
        nama: "Olimo",
        koridor: ['1'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Hayam Wuruk, Taman Sari, Jakarta Barat",
        lokasi_dekat: "Lippo Mall Puri, Hotel Jayakarta"
    },
    {
        id: 18,
        nama: "Glodok",
        koridor: ['1'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Gajah Mada, Glodok, Jakarta Barat",
        lokasi_dekat: "Pancoran Chinatown Point, Glodok Plaza"
    },
    {
        id: 19,
        nama: "Kota",
        koridor: ['1'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Lada, Pinangsia, Jakarta Barat",
        lokasi_dekat: "Museum Fatahillah, Stasiun Kota"
    },
    {
        id: 20,
        nama: "Pulogadung",
        koridor: ['2', '4'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Terminal Pulogadung, Jatinegara, Jakarta Timur",
        lokasi_dekat: "Terminal Pulogadung, Mal Arion"
    },
    {
        id: 21,
        nama: "Bermis",
        koridor: ['2'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Jalan Raya Pemuda, Rawamangun, Jakarta Timur",
        lokasi_dekat: "Kantor Kecamatan Rawamangun, Arion Mall"
    },
    {
        id: 22,
        nama: "Pulomas",
        koridor: ['2'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Jalan Jenderal Ahmad Yani, Pulomas, Jakarta Timur",
        lokasi_dekat: "Pacuan Kuda Pulomas, Mall Artha Gading"
    },
    {
        id: 23,
        nama: "ASMI",
        koridor: ['2'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Jalan Jenderal Ahmad Yani, Rawasari, Jakarta Timur",
        lokasi_dekat: "Akademi Sekretaris dan Manajemen Indonesia (ASMI)"
    },
    {
        id: 24,
        nama: "Pedongkelan",
        koridor: ['2'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Jenderal Ahmad Yani, Rawasari, Jakarta Pusat",
        lokasi_dekat: "Halte Pedongkelan, Kecamatan Cempaka Putih"
    },
    {
        id: 25,
        nama: "Cempaka Mas",
        koridor: ['2', '10'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Jenderal Ahmad Yani, Cempaka Putih Timur, Jakarta Pusat",
        lokasi_dekat: "ITC Cempaka Mas, Komplek Ruko Cempaka Mas"
    },
    {
        id: 26,
        nama: "Sumur Batu",
        koridor: ['2'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Letjen Suprapto, Sumur Batu, Jakarta Pusat",
        lokasi_dekat: "Kantor Lurah Sumur Batu, Pasar Sumur Batu"
    },
    {
        id: 27,
        nama: "Cempaka Putih",
        koridor: ['2'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Letjen Suprapto, Cempaka Putih, Jakarta Pusat",
        lokasi_dekat: "Rumah Sakit Islam Jakarta Cempaka Putih, Pasar Cempaka Putih"
    },
    {
        id: 28,
        nama: "Senen Sentral",
        koridor: ['2', '5', '7F'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Letjen Suprapto, Senen, Jakarta Pusat",
        lokasi_dekat: "Pasar Senen, Stasiun Pasar Senen, Atrium Senen"
    },
    {
        id: 29,
        nama: "Kwitang",
        koridor: ['2'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Prapatan, Kwitang, Jakarta Pusat",
        lokasi_dekat: "Kantor Kejaksaan Negeri Jakarta Pusat, Gereja Katolik Katedral Jakarta"
    },
    {
        id: 30,
        nama: "Gambir 2",
        koridor: ['2'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Medan Merdeka Timur, Gambir, Jakarta Pusat",
        lokasi_dekat: "Stasiun Gambir, Monumen Nasional (Monas), Masjid Istiqlal"
    },
    {
        id: 31,
        nama: "Kalideres",
        koridor: ['3'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Terminal Kalideres, Kalideres, Jakarta Barat",
        lokasi_dekat: "Terminal Bus Kalideres, Pintu Tol Kalideres"
    },
    {
        id: 32,
        nama: "Pesakih",
        koridor: ['3'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Daan Mogot, Kalideres, Jakarta Barat",
        lokasi_dekat: "Stasiun Rawa Buaya, Kantor Kecamatan Kalideres"
    },
    {
        id: 33,
        nama: "Sumur Bor",
        koridor: ['3'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Daan Mogot, Kalideres, Jakarta Barat",
        lokasi_dekat: "RSUD Kalideres, Pintu Tol JORR"
    },
    {
        id: 34,
        nama: "Rawa Buaya",
        koridor: ['3'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Daan Mogot, Rawa Buaya, Jakarta Barat",
        lokasi_dekat: "Stasiun Rawa Buaya, Pintu Tol JORR"
    },
    {
        id: 35,
        nama: "Jembatan Baru",
        koridor: ['3'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Daan Mogot, Kalideres, Jakarta Barat",
        lokasi_dekat: "Jembatan Baru Cengkareng, Puri Indah Mall"
    },
    {
        id: 36,
        nama: "Dispenda Samsat Barat",
        koridor: ['3'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Daan Mogot, Cengkareng Timur, Jakarta Barat",
        lokasi_dekat: "Samsat Jakarta Barat, Cengkareng City Park"
    },
    {
        id: 37,
        nama: "Jembatan Gantung",
        koridor: ['3'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Daan Mogot, Cengkareng Timur, Jakarta Barat",
        lokasi_dekat: "Mall Daan Mogot, Kantor Walikota Jakarta Barat"
    },
    {
        id: 38,
        nama: "Taman Kota",
        koridor: ['3'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Daan Mogot, Kedaung Kali Angke, Jakarta Barat",
        lokasi_dekat: "Taman Kota Jakarta, Stasiun Kalideres"
    },
    {
        id: 39,
        nama: "Indosiar",
        koridor: ['3', '8'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Letjen S. Parman, Duri Kepa, Jakarta Barat",
        lokasi_dekat: "Studio Indosiar, Mall Ciputra"
    },
    {
        id: 40,
        nama: "Jelambar",
        koridor: ['3', '8', '9'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Letjen S. Parman, Tanjung Duren Selatan, Jakarta Barat",
        lokasi_dekat: "Mal Ciputra, Grogol"
    },
    {
        id: 41,
        nama: "Grogol 1",
        koridor: ['3', '8', '9'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Letjen S. Parman, Grogol, Jakarta Barat",
        lokasi_dekat: "Universitas Trisakti, Universitas Tarumanagara"
    },
    {
        id: 42,
        nama: "Roxy",
        koridor: ['3', '8'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Kyai Tapa, Grogol, Jakarta Pusat",
        lokasi_dekat: "Roxy Square, ITC Roxy Mas"
    },
    {
        id: 43,
        nama: "Pecenongan",
        koridor: ['2', '3', '8'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Pecenongan, Gambir, Jakarta Pusat",
        lokasi_dekat: "Kantor Kementerian Perhubungan, Stasiun Juanda"
    },
    {
        id: 44,
        nama: "Juanda",
        koridor: ['2', '3', '5C', '7F'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Juanda, Gambir, Jakarta Pusat",
        lokasi_dekat: "Stasiun Juanda, Masjid Istiqlal, Pasar Baru"
    },
    {
        id: 45,
        nama: "Pasar Baru",
        koridor: ['2', '3', '5', '5C'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Dr. Sutomo, Pasar Baru, Jakarta Pusat",
        lokasi_dekat: "Pasar Baru, Gedung Kesenian Jakarta"
    },
    {
        id: 46,
        nama: "Dukuh Atas 2",
        koridor: ['4', '6'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Jenderal Sudirman, Dukuh Atas, Jakarta Pusat",
        lokasi_dekat: "Stasiun Sudirman, Stasiun MRT Dukuh Atas BNI"
    },
    {
        id: 47,
        nama: "Halimun",
        koridor: ['4', '6'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Halimun Raya, Menteng, Jakarta Selatan",
        lokasi_dekat: "Stasiun LRT Dukuh Atas, Halte Transjakarta Dukuh Atas"
    },
    {
        id: 48,
        nama: "Manggarai",
        koridor: ['4'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Sultan Agung, Manggarai, Jakarta Selatan",
        lokasi_dekat: "Stasiun Manggarai, Pasar Manggarai"
    },
    {
        id: 49,
        nama: "Matraman",
        koridor: ['4', '5'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Jalan Matraman Raya, Matraman, Jakarta Timur",
        lokasi_dekat: "Pasar Matraman, Gramedia Matraman"
    },
    {
        id: 50,
        nama: "Tegal Parang",
        koridor: ['9', '13'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Mampang Prapatan, Tegal Parang, Jakarta Selatan",
        lokasi_dekat: "Hotel Bidakara, Tendean"
    },
    {
        id: 51,
        nama: "Pancoran Barat",
        koridor: ['9'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Jenderal Gatot Subroto, Pancoran, Jakarta Selatan",
        lokasi_dekat: "Patung Pancoran, Menara Bidakara 2"
    },
    {
        id: 52,
        nama: "Cawang Ciliwung",
        koridor: ['9'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Jalan Jenderal Gatot Subroto, Cawang, Jakarta Timur",
        lokasi_dekat: "Patung Pancoran, Cawang"
    },
    {
        id: 53,
        nama: "Cikoko Stasiun Cawang",
        koridor: ['9'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Jalan MT Haryono, Cikoko, Jakarta Timur",
        lokasi_dekat: "Stasiun Cawang, Menara Saidah"
    },
    {
        id: 54,
        nama: "Tanjung Priok",
        koridor: ['10', '12'],
        lokasi: "Jakarta Utara",
        lokasi_detail: "Jalan Enggano, Tanjung Priok, Jakarta Utara",
        lokasi_dekat: "Terminal Tanjung Priok, Pelabuhan Tanjung Priok"
    },
    {
        id: 55,
        nama: "Enggano",
        koridor: ['10', '12'],
        lokasi: "Jakarta Utara",
        lokasi_detail: "Jalan Yos Sudarso, Tanjung Priok, Jakarta Utara",
        lokasi_dekat: "Terminal Tanjung Priok, Hotel Grand Cempaka"
    },
    {
        id: 56,
        nama: "Permai Koja",
        koridor: ['10'],
        lokasi: "Jakarta Utara",
        lokasi_detail: "Jalan Yos Sudarso, Koja, Jakarta Utara",
        lokasi_dekat: "Jakarta Islamic Centre, RSUD Koja"
    },
    {
        id: 57,
        nama: "Sunter Kelapa Gading",
        koridor: ['10', '12'],
        lokasi: "Jakarta Utara",
        lokasi_detail: "Jalan Yos Sudarso, Sunter Agung, Jakarta Utara",
        lokasi_dekat: "Mall Artha Gading, Sunter Mall"
    },
    {
        id: 58,
        nama: "Yos Sudarso Kodamar",
        koridor: ['10'],
        lokasi: "Jakarta Utara",
        lokasi_detail: "Jalan Yos Sudarso, Sunter Jaya, Jakarta Utara",
        lokasi_dekat: "Kawasan Kodamar, Mall Kelapa Gading"
    },
    {
        id: 59,
        nama: "PGC 1",
        koridor: ['5', '7', '9', '10'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Pusat Grosir Cililitan, Kramat Jati, Jakarta Timur",
        lokasi_dekat: "PGC, Terminal Cililitan, Cililitan"
    },
    {
        id: 60,
        nama: "Kampung Melayu",
        koridor: ['5', '7', '11'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Jalan Otto Iskandardinata, Kampung Melayu, Jakarta Timur",
        lokasi_dekat: "Terminal Kampung Melayu, Stasiun Tebet"
    },
    {
        id: 61,
        nama: "Ragunan",
        koridor: ['6'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan R.M. Harsono, Ragunan, Jakarta Selatan",
        lokasi_dekat: "Kebun Binatang Ragunan, Gelanggang Olahraga Ragunan"
    },
    {
        id: 62,
        nama: "Deptan",
        koridor: ['6'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Raya Harsono, Ragunan, Jakarta Selatan",
        lokasi_dekat: "Kantor Kementerian Pertanian, GOR Ragunan"
    },
    {
        id: 63,
        nama: "Mampang Prapatan",
        koridor: ['6', '7', '9'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Mampang Prapatan Raya, Mampang Prapatan, Jakarta Selatan",
        lokasi_dekat: "Kementerian Hukum dan HAM, Mampang Prapatan"
    },
    {
        id: 64,
        nama: "Kuningan Timur",
        koridor: ['6', '9'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Jenderal Gatot Subroto, Kuningan, Jakarta Selatan",
        lokasi_dekat: "Gedung Cyber 2, Menara Jamsostek"
    },
    {
        id: 65,
        nama: "Gatot Subroto Jamsostek",
        koridor: ['9'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Jenderal Gatot Subroto, Mampang Prapatan, Jakarta Selatan",
        lokasi_dekat: "Menara Jamsostek, Graha Unilever"
    },
    {
        id: 66,
        nama: "Slipi Petamburan",
        koridor: ['9'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan S. Parman, Petamburan, Jakarta Pusat",
        lokasi_dekat: "RS Harapan Kita, Wisma Slipi"
    },
    {
        id: 67,
        nama: "Slipi Kemanggisan",
        koridor: ['9'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan S. Parman, Kemanggisan, Jakarta Barat",
        lokasi_dekat: "Jakarta Design Center, Plaza Slipi Jaya"
    },
    {
        id: 68,
        nama: "Harapan Kita",
        koridor: ['9'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan S. Parman, Palmerah, Jakarta Barat",
        lokasi_dekat: "RS Harapan Kita, RS Anak dan Bunda Harapan Kita"
    },
    {
        id: 69,
        nama: "S. Parman Podomoro City",
        koridor: ['9'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan S. Parman, Tanjung Duren Selatan, Jakarta Barat",
        lokasi_dekat: "Central Park Mall, Podomoro City"
    },
    {
        id: 70,
        nama: "Pinang Ranti",
        koridor: ['9'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Jalan Taman Mini Indonesia Indah, Pinang Ranti, Jakarta Timur",
        lokasi_dekat: "Terminal Pinang Ranti, Pintu Tol Taman Mini"
    },
    {
        id: 71,
        nama: "Pluit",
        koridor: ['9', '12'],
        lokasi: "Jakarta Utara",
        lokasi_detail: "Jalan Pluit Selatan Raya, Penjaringan, Jakarta Utara",
        lokasi_dekat: "Pluit Village, Pluit Junction"
    },
    {
        id: 72,
        nama: "Ancol",
        koridor: ['5'],
        lokasi: "Jakarta Utara",
        lokasi_detail: "Jalan RE Martadinata, Ancol, Jakarta Utara",
        lokasi_dekat: "Taman Impian Jaya Ancol, Dufan"
    },
    {
        id: 73,
        nama: "Lebak Bulus Grab",
        koridor: ['8'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan R.A. Kartini, Lebak Bulus, Jakarta Selatan",
        lokasi_dekat: "Terminal Bus Lebak Bulus, Stasiun MRT Lebak Bulus Grab"
    },
    {
        id: 74,
        nama: "Pondok Indah 1",
        koridor: ['8'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Metro Pondok Indah, Pondok Pinang, Jakarta Selatan",
        lokasi_dekat: "Pondok Indah Mall 1, Hotel Intercontinental Pondok Indah"
    },
    {
        id: 75,
        nama: "Kebayoran Lama",
        koridor: ['8', '13'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Sultan Iskandar Muda, Kebayoran Lama, Jakarta Selatan",
        lokasi_dekat: "Gandaria City Mall, Stasiun Kebayoran"
    },
    {
        id: 76,
        nama: "Permata Hijau",
        koridor: ['8'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Arteri Pondok Indah, Kebayoran Lama, Jakarta Selatan",
        lokasi_dekat: "Permata Hijau, ITC Permata Hijau"
    },
    {
        id: 77,
        nama: "Tomang Mandala",
        koridor: ['8'],
        lokasi: "Jakarta Barat",
        lokasi_detail: "Jalan Tomang Raya, Tomang, Jakarta Barat",
        lokasi_dekat: "Jakarta Barat Tomang, Jembatan Tomang"
    },
    {
        id: 78,
        nama: "CSW",
        koridor: ['1', '13'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Sisingamangaraja, Kebayoran Baru, Jakarta Selatan",
        lokasi_dekat: "Apotek Kimia Farma, Universitas Al-Azhar"
    },
    {
        id: 79,
        nama: "Ciledug Puri Beta 2",
        koridor: ['13'],
        lokasi: "Tangerang",
        lokasi_detail: "Jalan H. Mencong, Larangan Utara, Tangerang",
        lokasi_dekat: "Puri Beta, CBD Ciledug"
    },
    {
        id: 80,
        nama: "Pondok Pinang",
        koridor: ['8'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Ciputat Raya, Pondok Pinang, Jakarta Selatan",
        lokasi_dekat: "RS Pondok Indah, Mal Pondok Indah"
    },
    {
        id: 81,
        nama: "Cipulir",
        koridor: ['8'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Ciledug Raya, Cipulir, Jakarta Selatan",
        lokasi_dekat: "ITC Cipulir, Pasar Cipulir"
    },
    {
        id: 82,
        nama: "Tebet Barat",
        koridor: ['8'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Letjen M.T. Haryono, Tebet Barat, Jakarta Selatan",
        lokasi_dekat: "Stasiun Tebet, Mall Kota Kasablanka"
    },
    {
        id: 83,
        nama: "Tebet Timur",
        koridor: ['8'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Dr. Saharjo, Tebet Timur, Jakarta Selatan",
        lokasi_dekat: "Universitas Gadjah Mada, Tebet"
    },
    {
        id: 84,
        nama: "Kuningan Barat",
        koridor: ['9'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Jenderal Gatot Subroto, Kuningan Barat, Jakarta Selatan",
        lokasi_dekat: "Plaza Kuningan, Menara Bidakara"
    },
    {
        id: 85,
        nama: "Pasar Minggu",
        koridor: ['9'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Raya Ragunan, Pasar Minggu, Jakarta Selatan",
        lokasi_dekat: "Pasar Minggu, Stasiun Pasar Minggu"
    },
    {
        id: 86,
        nama: "Tanjung Barat",
        koridor: ['9'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Raya Lenteng Agung, Tanjung Barat, Jakarta Selatan",
        lokasi_dekat: "Stasiun Tanjung Barat, AEON Mall Tanjung Barat"
    },
    {
        id: 87,
        nama: "Lenteng Agung",
        koridor: ['9'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Raya Lenteng Agung, Lenteng Agung, Jakarta Selatan",
        lokasi_dekat: "Lenteng Agung, Universitas Pancasila"
    },
    {
        id: 88,
        nama: "University of Indonesia",
        koridor: ['9'],
        lokasi: "Jakarta Selatan",
        lokasi_detail: "Jalan Lenteng Agung, Universitas Indonesia, Jakarta Selatan",
        lokasi_dekat: "Universitas Indonesia, Stasiun Universitas Indonesia"
    },
    {
        id: 89,
        nama: "Pondok Cina",
        koridor: ['9'],
        lokasi: "Depok",
        lokasi_detail: "Jalan Margonda Raya, Pondok Cina, Depok",
        lokasi_dekat: "Margo City Mall, Depok Town Square"
    },
    {
        id: 90,
        nama: "Depok Baru",
        koridor: ['9'],
        lokasi: "Depok",
        lokasi_detail: "Jalan Margonda Raya, Depok, Depok",
        lokasi_dekat: "ITC Depok, Stasiun Depok Baru"
    },
    {
        id: 91,
        nama: "Depok Terminal",
        koridor: ['9'],
        lokasi: "Depok",
        lokasi_detail: "Jalan Margonda Raya, Depok, Depok",
        lokasi_dekat: "Terminal Bus Depok, Margo City"
    },
    {
        id: 92,
        nama: "Cawang UKI",
        koridor: ['10'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Jalan Letjen M.T. Haryono, Cawang, Jakarta Timur",
        lokasi_dekat: "Universitas Kristen Indonesia (UKI), BNN"
    },
    {
        id: 93,
        nama: "Ciliwung",
        koridor: ['10'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Jalan MT Haryono, Cawang, Jakarta Timur",
        lokasi_dekat: "Stasiun LRT Cikoko, Jembatan Ciliwung"
    },
    {
        id: 94,
        nama: "Pedati",
        koridor: ['10'],
        lokasi: "Jakarta Pusat",
        lokasi_detail: "Jalan Kramat Raya, Kramat Jati, Jakarta Timur",
        lokasi_dekat: "Stasiun Cipinang, Terminal Cililitan"
    },
    {
        id: 95,
        nama: "Stasiun Jatinegara",
        koridor: ['10', '11'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Jalan Jatinegara Barat, Jatinegara, Jakarta Timur",
        lokasi_dekat: "Stasiun Jatinegara, Pasar Jatinegara"
    },
    {
        id: 96,
        nama: "Bidara Cina",
        koridor: ['11'],
        lokasi: "Jakarta Timur",
        lokasi_detail: "Jalan Otto Iskandardinata, Bidara Cina, Jakarta Timur",
        lokasi_dekat: "Terminal Kampung Melayu, Pasar Jatinegara"
    },
    {
        id: 97,
        nama: "Rawa Bebek",
        koridor: ['12'],
        lokasi: "Jakarta Utara",
        lokasi_detail: "Jalan Cakung Cilincing Raya, Rawa Bebek, Jakarta Utara",
        lokasi_dekat: "Rawa Bebek, Pintu Tol Cakung"
    },
    {
        id: 98,
        nama: "Pluit Village",
        koridor: ['12'],
        lokasi: "Jakarta Utara",
        lokasi_detail: "Jalan Pluit Indah, Penjaringan, Jakarta Utara",
        lokasi_dekat: "Pluit Village, Emporium Pluit Mall"
    },
    {
        id: 99,
        nama: "Pasar Koja",
        koridor: ['12'],
        lokasi: "Jakarta Utara",
        lokasi_detail: "Jalan Kramat Jaya Raya, Koja, Jakarta Utara",
        lokasi_dekat: "Pasar Koja, Kantor Walikota Jakarta Utara"
    },
    {
        id: 100,
        nama: "Walikota Jakarta Utara",
        koridor: ['12'],
        lokasi: "Jakarta Utara",
        lokasi_detail: "Jalan Yos Sudarso, Koja, Jakarta Utara",
        lokasi_dekat: "Kantor Walikota Jakarta Utara, Mall Kelapa Gading"
    }
]

// class LandMark extends Halte{

// }
let i = 0
halte.map((h) => {
    halte[h.id] = new Halte(h.id, h.nama, h.koridor, h.lokasi, h.lokasi_dekat, h.lokasi_detail)
})

const cariIdHalte = (nama) => {
    let a = 0
    halte.find(h => {
        if (h.nama.toLowerCase().includes(nama)) {
            a = parseFloat(h.id)
        }
    })
    if (a == 0) {
        return 49
    } else {
        return a
    }
}
const cariKoridorHalte = (nama) => {
    let a = ''
    halte.find(h => {
        if (h.nama.toLowerCase().includes(nama)) {
            a = h.koridor
        }
    })

    return a
}
const cariHalte = (nama) => {
    let a = ''
    halte.find(h => {
        if (h.nama.toLowerCase().includes(nama)) {
            a = h.nama
        }
    })

    return a
}
// console.info(cariHalte('polda'))
// console.table(halte[cariHalte('matraman')].place("Gramedia Matraman"))
// console.info(halte[49].place("Gramedia Matraman"))
// console.info(halte[49].place())

// const momen1=new LandMark( 
//     cariIdHalte('matraman'), cariHalte("matraman") ,cariKoridorHalte("matraman"),cariLokasiHalte("matraman"), carilokasiDekatHalte("matraman"), cariLokasiDetailHalte("matraman"),"nyasar"
// )
const momen1=new LandMark(cariIdHalte("matraman"),cariHalte("matraman"),cariKoridorHalte("matraman"),0,0,0,"Nyasar")
console.log(halte[cariIdHalte("matraman")])
// console.log(halte[cariIdHalte("monumen")].introduction())
// console.log(halte[cariIdHalte("senayan")].place())
// console.log(halte[cariIdHalte("kemanggisan")].dimana())
console.log(momen1.notes("Dedy"))