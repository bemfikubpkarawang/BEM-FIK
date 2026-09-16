/* =====================================================
   DATA LOADER
   BEM Fakultas Ilmu Komputer
===================================================== */

/* =====================================================
   BASE PATH & DATA PATH
===================================================== */

const isPagesDirectory = window.location.pathname.toLowerCase().includes("/pages/") ||
                         window.location.pathname.toLowerCase().includes("\\pages\\");

const BASE_PATH = isPagesDirectory ? "../" : "";
const DATA_PATH = `${BASE_PATH}data/`;

/* =====================================================
   FALLBACK DATA (Ensures 100% data availability)
===================================================== */

const FALLBACK_PROFIL = {
  "nama": "Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer",
  "singkatan": "BEM FIK",
  "universitas": "Universitas Buana Perjuangan Karawang",
  "deskripsi": "Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer merupakan organisasi kemahasiswaan yang menjadi wadah aspirasi, kolaborasi, pengembangan potensi, serta penggerak berbagai kegiatan akademik maupun non-akademik bagi seluruh mahasiswa Fakultas Ilmu Komputer.",
  "visiSingkat": "Mewujudkan BEM FIK yang Kolaboratif, Inovatif, Adaptif, dan Berdampak.",
  "alamat": "Jl. HS Ronggowaluyo, Telukjambe Timur, Karawang, Jawa Barat",
  "email": "bemfikubpkarawang@gmail.com",
  "whatsapp": "+62 812-3456-7890",
  "instagram": "https://instagram.com/bemfik.ubp",
  "youtube": "https://youtube.com/@bemfikubp",
  "tiktok": "https://tiktok.com/@bemfikubp",
  "linkedin": "https://linkedin.com/company/bemfikubp",
  "website": "https://bemfikubp.github.io",
  "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
  "heroImage": "assets/images/hero/hero-bem.jpg",
  "hero": {
    "judul": "Bersama Berkarya untuk Fakultas Ilmu Komputer",
    "subjudul": "Membangun kolaborasi, menciptakan inovasi, serta menghadirkan program kerja yang berdampak bagi seluruh mahasiswa Fakultas Ilmu Komputer."
  },
  "statistik": {
    "divisi": 4,
    "programKerja": 9,
    "pengurus": 19
  },
  "sosialMedia": [
    { "nama": "Instagram", "icon": "fab fa-instagram", "url": "https://instagram.com/bemfik.ubp" },
    { "nama": "YouTube", "icon": "fab fa-youtube", "url": "https://youtube.com/@bemfikubp" },
    { "nama": "TikTok", "icon": "fab fa-tiktok", "url": "https://tiktok.com/@bemfikubp" },
    { "nama": "LinkedIn", "icon": "fab fa-linkedin", "url": "https://linkedin.com/company/bemfikubp" }
  ],
  "jamOperasional": {
    "seninJumat": "08.00 - 16.00",
    "sabtu": "08.00 - 12.00",
    "minggu": "Tutup"
  },
  "sejarah": {
    "judul": "Sejarah Organisasi",
    "isi": "Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer dibentuk sebagai organisasi mahasiswa yang menjadi wadah aspirasi, pengembangan potensi, serta pelaksana kegiatan kemahasiswaan di lingkungan Fakultas Ilmu Komputer. Sejak berdiri, BEM FIK terus berkomitmen menghadirkan program kerja yang bermanfaat bagi mahasiswa dan masyarakat."
  },
  "tujuan": [
    "Menjadi wadah aspirasi mahasiswa.",
    "Mengembangkan potensi mahasiswa.",
    "Membangun kolaborasi dengan berbagai pihak.",
    "Menyelenggarakan program kerja yang berdampak."
  ]
};

const FALLBACK_VISIMISI = {
  "visi": {
    "judul": "Visi",
    "isi": "Mewujudkan BEM FIK sebagai organisasi yang kolaboratif, aspiratif, adaptif, dan berdampak dalam mendukung pengembangan potensi mahasiswa."
  },
  "misi": [
    {
      "id": 1,
      "isi": "Mengoptimalkan penyebaran informasi akademik, non akademik serta peluang pengembangan diri agar dapat diakses secara merata oleh seluruh Mahasiswa."
    },
    {
      "id": 2,
      "isi": "Menjadi wadah aspirasi yang terbuka, responsive dan menjembatani komunikasi antara mahasiswa dan fakultas."
    },
    {
      "id": 3,
      "isi": "Memperkuat kolaborasi dengan HMPS, UKM, BEM antar Fakultas dan pihak fakultas dalam menciptakan lingkungan kemahasiswaan yang aktif."
    },
    {
      "id": 4,
      "isi": "Mendorong pengembangan kompetensi mahasiswa melalui kegiatan yang relavan dengan kebutuhan akademik, organisasi dan dunia kerja."
    }
  ],
  "nilaiOrganisasi": [
    {
      "nama": "Integritas",
      "deskripsi": "Menjunjung tinggi kejujuran, tanggung jawab, dan etika dalam setiap kegiatan organisasi.",
      "icon": "fas fa-shield-alt"
    },
    {
      "nama": "Kolaborasi",
      "deskripsi": "Membangun kerja sama yang harmonis antar pengurus, mahasiswa, dan seluruh mitra organisasi.",
      "icon": "fas fa-handshake"
    },
    {
      "nama": "Inovasi",
      "deskripsi": "Menghadirkan gagasan dan program kerja yang kreatif, relevan, dan mengikuti perkembangan teknologi.",
      "icon": "fas fa-lightbulb"
    },
    {
      "nama": "Profesional",
      "deskripsi": "Bekerja secara disiplin, terencana, dan berorientasi pada kualitas hasil.",
      "icon": "fas fa-briefcase"
    },
    {
      "nama": "Adaptif",
      "deskripsi": "Cepat beradaptasi terhadap perubahan serta mampu menjawab tantangan zaman.",
      "icon": "fas fa-sync-alt"
    }
  ],
  "tagline": "Kolaboratif • Inovatif • Adaptif • Berdampak"
};

const FALLBACK_DIVISI = [
  {
    "id": 1,
    "nama": "Komunikasi dan Informasi",
    "singkatan": "KOMINFO",
    "logo": "assets/images/divisi/kominfo.png",
    "icon": "fas fa-bullhorn",
    "warna": "#8B5CF6",
    "deskripsi": "Departemen yang bertanggung jawab dalam pengelolaan media informasi, publikasi, dokumentasi, branding organisasi, serta menjalin hubungan luar.",
    "visi": "Menjadi pusat informasi organisasi yang informatif, kreatif, profesional, dan mudah diakses oleh seluruh mahasiswa.",
    "tugas": [
      "Mengelola media informasi BEM.",
      "Membuat publikasi kegiatan.",
      "Melakukan dokumentasi kegiatan.",
      "Menjalin hubungan luar dan media partner."
    ],
    "koordinator": {
      "nama": "",
      "jabatan": "Kepala Departemen KOMINFO",
      "foto": "assets/images/pengurus/default.png"
    },
    "wakil": null,
    "jumlahAnggota": 5,
    "proker": [
      "Mading Digital",
      "Publikasi Kegiatan",
      "Dokumentasi Acara"
    ]
  },
  {
    "id": 2,
    "nama": "Minat dan Bakat",
    "singkatan": "",
    "logo": "assets/images/divisi/minba.png",
    "icon": "fas fa-medal",
    "warna": "#EC4899",
    "deskripsi": "Departemen yang memfasilitasi pengembangan minat mahasiswa pada bidang olahraga, seni, serta kreativitas.",
    "visi": "Mengembangkan potensi mahasiswa melalui kegiatan positif dan kompetitif.",
    "tugas": [
      "Mengembangkan minat olahraga.",
      "Mengembangkan seni mahasiswa.",
      "Mendorong kreativitas mahasiswa.",
      "Menyelenggarakan kegiatan pengembangan bakat."
    ],
    "koordinator": {
      "nama": "",
      "jabatan": "Kepala Departemen MINBA",
      "foto": "assets/images/pengurus/default.png"
    },
    "wakil": null,
    "jumlahAnggota": 4,
    "proker": [
      "PKKMB",
      "Inagurasi",
      "Pekan Olahraga Mahasiswa (POM)"
    ]
  },
  {
    "id": 3,
    "nama": "Pengembangan Sumber Daya Mahasiswa",
    "singkatan": "PSDM",
    "logo": "assets/images/divisi/pssdm.png",
    "icon": "fas fa-users",
    "warna": "#2563EB",
    "deskripsi": "Departemen yang berfokus pada kaderisasi, pembinaan, dan pengembangan kepemimpinan mahasiswa.",
    "visi": "Mewujudkan mahasiswa yang aktif, berkarakter, dan memiliki jiwa kepemimpinan.",
    "tugas": [
      "Melaksanakan kaderisasi.",
      "Mengembangkan kepemimpinan mahasiswa.",
      "Menyelenggarakan pelatihan.",
      "Melakukan pembinaan pengurus."
    ],
    "koordinator": {
      "nama": "",
      "jabatan": "Kepala Departemen PSDM",
      "foto": "assets/images/pengurus/default.png"
    },
    "wakil": null,
    "jumlahAnggota": 4,
    "proker": [
      "Workshop CV & Interview",
      "Public Speaking",
      "Career Talk",
      "Leadership Training"
    ]
  },
  {
    "id": 4,
    "nama": "Sosial Politik",
    "singkatan": "SOSPOL",
    "logo": "assets/images/divisi/sospol.png",
    "icon": "fas fa-handshake",
    "warna": "#F59E0B",
    "deskripsi": "Departemen yang berfokus pada kajian kebijakan, advokasi isu, serta pergerakan mahasiswa.",
    "visi": "Menjadi wadah aspirasi mahasiswa yang kritis, responsif, dan solutif.",
    "tugas": [
      "Melakukan kajian kebijakan.",
      "Mengadvokasi isu kemahasiswaan.",
      "Menampung aspirasi mahasiswa.",
      "Menggerakkan kegiatan sosial kemahasiswaan."
    ],
    "koordinator": {
      "nama": "",
      "jabatan": "Kepala Departemen SOSPOL",
      "foto": "assets/images/pengurus/default.png"
    },
    "wakil": null,
    "jumlahAnggota": 3,
    "proker": [
      "Publikasi Magang",
      "Informasi Lomba",
      "Informasi Beasiswa",
      "Publikasi Sertifikasi",
      "Seminar & Webinar",
      "Kotak Aspirasi Online",
      "Forum Dialog Mahasiswa",
      "Publikasi Tindak Lanjut Aspirasi",
      "Forum Koordinasi BEM - HMPS",
      "Kolaborasi Kegiatan",
      "Sharing Bersama Alumni",
      "Wadah Aspirasi",
      "Goes To School"
    ]
  }
];

const FALLBACK_DIVISI_DETAIL = [
  {
    "id": 1,
    "nama": "Komunikasi dan Informasi",
    "singkatan": "KOMINFO",
    "icon": "ri-computer-line",
    "gambar": "../assets/images/divisi/kominfo.png",
    "logo": "assets/images/divisi/kominfo.png",
    "deskripsi": "Departemen yang bertanggung jawab dalam pengelolaan media informasi, publikasi, dokumentasi, branding organisasi, website, serta hubungan luar BEM FIK.",
    "ketua": "Atila Faturrahman Pratama",
    "jumlahAnggota": 5,
    "masaJabatan": "Desember 2026",
    "visi": "Menjadi pusat informasi BEM FIK yang informatif, kreatif, profesional, dan adaptif terhadap perkembangan teknologi digital.",
    "tugas": [
      "Mengelola media sosial.",
      "Mengelola website BEM.",
      "Membuat desain publikasi.",
      "Mendokumentasikan kegiatan.",
      "Menjalin hubungan media."
    ],
    "programKerja": [
      { "nama": "Mading Digital", "deskripsi": "Media informasi digital mahasiswa Fakultas Ilmu Komputer." },
      { "nama": "Publikasi Kegiatan", "deskripsi": "Publikasi seluruh kegiatan BEM melalui media digital." },
      { "nama": "Dokumentasi Organisasi", "deskripsi": "Pendokumentasian seluruh kegiatan BEM." }
    ],
    "pengurus": [
      { "nama": "Atila Faturrahman Pratama", "jabatan": "Ketua Divisi" },
      { "nama": "Tiara Novita Sari", "jabatan": "Wakil Ketua Divisi" },
      { "nama": "Syarla Syifa Bella", "jabatan": "Anggota" },
      { "nama": "Nadia Rahma Anindya", "jabatan": "Anggota" },
      { "nama": "Nadiyah Fakhar", "jabatan": "Anggota" }
    ]
  },
  {
    "id": 2,
    "nama": "Minat dan Bakat",
    "singkatan": "MINBA",
    "icon": "ri-trophy-line",
    "gambar": "../assets/images/divisi/minba.png",
    "logo": "assets/images/divisi/minba.png",
    "deskripsi": "Departemen yang memfasilitasi pengembangan minat olahraga, seni, dan kreativitas mahasiswa.",
    "ketua": "Refa Agustyah",
    "jumlahAnggota": 4,
    "masaJabatan": "Desember 2026",
    "visi": "Mengembangkan potensi mahasiswa melalui kegiatan olahraga, seni, dan kreativitas.",
    "tugas": [
      "Mengembangkan minat olahraga.",
      "Mengembangkan seni.",
      "Menyelenggarakan perlombaan.",
      "Mengembangkan kreativitas mahasiswa."
    ],
    "programKerja": [
      { "nama": "PKKMB", "deskripsi": "Mendukung pelaksanaan PKKMB Fakultas." },
      { "nama": "Inagurasi", "deskripsi": "Penyambutan mahasiswa baru." },
      { "nama": "Pekan Olahraga Mahasiswa (POM)", "deskripsi": "Ajang kompetisi olahraga yang melibatkan mahasiswa Fakultas Ilmu Komputer." }
    ],
    "pengurus": [
      { "nama": "Refa Agustyah", "jabatan": "Ketua Divisi" },
      { "nama": "Vina Amalia", "jabatan": "Wakil Ketua Divisi" },
      { "nama": "Faruq Amru Abdul Fawwaz", "jabatan": "Anggota" },
      { "nama": "Muhammad Rendyansyah Dwi Anggara", "jabatan": "Anggota" }
    ]
  },
  {
    "id": 3,
    "nama": "Pengembangan Sumber Daya Mahasiswa",
    "singkatan": "PSDM",
    "icon": "ri-team-line",
    "gambar": "../assets/images/divisi/pssdm.png",
    "logo": "assets/images/divisi/pssdm.png",
    "deskripsi": "Departemen yang berfokus pada kaderisasi serta pengembangan kepemimpinan mahasiswa.",
    "ketua": "Dicky Wahyu Nugraha",
    "jumlahAnggota": 4,
    "masaJabatan": "Desember 2026",
    "visi": "Mewujudkan mahasiswa yang berkarakter, berintegritas, dan memiliki jiwa kepemimpinan.",
    "tugas": [
      "Melaksanakan kaderisasi.",
      "Mengadakan pelatihan.",
      "Melakukan evaluasi pengurus.",
      "Mengembangkan kepemimpinan mahasiswa."
    ],
    "programKerja": [
      { "nama": "Workshop CV & Interview", "deskripsi": "Pelatihan penyusunan CV dan simulasi interview." },
      { "nama": "Public Speaking", "deskripsi": "Pelatihan komunikasi dan presentasi." },
      { "nama": "Career Talk", "deskripsi": "Diskusi bersama alumni dan praktisi." },
      { "nama": "Leadership Training", "deskripsi": "Pelatihan kepemimpinan mahasiswa." }
    ],
    "pengurus": [
      { "nama": "Dicky Wahyu Nugraha", "jabatan": "Kepala Departemen" },
      { "nama": "Vina Ayulia Tari", "jabatan": "Anggota" },
      { "nama": "Muhammad Rizha Hardiyanto", "jabatan": "Anggota" },
      { "nama": "Alika Ramadhani Putri Pramono", "jabatan": "Anggota" }
    ]
  },
  {
    "id": 4,
    "nama": "Sosial Politik",
    "singkatan": "SOSPOL",
    "icon": "ri-government-line",
    "gambar": "../assets/images/divisi/sospol.png",
    "logo": "assets/images/divisi/sospol.png",
    "deskripsi": "Departemen yang berfokus pada kajian kebijakan, advokasi isu, aspirasi, serta pergerakan mahasiswa.",
    "ketua": "Anwar Ramadhan",
    "jumlahAnggota": 2,
    "masaJabatan": "Desember 2026",
    "visi": "Menjadi departemen yang aktif, kritis, responsif, dan solutif dalam memperjuangkan aspirasi mahasiswa.",
    "tugas": [
      "Mengelola aspirasi mahasiswa.",
      "Melakukan advokasi isu.",
      "Melaksanakan kajian kebijakan.",
      "Membangun hubungan eksternal."
    ],
    "programKerja": [
      { "nama": "Publikasi Magang", "deskripsi": "Publikasi informasi lowongan magang." },
      { "nama": "Informasi Lomba", "deskripsi": "Publikasi informasi kompetisi mahasiswa." },
      { "nama": "Informasi Beasiswa", "deskripsi": "Publikasi informasi beasiswa." },
      { "nama": "Publikasi Sertifikasi", "deskripsi": "Publikasi informasi sertifikasi." },
      { "nama": "Seminar dan Webinar", "deskripsi": "Publikasi seminar dan webinar." },
      { "nama": "Kotak Aspirasi Online", "deskripsi": "Media penyampaian aspirasi mahasiswa." },
      { "nama": "Forum Dialog Mahasiswa", "deskripsi": "Forum diskusi antara mahasiswa dan fakultas." },
      { "nama": "Publikasi Tindak Lanjut Aspirasi", "deskripsi": "Publikasi perkembangan penyelesaian aspirasi." },
      { "nama": "Forum Koordinasi BEM-HMPS", "deskripsi": "Koordinasi antar organisasi mahasiswa." },
      { "nama": "Kolaborasi Kegiatan", "deskripsi": "Pelaksanaan kegiatan bersama organisasi mahasiswa." },
      { "nama": "Sharing Bersama Alumni", "deskripsi": "Sharing pengalaman bersama alumni." },
      { "nama": "Wadah Aspirasi", "deskripsi": "Program penyaluran aspirasi mahasiswa." },
      { "nama": "Goes To School", "deskripsi": "Sosialisasi Fakultas Ilmu Komputer ke sekolah." }
    ],
    "pengurus": [
      { "nama": "Anwar Ramadhan", "jabatan": "Kepala Departemen" },
      { "nama": "Aditya Devandra", "jabatan": "Anggota" }
    ]
  }
];

const FALLBACK_PENGURUS = [
  { "id": 1, "nama": "Alyaluna Sasmita", "nim": "24416255201032", "jabatan": "Ketua", "divisi": "Pimpinan", "angkatan": "2024", "foto": "assets/images/pengurus/alya.jpg", "email": "", "instagram": "", "linkedin": "", "deskripsi": "Ketua Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer.", "urutan": 1 },
  { "id": 2, "nama": "Ahmad Tangguh", "nim": "23416255201237", "jabatan": "Wakil Ketua", "divisi": "Pimpinan", "angkatan": "2023", "foto": "assets/images/pengurus/ahmad.jpg", "email": "", "instagram": "", "linkedin": "", "deskripsi": "Wakil Ketua Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer.", "urutan": 2 },
  { "id": 3, "nama": "Rio Rashya Syadzily", "nim": "24416255201209", "jabatan": "Sekretaris", "divisi": "Pimpinan", "angkatan": "2024", "foto": "assets/images/pengurus/rio.jpg", "email": "", "instagram": "", "linkedin": "", "deskripsi": "Sekretaris Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer.", "urutan": 3 },
  { "id": 4, "nama": "Alfi Latifatul Munawaroh", "nim": "24416255201212", "jabatan": "Bendahara", "divisi": "Pimpinan", "angkatan": "2024", "foto": "assets/images/pengurus/alfi.jpg", "email": "", "instagram": "", "linkedin": "", "deskripsi": "Bendahara Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer.", "urutan": 4 },
  { "id": 5, "nama": "Dicky Wahyu Nugraha", "nim": "23416255201227", "jabatan": "Ketua Divisi", "divisi": "PSDM", "angkatan": "2023", "foto": "assets/images/pengurus/dicky.jpg", "urutan": 5 },
  { "id": 6, "nama": "Vina Ayulia Tari", "nim": "25416255201180", "jabatan": "Anggota", "divisi": "PSDM", "angkatan": "2025", "foto": "assets/images/pengurus/vinay.jpg", "urutan": 6 },
  { "id": 7, "nama": "Muhammad Rizha Hardiyanto", "nim": "25416255201029", "jabatan": "Anggota", "divisi": "PSDM", "angkatan": "2025", "foto": "assets/images/pengurus/rizha.jpg", "urutan": 7 },
  { "id": 8, "nama": "Alika Ramadhani Putri Pramono", "nim": "25416255201168", "jabatan": "Anggota", "divisi": "PSDM", "angkatan": "2025", "foto": "assets/images/pengurus/alika.jpg", "urutan": 8 },
  { "id": 9, "nama": "Anwar Ramadhan", "nim": "24416255201204", "jabatan": "Ketua Divisi", "divisi": "SOSPOL", "angkatan": "2024", "foto": "assets/images/pengurus/anwar.jpg", "urutan": 9 },
  { "id": 10, "nama": "Aditya Devandra", "nim": "25416255201215", "jabatan": "Anggota", "divisi": "SOSPOL", "angkatan": "2025", "foto": "assets/images/pengurus/devan.jpg", "urutan": 10 },
  { "id": 11, "nama": "Refa Agustyah", "nim": "24416255201126", "jabatan": "Ketua Divisi", "divisi": "MINBA", "angkatan": "2024", "foto": "assets/images/pengurus/refa.jpg", "urutan": 11 },
  { "id": 12, "nama": "Vina Amalia", "nim": "24416255201125", "jabatan": "Wakil Ketua Divisi", "divisi": "MINBA", "angkatan": "2024", "foto": "assets/images/pengurus/vina.jpg", "urutan": 12 },
  { "id": 13, "nama": "Faruq Amru Abdul Fawwaz", "nim": "25416255201128", "jabatan": "Anggota", "divisi": "MINBA", "angkatan": "2025", "foto": "assets/images/pengurus/faruq.jpg", "urutan": 13 },
  { "id": 14, "nama": "Muhammad Rendyansyah Dwi Anggara", "nim": "24416255201170", "jabatan": "Anggota", "divisi": "MINBA", "angkatan": "2024", "foto": "assets/images/pengurus/rendy.jpg", "urutan": 14 },
  { "id": 15, "nama": "Atila Faturrahman Pratama", "nim": "24416255201043", "jabatan": "Ketua Divisi", "divisi": "KOMINFO", "angkatan": "2024", "foto": "assets/images/pengurus/fatur.jpg", "urutan": 15 },
  { "id": 16, "nama": "Tiara Novita Sari", "nim": "24416255201146", "jabatan": "Wakil Ketua Divisi", "divisi": "KOMINFO", "angkatan": "2024", "foto": "assets/images/pengurus/tiara.jpg", "urutan": 16 },
  { "id": 17, "nama": "Syarla Syifa Bella", "nim": "25416255201138", "jabatan": "Anggota", "divisi": "KOMINFO", "angkatan": "2025", "foto": "assets/images/pengurus/syarla.jpg", "urutan": 17 },
  { "id": 18, "nama": "Nadia Rahma Anindya", "nim": "25416255201167", "jabatan": "Anggota", "divisi": "KOMINFO", "angkatan": "2025", "foto": "assets/images/pengurus/nadia.jpg", "urutan": 18 },
  { "id": 19, "nama": "Nadiyah Fakhar", "nim": "25416255201146", "jabatan": "Anggota", "divisi": "KOMINFO", "angkatan": "2025", "foto": "assets/images/pengurus/nadiyah.jpg", "urutan": 19 }
];

const FALLBACK_PROKER = [
  {
    "id": 1,
    "nama": "Inaugurasi",
    "slug": "inaugurasi",
    "icon": "ri-award-line",
    "kategori": "Program Utama",
    "divisi": "BEM FIK",
    "status": "direncanakan",
    "statusLabel": "Direncanakan",
    "periode": "2026",
    "gambar": "assets/images/hero/hero-bem.jpg",
    "deskripsi": "Kegiatan pelantikan dan pengenalan kepengurusan Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer.",
    "tujuan": "Memperkuat komitmen, solidaritas, dan semangat pengabdian seluruh pengurus.",
    "deskripsi_lengkap": "Inaugurasi merupakan kegiatan pelantikan dan pengenalan kepengurusan BEM FIK sebagai awal dimulainya masa kepengurusan.",
    "sasaran": [ "Seluruh Pengurus BEM FIK" ],
    "output": [ "Inaugurasi terlaksana secara resmi" ],
    "galeri": []
  },
  {
    "id": 2,
    "nama": "Seminar Nasional",
    "slug": "seminar-nasional",
    "icon": "ri-presentation-line",
    "kategori": "Program Utama",
    "divisi": "BEM FIK",
    "status": "direncanakan",
    "statusLabel": "Direncanakan",
    "periode": "2026",
    "gambar": "assets/images/hero/hero-bem.jpg",
    "deskripsi": "Seminar nasional yang menghadirkan narasumber untuk memberikan wawasan dan pengetahuan kepada mahasiswa.",
    "tujuan": "Menambah wawasan dan pengetahuan mahasiswa melalui kegiatan berskala nasional.",
    "deskripsi_lengkap": "Seminar nasional merupakan kegiatan edukatif yang menghadirkan narasumber untuk membahas topik yang relevan dengan kebutuhan dan perkembangan mahasiswa.",
    "sasaran": [ "Mahasiswa Fakultas Ilmu Komputer" ],
    "output": [ "Seminar nasional terlaksana dengan baik" ],
    "galeri": []
  },
  {
    "id": 3,
    "nama": "Pekan Olahraga Mahasiswa (POM)",
    "slug": "pom",
    "icon": "ri-trophy-line",
    "kategori": "Program Utama",
    "divisi": "BEM FIK",
    "status": "direncanakan",
    "statusLabel": "Direncanakan",
    "periode": "2026",
    "gambar": "assets/images/hero/hero-bem.jpg",
    "deskripsi": "Ajang kompetisi olahraga yang melibatkan mahasiswa Fakultas Ilmu Komputer.",
    "tujuan": "Mewadahi dan mengembangkan minat serta bakat mahasiswa Fakultas Ilmu Komputer di bidang olahraga.",
    "deskripsi_lengkap": "Pekan Olahraga Mahasiswa (POM) merupakan kegiatan kompetisi olahraga yang diselenggarakan untuk mewadahi minat dan bakat mahasiswa Fakultas Ilmu Komputer sekaligus mempererat kebersamaan dan sportivitas antar mahasiswa.",
    "sasaran": [ "Mahasiswa Fakultas Ilmu Komputer" ],
    "output": [
      "Terlaksananya kompetisi olahraga mahasiswa",
      "Meningkatnya minat dan bakat mahasiswa di bidang olahraga",
      "Terjalinnya kebersamaan dan sportivitas antar mahasiswa"
    ],
    "galeri": []
  },
  {
    "id": 4,
    "nama": "Informasi dan Mading Digital",
    "slug": "informasi-dan-mading-digital",
    "icon": "ri-newspaper-line",
    "kategori": "FIK Opportunity",
    "divisi": "BEM FIK",
    "status": "berjalan",
    "statusLabel": "Sedang Berjalan",
    "periode": "2026",
    "gambar": "assets/images/about/about-banner.jpg",
    "deskripsi": "Penyediaan dan penyebaran informasi akademik, non akademik, serta peluang pengembangan diri mahasiswa melalui media digital.",
    "tujuan": "Mengoptimalkan akses mahasiswa terhadap informasi dan peluang pengembangan diri.",
    "deskripsi_lengkap": "Informasi dan Mading Digital menjadi media penyebaran informasi akademik, non akademik, peluang pengembangan diri, serta informasi kemahasiswaan melalui media digital BEM FIK.",
    "sasaran": [ "Mahasiswa Fakultas Ilmu Komputer" ],
    "output": [ "Informasi dan mading digital tersedia secara rutin dan informatif" ],
    "galeri": []
  },
  {
    "id": 5,
    "nama": "Kotak Aspirasi Online Website",
    "slug": "kotak-aspirasi-online-website",
    "icon": "ri-chat-voice-line",
    "kategori": "Aspirasi FIK",
    "divisi": "BEM FIK",
    "status": "berjalan",
    "statusLabel": "Sedang Berjalan",
    "periode": "2026",
    "gambar": "assets/images/about/about-banner.jpg",
    "deskripsi": "Media penyampaian aspirasi mahasiswa melalui website secara terbuka dan terstruktur.",
    "tujuan": "Menjadi wadah bagi mahasiswa untuk menyampaikan aspirasi, kritik, dan saran.",
    "deskripsi_lengkap": "Kotak Aspirasi Online Website merupakan media bagi mahasiswa untuk menyampaikan aspirasi, kritik, dan saran secara mudah melalui website BEM FIK.",
    "sasaran": [ "Mahasiswa Fakultas Ilmu Komputer" ],
    "output": [ "Aspirasi mahasiswa terdokumentasi dan dapat ditindaklanjuti" ],
    "galeri": []
  },
  {
    "id": 6,
    "nama": "Forum Dialog Mahasiswa",
    "slug": "forum-dialog-mahasiswa",
    "icon": "ri-discuss-line",
    "kategori": "Aspirasi FIK",
    "divisi": "BEM FIK",
    "status": "direncanakan",
    "statusLabel": "Direncanakan",
    "periode": "2026",
    "gambar": "assets/images/hero/hero-bem.jpg",
    "deskripsi": "Forum dialog antara mahasiswa dan pihak fakultas untuk membahas aspirasi dan isu kemahasiswaan.",
    "tujuan": "Menjembatani komunikasi antara mahasiswa dan fakultas.",
    "deskripsi_lengkap": "Forum Dialog Mahasiswa menjadi ruang komunikasi terbuka untuk menyampaikan dan membahas berbagai aspirasi serta isu kemahasiswaan bersama pihak terkait.",
    "sasaran": [ "Mahasiswa Fakultas Ilmu Komputer" ],
    "output": [ "Forum dialog terlaksana dan menghasilkan tindak lanjut" ],
    "galeri": []
  },
  {
    "id": 7,
    "nama": "Publikasi Tindak Lanjut Aspirasi",
    "slug": "publikasi-tindak-lanjut-aspirasi",
    "icon": "ri-file-list-3-line",
    "kategori": "Aspirasi FIK",
    "divisi": "BEM FIK",
    "status": "direncanakan",
    "statusLabel": "Direncanakan",
    "periode": "2026",
    "gambar": "assets/images/about/about-banner.jpg",
    "deskripsi": "Publikasi perkembangan tindak lanjut aspirasi mahasiswa secara transparan.",
    "tujuan": "Memberikan informasi kepada mahasiswa mengenai perkembangan aspirasi yang telah disampaikan.",
    "deskripsi_lengkap": "Publikasi Tindak Lanjut Aspirasi merupakan bentuk transparansi BEM FIK dalam menyampaikan perkembangan penyelesaian aspirasi mahasiswa.",
    "sasaran": [ "Mahasiswa Fakultas Ilmu Komputer" ],
    "output": [ "Perkembangan tindak lanjut aspirasi dapat diketahui mahasiswa" ],
    "galeri": []
  },
  {
    "id": 8,
    "nama": "Forum Koordinasi dan Kolaborasi Kegiatan antar BEM Fakultas se-UBP Karawang",
    "slug": "forum-koordinasi-dan-kolaborasi-bem",
    "icon": "ri-team-line",
    "kategori": "FIK Connect",
    "divisi": "BEM FIK",
    "status": "direncanakan",
    "statusLabel": "Direncanakan",
    "periode": "2026",
    "gambar": "assets/images/hero/hero-bem.jpg",
    "deskripsi": "Forum koordinasi dan kolaborasi kegiatan antar BEM Fakultas se-UBP Karawang.",
    "tujuan": "Memperkuat hubungan, koordinasi, dan kolaborasi antar organisasi mahasiswa di lingkungan UBP Karawang.",
    "deskripsi_lengkap": "Forum ini menjadi wadah koordinasi dan kolaborasi kegiatan antar BEM Fakultas se-UBP Karawang untuk membangun sinergi dan kebersamaan antar organisasi mahasiswa.",
    "sasaran": [ "BEM Fakultas se-UBP Karawang" ],
    "output": [ "Koordinasi dan kolaborasi antar BEM Fakultas terlaksana" ],
    "galeri": []
  },
  {
    "id": 9,
    "nama": "Sharing Bersama Kakak Tingkat",
    "slug": "sharing-bersama-kakak-tingkat",
    "icon": "ri-user-star-line",
    "kategori": "FIK Connect",
    "divisi": "BEM FIK",
    "status": "direncanakan",
    "statusLabel": "Direncanakan",
    "periode": "2026",
    "gambar": "assets/images/hero/hero-bem.jpg",
    "deskripsi": "Kegiatan berbagi pengalaman dan wawasan bersama kakak tingkat.",
    "tujuan": "Memberikan wawasan dan pengalaman kepada mahasiswa melalui interaksi dengan kakak tingkat.",
    "deskripsi_lengkap": "Sharing Bersama Kakak Tingkat menjadi wadah berbagi pengalaman mengenai perkuliahan, organisasi, kegiatan mahasiswa, dan pengalaman lainnya yang dapat membantu mahasiswa.",
    "sasaran": [ "Mahasiswa Fakultas Ilmu Komputer" ],
    "output": [ "Kegiatan sharing terlaksana dan memberikan wawasan kepada mahasiswa" ],
    "galeri": []
  }
];

const FALLBACK_INFORMASI = [
  {
    "id": 1,
    "judul": "Open Recruitment Panitia POM 2026",
    "slug": "open-recruitment-panitia-pom-2026",
    "kategori": "Pengumuman",
    "tanggal": "2026-08-17",
    "penulis": "KOMINFO",
    "thumbnail": "assets/images/informasi/oprec.jpg",
    "gambar": [ "assets/images/informasi/oprec.jpg" ],
    "ringkasan": "Pendaftaran Panitia POM 2026 Fakultas Ilmu Komputer resmi dibuka untuk seluruh mahasiswa aktif.",
    "deskripsi": "OPEN RECRUITMENT PANITIA PEKAN OLAHRAGA MAHASISWA (POM)\n\nSaatnya jadi bagian dari event olahraga terbesar dan paling seru di kampus.\n\nPekan Olahraga Mahasiswa (POM) 2026 membuka kesempatan bagi kalian yang ingin menjadi bagian dari kepanitiaan.\n\n✨ Benefit:\n- SKPI / E-Certificate / Sertifikat Kepanitiaan\n- Pengalaman organisasi & kepanitiaan\n- Relasi lintas angkatan\n- Mengasah leadership, komunikasi, dan teamwork\n\n📋 Daftar sekarang:\nhttps://forms.gle/JdM4u6cCfZyZQa1P9\n\nJangan lewatkan kesempatan untuk menjadi bagian dari kesuksesan POM 2026!",
    "tags": [ "Open Recruitment", "POM 2026", "Kepanitiaan" ],
    "status": "publish"
  },
  {
    "id": 2,
    "judul": "Pelantikan BEM & BLM Fakultas Ilmu Komputer",
    "slug": "pelantikan-bem-blm-fakultas-ilmu-komputer",
    "kategori": "Kegiatan",
    "tanggal": "2026-07-22",
    "penulis": "BEM FIK",
    "thumbnail": "assets/images/informasi/pelantikan.jpg",
    "gambar": [ "assets/images/informasi/pelantikan.jpg" ],
    "ringkasan": "Pelantikan BEM & BLM Fakultas Ilmu Komputer Universitas Buana Perjuangan Karawang Periode 2026.",
    "deskripsi": "Pelantikan BEM & BLM Fakultas Ilmu Komputer Universitas Buana Perjuangan Karawang Periode 2026.",
    "tags": [ "Pelantikan", "BEM FIK", "BLM", "Fakultas Ilmu Komputer" ],
    "status": "publish"
  }
];

const FALLBACK_GALERI = [
  {
    "id": 1,
    "judul": "Pelantikan BEM & BLM Fakultas Ilmu Komputer",
    "kategori": "Kegiatan",
    "tanggal": "2026-07-22",
    "thumbnail": "assets/images/galeri/oprec-2-thumb.jpg",
    "gambar": [
      "assets/images/galeri/oprec-2.jpg",
      "assets/images/galeri/oprec-2-1.jpg",
      "assets/images/galeri/oprec-2-2.jpg",
      "assets/images/galeri/oprec-2-3.jpg"
    ],
    "deskripsi": "Dokumentasi kegiatan Pelantikan Pengurus BEM & BLM Fakultas Ilmu Komputer Universitas Buana Perjuangan Karawang Periode 2026."
  }
];

const FALLBACK_KONTAK = {
  "email": "bemfikubpkarawang@gmail.com",
  "instagram": "https://www.instagram.com/bemfikubpk",
  "googleForm": "https://forms.gle/v63czAYUeQ8GshGHA",
  "alamat": "Fakultas Ilmu Komputer, Universitas Buana Perjuangan Karawang, Jl. HS. Ronggowaluyo, Telukjambe Timur, Karawang, Jawa Barat 41361",
  "maps": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.542837452435!2d107.301311!3d-6.3236155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69762d4c316603%3A0x50a8005dfd52a897!2sBuana%20Perjuangan%20University!5e0!3m2!1sen!2sid!4v1784648156424!5m2!1sen!2sid"
};

/* =====================================================
   DATA STORE
===================================================== */

const DATA = {
    profil: null,
    visimisi: null,
    divisi: null,
    divisiDetail: null,
    pengurus: null,
    proker: null,
    informasi: null,
    galeri: null,
    kontak: null
};

/* =====================================================
   FETCH JSON
===================================================== */

async function fetchJSON(file) {
    try {
        const url = `${DATA_PATH}${file}?v=${Date.now()}`;
        const response = await fetch(url, { cache: "no-cache" });
        if (!response.ok) {
            throw new Error(`Gagal mengambil ${file}`);
        }
        return await response.json();
    } catch (error) {
        console.warn(`Fallback active for ${file}:`, error.message);
        return null;
    }
}

/* =====================================================
   LOAD ALL DATA
===================================================== */

async function loadAllData() {
    try {
        const [
            profil,
            visimisi,
            divisi,
            divisiDetail,
            pengurus,
            proker,
            informasi,
            galeri,
            kontak
        ] = await Promise.all([
            fetchJSON("profil.json"),
            fetchJSON("visimisi.json"),
            fetchJSON("divisi.json"),
            fetchJSON("divisi-detail.json"),
            fetchJSON("pengurus.json"),
            fetchJSON("proker.json"),
            fetchJSON("informasi.json"),
            fetchJSON("galeri.json"),
            fetchJSON("kontak.json")
        ]);

        if (profil) DATA.profil = profil;
        if (visimisi) DATA.visimisi = visimisi;
        if (divisi && Array.isArray(divisi) && divisi.length > 0) DATA.divisi = divisi;
        if (divisiDetail && Array.isArray(divisiDetail) && divisiDetail.length > 0) DATA.divisiDetail = divisiDetail;
        if (pengurus && Array.isArray(pengurus) && pengurus.length > 0) DATA.pengurus = pengurus;
        if (proker && Array.isArray(proker) && proker.length > 0) DATA.proker = proker;
        if (informasi && Array.isArray(informasi) && informasi.length > 0) DATA.informasi = informasi;
        if (galeri && Array.isArray(galeri) && galeri.length > 0) DATA.galeri = galeri;
        if (kontak) DATA.kontak = kontak;

        console.log("Data BEM FIK berhasil disinkronkan.");
    } catch (err) {
        console.warn("Gagal memuat data JSON, menggunakan data bawaan:", err);
    }
}

/* =====================================================
   GETTERS (Fallback Safe)
===================================================== */

function getProfil() {
    return DATA.profil || FALLBACK_PROFIL;
}

function getVisiMisi() {
    return DATA.visimisi || FALLBACK_VISIMISI;
}

function getDivisi() {
    return (DATA.divisi && Array.isArray(DATA.divisi) && DATA.divisi.length > 0)
        ? DATA.divisi
        : FALLBACK_DIVISI;
}

function getDivisiDetail() {
    return (DATA.divisiDetail && Array.isArray(DATA.divisiDetail) && DATA.divisiDetail.length > 0)
        ? DATA.divisiDetail
        : FALLBACK_DIVISI_DETAIL;
}

function getPengurus() {
    return (DATA.pengurus && Array.isArray(DATA.pengurus) && DATA.pengurus.length > 0)
        ? DATA.pengurus
        : FALLBACK_PENGURUS;
}

function getProgramKerja() {
    return (DATA.proker && Array.isArray(DATA.proker) && DATA.proker.length > 0)
        ? DATA.proker
        : FALLBACK_PROKER;
}

function getInformasi() {
    return (DATA.informasi && Array.isArray(DATA.informasi) && DATA.informasi.length > 0)
        ? DATA.informasi
        : FALLBACK_INFORMASI;
}

function getGaleri() {
    return (DATA.galeri && Array.isArray(DATA.galeri) && DATA.galeri.length > 0)
        ? DATA.galeri
        : FALLBACK_GALERI;
}

function getKontak() {
    return DATA.kontak || FALLBACK_KONTAK;
}

/* =====================================================
   HELPERS & FILTERS
===================================================== */

function getById(data, id) {
    if (!Array.isArray(data)) return null;
    return data.find(item => String(item.id) === String(id) || item.slug === id);
}

function getBySlug(data, slug) {
    if (!Array.isArray(data)) return null;
    return data.find(item => item.slug === slug || String(item.id) === String(slug));
}

function getPengurusByDivisi(divisi) {
    const list = getPengurus();
    if (!list) return [];
    return list.filter(item => item.divisi === divisi || (divisi === "BPH" && item.divisi === "Pimpinan"));
}

function getProgramByDivisi(divisi) {
    const list = getProgramKerja();
    if (!list) return [];
    return list.filter(item => item.divisi === divisi || item.divisi === "BEM FIK");
}

/* =====================================================
   IMAGE FALLBACK HANDLER
===================================================== */

window.handleImageError = function(img) {
    if (!img) return;
    const fallbackSrc = `${BASE_PATH}assets/images/no-image.png`;
    if (img.getAttribute("data-fallback-tried") === "true") {
        img.onerror = null;
        return;
    }
    img.setAttribute("data-fallback-tried", "true");
    img.onerror = null;
    img.src = fallbackSrc;
};

document.addEventListener("error", function(event) {
    if (event.target && event.target.tagName === "IMG") {
        window.handleImageError(event.target);
    }
}, true);