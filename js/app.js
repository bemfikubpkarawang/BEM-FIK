/* =====================================================
   APP.JS
   BEM Fakultas Ilmu Komputer
===================================================== */

const BEMApp = {

    init() {
        this.renderHeader();
        this.renderFooter();

        if (document.getElementById("heroTitle")) {
            this.renderHero();
        }

        if (document.getElementById("statMahasiswa") || document.getElementById("divisionCount") || document.getElementById("statDivisi")) {
            this.renderStatistic();
        }

        if (document.getElementById("aboutTitle") || document.getElementById("aboutDescription")) {
            this.renderProfil();
        }

        if (document.getElementById("visiMisiContainer")) {
            this.renderVisiMisi();
        }

        if (document.getElementById("divisionContainer")) {
            this.renderDivisi();
        }

        if (document.getElementById("managementContainer")) {
            this.renderPengurus();
        }

        if (document.getElementById("programContainer")) {
            this.renderProgram();
        }

        if (document.getElementById("programGrid")) {
            this.renderProgramList();
        }

        if (document.getElementById("informationContainer")) {
            this.renderInformasi();
        }

        if (document.getElementById("galleryContainer") && !window.location.pathname.toLowerCase().includes("galeri.html")) {
            this.renderGaleri();
        }

        if (document.getElementById("contactEmail") || document.getElementById("contactAddress")) {
            this.renderKontak();
        }

        this.activeMenu();
        this.mobileMenu();
        this.stickyHeader();
        this.backToTop();
        this.currentYear();
    },

    /* ==========================================
       HEADER / NAVBAR
    ========================================== */

    renderHeader() {
        const header = document.getElementById("header");
        if (!header) return;

        header.innerHTML = `
        <nav class="navbar">
            <div class="container">
                <a href="${BASE_PATH}index.html" class="logo" aria-label="BEM FIK Home">
                    <img src="${BASE_PATH}assets/logo/logo.png" alt="Logo BEM FIK" onerror="handleImageError(this)">
                    <div class="logo-text">
                        <h2>BEM FIK</h2>
                        <span>Fakultas Ilmu Komputer</span>
                    </div>
                </a>

                <button
                    id="menuToggle"
                    class="menu-toggle"
                    aria-label="Buka Menu Navigasi"
                    aria-expanded="false">
                    <i class="ri-menu-line"></i>
                </button>

                <ul id="navMenu" class="nav-menu">
                    <li><a class="nav-link" href="${BASE_PATH}index.html">Beranda</a></li>
                    <li><a class="nav-link" href="${BASE_PATH}pages/tentang.html">Tentang</a></li>
                    <li><a class="nav-link" href="${BASE_PATH}pages/divisi.html">Divisi</a></li>
                    <li><a class="nav-link" href="${BASE_PATH}pages/proker.html">Program Kerja</a></li>
                    <li><a class="nav-link" href="${BASE_PATH}pages/pengurus.html">Pengurus</a></li>
                    <li><a class="nav-link" href="${BASE_PATH}pages/informasi.html">Informasi</a></li>
                    <li><a class="nav-link" href="${BASE_PATH}pages/galeri.html">Galeri</a></li>
                    <li><a class="nav-link" href="${BASE_PATH}pages/aspirasi.html">Aspirasi</a></li>
                    <li><a class="nav-link" href="${BASE_PATH}pages/kontak.html">Kontak</a></li>
                </ul>
            </div>
        </nav>
        `;

        this.activeMenu();
    },

    /* ==========================================
       FOOTER
    ========================================== */

    renderFooter() {
        const footer = document.getElementById("footer");
        if (!footer) return;

        footer.className = "footer";
        footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="${BASE_PATH}index.html" class="logo">
                        <img src="${BASE_PATH}assets/logo/logo.png" alt="Logo BEM FIK" onerror="handleImageError(this)">
                        <div class="logo-text">
                            <h3>BEM FIK</h3>
                            <span>Fakultas Ilmu Komputer</span>
                        </div>
                    </a>
                    <p>
                        Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer Universitas Buana Perjuangan Karawang. Wadah aspirasi, kolaborasi, inovasi, dan pergerakan mahasiswa yang progresif dan berintegritas.
                    </p>
                    <div class="footer-social">
                        <a href="https://www.instagram.com/bemfikubpk" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="ri-instagram-line"></i></a>
                        <a href="mailto:bemfikubpkarawang@gmail.com" aria-label="Email"><i class="ri-mail-line"></i></a>
                    </div>
                </div>

                <div class="footer-nav">
                    <h3 class="footer-title">Navigasi Cepat</h3>
                    <ul class="footer-links">
                        <li><a href="${BASE_PATH}index.html"><i class="ri-arrow-right-s-line"></i> Beranda</a></li>
                        <li><a href="${BASE_PATH}pages/tentang.html"><i class="ri-arrow-right-s-line"></i> Tentang Kami</a></li>
                        <li><a href="${BASE_PATH}pages/divisi.html"><i class="ri-arrow-right-s-line"></i> Struktur Divisi</a></li>
                        <li><a href="${BASE_PATH}pages/proker.html"><i class="ri-arrow-right-s-line"></i> Program Kerja</a></li>
                        <li><a href="${BASE_PATH}pages/pengurus.html"><i class="ri-arrow-right-s-line"></i> Pengurus Organisasi</a></li>
                        <li><a href="${BASE_PATH}pages/informasi.html"><i class="ri-arrow-right-s-line"></i> Berita & Informasi</a></li>
                        <li><a href="${BASE_PATH}pages/galeri.html"><i class="ri-arrow-right-s-line"></i> Galeri Dokumentasi</a></li>
                    </ul>
                </div>

                <div class="footer-contact-info">
                    <h3 class="footer-title">Kontak & Sekretariat</h3>
                    <ul class="footer-contact">
                        <li>
                            <i class="ri-mail-line"></i>
                            <div>
                                <strong>Email Resmi</strong>
                                <span>bemfikubpkarawang@gmail.com</span>
                            </div>
                        </li>
                        <li>
                            <i class="ri-map-pin-line"></i>
                            <div>
                                <strong>Sekretariat</strong>
                                <span>Fakultas Ilmu Komputer, Kampus UBP Karawang, Jl. HS. Ronggowaluyo, Telukjambe Timur, Karawang</span>
                            </div>
                        </li>
                        <li>
                            <i class="ri-instagram-line"></i>
                            <div>
                                <strong>Instagram Resmi</strong>
                                <span>@bemfikubpk</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>© <span id="year">2026</span> Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer UBP Karawang. All Rights Reserved.</p>
            </div>
        </div>
        `;
    },

    /* ==========================================
       HERO (HOMEPAGE)
    ========================================== */

    renderHero() {
        const profil = getProfil();
        if (!profil) return;

        const title = document.getElementById("heroTitle");
        const desc = document.getElementById("heroDescription");
        const image = document.getElementById("heroImage");

        if (title && profil.hero?.judul) {
            title.textContent = profil.hero.judul;
        }

        if (desc && profil.hero?.subjudul) {
            desc.textContent = profil.hero.subjudul;
        }

        if (image && profil.heroImage) {
            image.src = BASE_PATH + profil.heroImage;
            image.alt = profil.nama || "Hero BEM FIK";
        }
    },

    /* ==========================================
       STATISTIC
    ========================================== */

    renderStatistic() {
        const profil = getProfil();
        const divisi = getDivisi();
        const proker = getProgramKerja();
        const pengurus = getPengurus();

        const totalMahasiswa = profil?.statistik?.mahasiswa || 1500;
        const totalDivisi = (divisi && Array.isArray(divisi) && divisi.length > 0) ? divisi.length : (profil?.statistik?.divisi || 4);
        const totalProker = (proker && Array.isArray(proker) && proker.length > 0) ? proker.length : (profil?.statistik?.programKerja || 9);
        const totalPengurus = (pengurus && Array.isArray(pengurus) && pengurus.length > 0) ? pengurus.length : (profil?.statistik?.pengurus || 19);

        // Homepage Stats
        this.animateNumber("statMahasiswa", totalMahasiswa);
        this.animateNumber("statDivisi", totalDivisi);
        this.animateNumber("statProgram", totalProker);
        this.animateNumber("statPengurus", totalPengurus);

        // Divisi Page Stats
        this.animateNumber("divisionCount", totalDivisi);
        this.animateNumber("memberCount", totalPengurus);
        this.animateNumber("programCount", totalProker);
    },

    animateNumber(id, target) {
        const element = document.getElementById(id);
        if (!element) return;

        const targetVal = Number(target) || 0;
        if (targetVal <= 0) return;

        element.textContent = targetVal.toLocaleString("id-ID");
        let value = 0;
        const step = Math.max(1, Math.ceil(targetVal / 35));

        const timer = setInterval(() => {
            value += step;
            if (value >= targetVal) {
                value = targetVal;
                clearInterval(timer);
            }
            element.textContent = value.toLocaleString("id-ID");
        }, 25);
    },

    /* ==========================================
       PROFIL
    ========================================== */

    renderProfil() {
        const profil = getProfil();
        if (!profil) return;

        const aboutTitle = document.getElementById("aboutTitle");
        const aboutDescription = document.getElementById("aboutDescription");

        if (aboutTitle) aboutTitle.textContent = profil.nama;
        if (aboutDescription) aboutDescription.textContent = profil.deskripsi;
    },

    /* ==========================================
       VISI MISI
    ========================================== */

    renderVisiMisi() {
        const data = getVisiMisi();
        const container = document.getElementById("visiMisiContainer");
        if (!container || !data) return;

        container.innerHTML = `
        <div class="vision-card">
            <div class="vision-icon">
                <i class="ri-eye-line"></i>
            </div>
            <h3>${data.visi.judul || 'Visi'}</h3>
            <p>${data.visi.isi}</p>
        </div>

        <div class="vision-card">
            <div class="vision-icon">
                <i class="ri-task-line"></i>
            </div>
            <h3>${data.misi.judul || 'Misi Organisasi'}</h3>
            <ul class="mission-list">
                ${data.misi.map(item => `
                    <li>
                        <i class="ri-checkbox-circle-fill"></i>
                        <span>${item.isi}</span>
                    </li>
                `).join("")}
            </ul>
        </div>
        `;
    },

    /* ==========================================
       DIVISI (HOMEPAGE)
    ========================================== */

    renderDivisi() {
        const data = getDivisiDetail() || getDivisi();
        const container = document.getElementById("divisionContainer");
        if (!container || !data) return;

        container.innerHTML = data.map(item => {
            const rawImg = item.logo || item.gambar || "";
            const cleanImg = rawImg ? (BASE_PATH + rawImg.replace("../", "")) : `${BASE_PATH}assets/images/no-image.png`;
            return `
            <div class="division-card">
                <div class="division-icon">
                    <img
                        src="${cleanImg}"
                        alt="${item.nama}"
                        loading="lazy"
                        onerror="handleImageError(this)">
                </div>
                <h3>${item.nama}</h3>
                <p>${item.deskripsi.length > 115 ? item.deskripsi.substring(0, 115) + '...' : item.deskripsi}</p>
                <a class="division-link" href="${BASE_PATH}pages/divisi-detail.html?id=${item.id}">
                    Selengkapnya <i class="ri-arrow-right-line"></i>
                </a>
            </div>
            `;
        }).join("");
    },

    /* ==========================================
       PENGURUS (HOMEPAGE CORE BOARD)
    ========================================== */

    renderPengurus() {
        const data = getPengurus();
        const container = document.getElementById("managementContainer");
        if (!container || !data) return;

        const pimpinan = data.filter(item =>
            item.jabatan === "Ketua" ||
            item.jabatan === "Wakil Ketua" ||
            item.jabatan === "Sekretaris" ||
            item.jabatan === "Bendahara" ||
            item.divisi === "Pimpinan"
        );

        container.innerHTML = pimpinan.map(item => `
        <div class="management-card">
            <div class="management-image">
                <img
                    src="${BASE_PATH}${item.foto}"
                    alt="${item.nama || item.jabatan}"
                    onerror="handleImageError(this)">
            </div>
            <div class="management-content">
                <h3>${item.nama || "Pengurus BEM"}</h3>
                <span class="management-position">${item.jabatan}</span>
                <p class="management-division">${item.divisi === "Pimpinan" ? "BPH BEM FIK" : item.divisi}</p>
            </div>
        </div>
        `).join("");
    },

    /* ==========================================
       PROGRAM KERJA (HOMEPAGE FEATURED)
    ========================================== */

    renderProgram() {
        const data = getProgramKerja();
        const container = document.getElementById("programContainer");
        if (!container || !data) return;

        // Ambil 3 proker pilihan (Program Utama & Unggulan BEM)
        const featured = data.slice(0, 3);

        container.innerHTML = featured.map(item => {
            let statusClass = "status-direncanakan";
            let statusLabel = item.statusLabel || "Direncanakan";

            if (item.status === "berjalan") {
                statusClass = "status-berjalan";
                statusLabel = "Sedang Berjalan";
            } else if (item.status === "selesai") {
                statusClass = "status-selesai";
                statusLabel = "Selesai";
            }

            const isUtama = item.kategori === "Program Utama" || item.divisi === "BEM FIK";
            const divisiDisplay = isUtama ? "BEM FIK" : item.divisi;

            return `
            <div class="program-card">
                <div class="program-card-header">
                    <div class="program-card-icon">
                        <i class="${item.icon || 'ri-flag-line'}"></i>
                    </div>
                    <div class="program-card-badges">
                        <span class="program-tag">${item.kategori || 'Program Utama'}</span>
                        <span class="program-status-badge ${statusClass}">${statusLabel}</span>
                    </div>
                </div>
                <div class="program-card-body">
                    <h3 class="program-title">${item.nama}</h3>
                    <p class="program-summary">${item.deskripsi.length > 115 ? item.deskripsi.substring(0, 115) + '...' : item.deskripsi}</p>
                </div>
                <div class="program-meta">
                    <span><i class="ri-team-line"></i> ${divisiDisplay}</span>
                    <a href="${BASE_PATH}pages/proker-detail.html?id=${item.id}&slug=${item.slug || ''}" class="program-link">
                        Detail <i class="ri-arrow-right-line"></i>
                    </a>
                </div>
            </div>
            `;
        }).join("");
    },

    /* ==========================================
       PROGRAM KERJA (HALAMAN PROKER)
    ========================================== */

    renderProgramList() {
        const allData = getProgramKerja();
        const grid = document.getElementById("programGrid");
        const emptyMsg = document.getElementById("programEmpty");
        const searchInput = document.getElementById("searchProgram");
        const statusSelect = document.getElementById("statusFilter");

        if (!grid || !allData) return;

        // Statistics
        const totalEl = document.getElementById("totalProgram");
        const ongoingEl = document.getElementById("ongoingProgram");
        const doneEl = document.getElementById("doneProgram");
        const divisionEl = document.getElementById("divisionInvolved");

        if (totalEl) totalEl.textContent = allData.length;
        if (ongoingEl) ongoingEl.textContent = allData.filter(p => p.status === "berjalan").length;
        if (doneEl) doneEl.textContent = allData.filter(p => p.status === "selesai").length;
        if (divisionEl) {
            const divisions = getDivisi();
            divisionEl.textContent = divisions ? divisions.length : 4;
        }

        const getStatusClass = (status) => {
            switch ((status || "").toLowerCase()) {
                case "berjalan": return "status-berjalan";
                case "selesai": return "status-selesai";
                default: return "status-direncanakan";
            }
        };

        const getStatusLabel = (item) => {
            if (item.statusLabel) return item.statusLabel;
            switch ((item.status || "").toLowerCase()) {
                case "berjalan": return "Sedang Berjalan";
                case "selesai": return "Selesai";
                default: return "Direncanakan";
            }
        };

        const renderCard = (item) => {
            const isUtama = item.kategori === "Program Utama" || item.divisi === "BEM FIK";
            const divisiDisplay = isUtama ? "BEM FIK" : item.divisi;

            return `
            <a href="proker-detail.html?id=${item.id}&slug=${item.slug || ''}"
               class="program-card"
               data-division="${divisiDisplay}"
               data-status="${item.status}">
                <div class="program-card-header">
                    <div class="program-card-icon">
                        <i class="${item.icon || 'ri-flag-line'}"></i>
                    </div>
                    <div class="program-card-badges">
                        <span class="program-tag">${item.kategori || 'Program'}</span>
                        <span class="program-status-badge ${getStatusClass(item.status)}">${getStatusLabel(item)}</span>
                    </div>
                </div>
                <div class="program-card-body">
                    <h3 class="program-title">${item.nama}</h3>
                    <p class="program-summary">${item.deskripsi}</p>
                </div>
                <div class="program-meta">
                    <span><i class="ri-team-line"></i> ${divisiDisplay}</span>
                    <span><i class="ri-calendar-line"></i> ${item.periode || '2026'}</span>
                </div>
            </a>
            `;
        };

        const applyFilter = () => {
            const keyword = (searchInput ? searchInput.value : "").toLowerCase().trim();
            const status = (statusSelect ? statusSelect.value : "");

            const divisionMap = {
                "minba": ["minba", "minat dan bakat", "olahraga", "pom"],
                "kominfo": ["kominfo", "komunikasi dan informasi", "mading", "fik opportunity"],
                "sospol": ["sospol", "sosial dan politik", "sosial politik", "aspirasi", "fik aspirasi"],
                "psdm": ["psdm", "pengembangan sumber daya mahasiswa"],
                "bem fik": ["bem fik", "bem", "pimpinan", "bph"]
            };

            const filtered = allData.filter(item => {
                const isUtama = item.kategori === "Program Utama" || item.divisi === "BEM FIK";
                const divisiDisplay = isUtama ? "BEM FIK" : (item.divisi || "");

                // Check alias matching for division names & codes
                let aliasMatches = false;
                if (keyword) {
                    for (const [key, aliases] of Object.entries(divisionMap)) {
                        if (aliases.some(a => a.includes(keyword) || keyword.includes(a))) {
                            if ((item.divisi && item.divisi.toLowerCase().includes(key)) ||
                                (item.kategori && item.kategori.toLowerCase().includes(key)) ||
                                (divisiDisplay && divisiDisplay.toLowerCase().includes(key))) {
                                aliasMatches = true;
                                break;
                            }
                        }
                    }
                }

                const statusLabelText = item.statusLabel ? item.statusLabel.toLowerCase() : "";
                const statusText = item.status ? item.status.toLowerCase() : "";

                const matchKeyword = !keyword ||
                    aliasMatches ||
                    (item.nama && item.nama.toLowerCase().includes(keyword)) ||
                    (item.slug && item.slug.toLowerCase().includes(keyword)) ||
                    (divisiDisplay && divisiDisplay.toLowerCase().includes(keyword)) ||
                    (item.divisi && item.divisi.toLowerCase().includes(keyword)) ||
                    (item.kategori && item.kategori.toLowerCase().includes(keyword)) ||
                    (item.deskripsi && item.deskripsi.toLowerCase().includes(keyword)) ||
                    (item.tujuan && item.tujuan.toLowerCase().includes(keyword)) ||
                    (item.deskripsi_lengkap && item.deskripsi_lengkap.toLowerCase().includes(keyword)) ||
                    statusText.includes(keyword) ||
                    statusLabelText.includes(keyword);

                const matchStatus = !status || item.status === status;

                return matchKeyword && matchStatus;
            });

            if (filtered.length === 0) {
                grid.innerHTML = "";
                if (emptyMsg) emptyMsg.style.display = "block";
            } else {
                grid.innerHTML = filtered.map(renderCard).join("");
                if (emptyMsg) emptyMsg.style.display = "none";
            }
        };

        if (searchInput) searchInput.addEventListener("input", applyFilter);
        if (statusSelect) statusSelect.addEventListener("change", applyFilter);

        applyFilter();
    },

    /* ==========================================
       INFORMASI (HOMEPAGE)
    ========================================== */

    renderInformasi() {
        const data = getInformasi();
        const container = document.getElementById("informationContainer");
        if (!container || !data) return;

        const latestNews = data.filter(item => item.status === "publish").slice(0, 3);

        container.innerHTML = latestNews.map(item => `
        <article class="information-card">
            <div class="information-image">
                <img src="${BASE_PATH}${item.thumbnail}" alt="${item.judul}" onerror="handleImageError(this)">
                <span class="information-category">${item.kategori || 'Berita'}</span>
            </div>
            <div class="information-content">
                <div class="information-meta">
                    <span><i class="ri-calendar-line"></i> ${new Date(item.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span><i class="ri-user-line"></i> ${item.penulis || 'BEM FIK'}</span>
                </div>
                <h3>${item.judul}</h3>
                <p>${item.ringkasan.length > 115 ? item.ringkasan.substring(0, 115) + '...' : item.ringkasan}</p>
                <div class="information-footer">
                    <a href="${BASE_PATH}pages/informasi-detail.html?slug=${item.slug}" class="information-link">
                        Baca Selengkapnya <i class="ri-arrow-right-line"></i>
                    </a>
                </div>
            </div>
        </article>
        `).join("");
    },

    /* ==========================================
       GALERI (HOMEPAGE)
    ========================================== */

    renderGaleri() {
        const data = getGaleri();
        const container = document.getElementById("galleryContainer");
        if (!container || !data) return;

        if (data.length === 0) {
            container.innerHTML = `
                <div class="gallery-empty" style="grid-column: 1/-1;">
                    <i class="ri-image-2-line"></i>
                    <p>Dokumentasi kegiatan akan segera diperbarui.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = data.slice(0, 6).map(item => {
            const images = Array.isArray(item.gambar) ? item.gambar : (Array.isArray(item.images) ? item.images : [item.gambar || item.images]);
            const thumb = item.thumbnail || images[0];
            const thumbSrc = `${BASE_PATH}${thumb}`;

            return `
            <div class="gallery-item">
                <a href="${BASE_PATH}pages/galeri.html" class="gallery-thumb-link">
                    <img src="${thumbSrc}" alt="${item.judul}" loading="lazy" onerror="handleImageError(this)">
                    <div class="gallery-overlay">
                        <span class="gallery-category">${item.kategori || 'Dokumentasi'}</span>
                        <h4>${item.judul}</h4>
                    </div>
                </a>
            </div>
            `;
        }).join("");
    },

    /* ==========================================
       KONTAK
    ========================================== */

    renderKontak() {
        const data = getKontak();
        if (!data) return;

        const address = document.getElementById("contactAddress");
        const email = document.getElementById("contactEmail");
        const instagram = document.getElementById("contactInstagram");
        const mapFrame = document.getElementById("contactMapFrame");

        if (address && data.alamat) {
            address.textContent = data.alamat;
        }

        if (email) {
            const emailVal = data.email || "bemfikubpkarawang@gmail.com";
            email.innerHTML = `<a href="mailto:${emailVal}">${emailVal}</a>`;
        }

        if (instagram) {
            const igUrl = data.instagram || "https://www.instagram.com/bemfikubpk";
            const username = "@bemfikubpk";
            instagram.innerHTML = `<a href="${igUrl}" target="_blank" rel="noopener noreferrer">${username}</a>`;
        }

        if (mapFrame && data.maps) {
            mapFrame.src = data.maps;
        }
    },

    /* ==========================================
       ACTIVE MENU
    ========================================== */

    activeMenu() {
        const current = window.location.pathname.split("/").pop() || "index.html";

        document.querySelectorAll(".nav-link").forEach(link => {
            const href = link.getAttribute("href");
            if (!href) return;

            link.classList.remove("active");
            if (href.endsWith(current) || (current === "" && href.includes("index.html"))) {
                link.classList.add("active");
            }
        });
    },

    /* ==========================================
       MOBILE MENU
    ========================================== */

    mobileMenu() {
        const menuToggle = document.getElementById("menuToggle");
        const navMenu = document.getElementById("navMenu");

        if (!menuToggle || !navMenu) return;

        const icon = menuToggle.querySelector("i");

        menuToggle.addEventListener("click", function (e) {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle("show");
            menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
            document.body.classList.toggle("menu-open", isOpen);

            if (icon) {
                icon.className = isOpen ? "ri-close-line" : "ri-menu-line";
            }
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show");
                menuToggle.setAttribute("aria-expanded", "false");
                document.body.classList.remove("menu-open");
                if (icon) icon.className = "ri-menu-line";
            });
        });

        document.addEventListener("click", function (e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove("show");
                menuToggle.setAttribute("aria-expanded", "false");
                document.body.classList.remove("menu-open");
                if (icon) icon.className = "ri-menu-line";
            }
        });

        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape" && navMenu.classList.contains("show")) {
                navMenu.classList.remove("show");
                menuToggle.setAttribute("aria-expanded", "false");
                document.body.classList.remove("menu-open");
                if (icon) icon.className = "ri-menu-line";
            }
        });
    },

    /* ==========================================
       STICKY HEADER
    ========================================== */

    stickyHeader() {
        const navbar = document.querySelector(".navbar");
        if (!navbar) return;

        const handleScroll = () => {
            if (window.scrollY > 40) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
    },

    /* ==========================================
       BACK TO TOP
    ========================================== */

    backToTop() {
        const btn = document.getElementById("backToTop") || document.getElementById("scroll-up");
        if (!btn) return;

        window.addEventListener("scroll", () => {
            btn.classList.toggle("show", window.scrollY > 300);
        }, { passive: true });

        btn.onclick = (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    },

    /* ==========================================
       CURRENT YEAR
    ========================================== */

    currentYear() {
        const year = document.getElementById("year");
        if (year) {
            year.textContent = new Date().getFullYear();
        }
    }
};

/* ==========================================
   START APP
========================================== */

document.addEventListener("DOMContentLoaded", async () => {
    if (typeof loadAllData === "function") {
        await loadAllData();
    }

    BEMApp.init();

    if (typeof Animation !== "undefined" && Animation.init) {
        Animation.init();
    }
});