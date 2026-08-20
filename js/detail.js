/* =====================================================
   DETAIL PAGE JS (BEM FIK)
===================================================== */

function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

/* =====================================================
   DETAIL DIVISI
===================================================== */

function renderDivisiNotFound() {
    const nameEl = document.getElementById("divisionName");
    const descEl = document.getElementById("divisionDescription");
    if (nameEl) nameEl.textContent = "Data Tidak Ditemukan";
    if (descEl) descEl.textContent = "Divisi yang Anda cari tidak tersedia atau parameter tidak valid.";

    const leaderEl = document.getElementById("divisionLeader");
    const memberEl = document.getElementById("divisionMember");
    const visionEl = document.getElementById("divisionVision");
    if (leaderEl) leaderEl.textContent = "-";
    if (memberEl) memberEl.textContent = "-";
    if (visionEl) visionEl.textContent = "-";

    const missionEl = document.getElementById("divisionMission");
    const taskEl = document.getElementById("divisionTask");
    const progEl = document.getElementById("programContainer");
    const memEl = document.getElementById("memberContainer");
    if (missionEl) missionEl.innerHTML = "";
    if (taskEl) taskEl.innerHTML = "";
    if (progEl) progEl.innerHTML = "";
    if (memEl) memEl.innerHTML = "";
}

function loadDetailDivisi() {
    const idParam = getUrlParameter("id");
    const id = Number(idParam);

    if (!idParam || isNaN(id)) {
        renderDivisiNotFound();
        return;
    }

    const divisiList = getDivisiDetail();
    if (!divisiList) {
        console.warn("Data divisi belum dimuat");
        return;
    }

    const data = getById(divisiList, id);
    if (!data) {
        renderDivisiNotFound();
        return;
    }

    document.title = `${data.singkatan || data.nama} | BEM FIK`;

    const nameEl = document.getElementById("divisionName");
    const descEl = document.getElementById("divisionDescription");
    const imgEl = document.getElementById("divisionImage");
    const leaderEl = document.getElementById("divisionLeader");
    const memberEl = document.getElementById("divisionMember");
    const visionEl = document.getElementById("divisionVision");

    if (nameEl) nameEl.textContent = data.nama;
    if (descEl) descEl.textContent = data.deskripsi;
    
    if (imgEl) {
        const logoSrc = data.logo || data.gambar || "";
        if (logoSrc) {
            const cleanSrc = BASE_PATH + logoSrc.replace("../", "");
            imgEl.src = cleanSrc;
            imgEl.alt = data.nama;
            const imgElDesktop = document.getElementById("divisionImageDesktop");
            if (imgElDesktop) {
                imgElDesktop.src = cleanSrc;
                imgElDesktop.alt = data.nama;
            }
        }
    }
    
    if (leaderEl) leaderEl.textContent = data.ketua || "Kepala Departemen";
    if (memberEl) memberEl.textContent = `${data.jumlahAnggota || (data.pengurus ? data.pengurus.length : 0)} Orang`;

    // Tugas
    const taskContainer = document.getElementById("divisionTask");
    if (taskContainer) {
        const tugasList = data.tugas || [];
        if (Array.isArray(tugasList) && tugasList.length > 0) {
            taskContainer.innerHTML = tugasList.map(tugas => `
                <div class="task-card">
                    <div class="task-icon">
                        <i class="ri-checkbox-circle-line"></i>
                    </div>
                    <p>${typeof tugas === 'object' ? (tugas.isi || tugas.text) : tugas}</p>
                </div>
            `).join("");
        }
    }

    // Program Kerja
    const programContainer = document.getElementById("programContainer");
    if (programContainer) {
        const prokers = data.programKerja || (typeof getProgramByDivisi === "function" ? getProgramByDivisi(data.singkatan) : []);
        if (Array.isArray(prokers) && prokers.length > 0) {
            programContainer.innerHTML = prokers.map(program => `
                <div class="program-card">
                    <div class="program-card-header">
                        <div class="program-card-icon">
                            <i class="ri-flag-line"></i>
                        </div>
                        <span class="program-tag">${data.singkatan || 'Divisi'}</span>
                    </div>
                    <div class="program-card-body">
                        <h3 class="program-title">${program.nama}</h3>
                        <p class="program-summary">${program.deskripsi || ''}</p>
                    </div>
                </div>
            `).join("");
        } else {
            programContainer.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1;">
                    <p>Program kerja divisi akan diperbarui secara berkala.</p>
                </div>
            `;
        }
    }

    // Pengurus
    const memberContainer = document.getElementById("memberContainer");
    if (memberContainer) {
        const pengurusList = data.pengurus || (typeof getPengurusByDivisi === "function" ? getPengurusByDivisi(data.singkatan) : []);
        const allPengurus = getPengurus();
        if (Array.isArray(pengurusList) && pengurusList.length > 0) {
            memberContainer.innerHTML = pengurusList.map(member => {
                const match = allPengurus ? allPengurus.find(p => p.nama.trim().toLowerCase() === member.nama.trim().toLowerCase()) : null;
                const fotoSrc = match && match.foto ? (BASE_PATH + match.foto) : null;

                if (fotoSrc) {
                    return `
                    <div class="member-card">
                        <div class="member-avatar" style="overflow: hidden; border-radius: 50%;">
                            <img src="${fotoSrc}" alt="${member.nama}" style="width: 100%; height: 100%; object-fit: cover;" onerror="handleImageError(this)">
                        </div>
                        <div class="member-content">
                            <h3>${member.nama}</h3>
                            <span>${member.jabatan}</span>
                        </div>
                    </div>
                    `;
                }

                return `
                <div class="member-card">
                    <div class="member-avatar">
                        <i class="ri-user-3-line"></i>
                    </div>
                    <div class="member-content">
                        <h3>${member.nama}</h3>
                        <span>${member.jabatan}</span>
                    </div>
                </div>
                `;
            }).join("");
        }
    }
}

/* =====================================================
   DETAIL PROGRAM KERJA
===================================================== */

function renderProkerNotFound() {
    const title = document.getElementById("programTitle");
    const division = document.getElementById("programDivision");
    const summary = document.getElementById("programSummary");

    if (title) title.textContent = "Program Tidak Ditemukan";
    if (division) division.textContent = "-";
    if (summary) summary.textContent = "Program kerja yang Anda cari tidak tersedia atau ID tidak valid.";
}

function loadDetailProgram() {
    const idParam = getUrlParameter("id");
    const slugParam = getUrlParameter("slug");

    if (!idParam && !slugParam) {
        renderProkerNotFound();
        return;
    }

    const prokerList = getProgramKerja();
    if (!prokerList) {
        console.warn("Data proker belum dimuat");
        return;
    }

    let data = null;
    if (idParam) {
        data = getById(prokerList, idParam);
    }
    if (!data && slugParam) {
        data = getBySlug(prokerList, slugParam);
    }

    if (!data) {
        renderProkerNotFound();
        return;
    }

    document.title = `${data.nama} | BEM FIK`;

    const breadcrumb = document.getElementById("breadcrumbCurrent");
    if (breadcrumb) breadcrumb.textContent = data.nama;

    const programTitle = document.getElementById("programTitle");
    const programDivision = document.getElementById("programDivision");
    const programSummary = document.getElementById("programSummary");

    if (programTitle) programTitle.textContent = data.nama;
    if (programDivision) programDivision.textContent = `${data.divisi} • ${data.kategori || 'Program Kerja'}`;
    if (programSummary) programSummary.textContent = data.deskripsi;

    const programDivisi = document.getElementById("programDivisi");
    const programTimeline = document.getElementById("programTimeline");
    const programStatus = document.getElementById("programStatus");

    if (programDivisi) programDivisi.textContent = data.divisi;
    if (programTimeline) programTimeline.textContent = `Periode ${data.periode || '2026'}`;
    if (programStatus) {
        const label = data.statusLabel || (data.status === "berjalan" ? "Sedang Berjalan" : (data.status === "selesai" ? "Selesai" : "Direncanakan"));
        const cls = {
            berjalan: "status-berjalan",
            selesai: "status-selesai",
            direncanakan: "status-direncanakan"
        }[data.status] || "status-direncanakan";
        programStatus.innerHTML = `<span class="program-status-badge ${cls}">${label}</span>`;
    }

    const programGoal = document.getElementById("programGoal");
    if (programGoal) {
        programGoal.textContent = data.tujuan || "Mendukung pelaksanaan program kerja dan pengembangan potensi mahasiswa.";
    }

    const programDescription = document.getElementById("programDescription");
    if (programDescription) {
        programDescription.textContent = data.deskripsi_lengkap || data.deskripsi;
    }

    const programTarget = document.getElementById("programTarget");
    if (programTarget) {
        if (Array.isArray(data.sasaran) && data.sasaran.length > 0) {
            programTarget.innerHTML = data.sasaran.map(s => `
                <li>
                    <i class="ri-check-double-line"></i>
                    <span>${s}</span>
                </li>
            `).join("");
        } else {
            programTarget.innerHTML = `<li><i class="ri-check-double-line"></i><span>Mahasiswa Fakultas Ilmu Komputer</span></li>`;
        }
    }

    const programOutput = document.getElementById("programOutput");
    if (programOutput) {
        if (Array.isArray(data.output) && data.output.length > 0) {
            programOutput.innerHTML = data.output.map(o => `
                <li>
                    <i class="ri-checkbox-circle-line"></i>
                    <span>${o}</span>
                </li>
            `).join("");
        } else {
            programOutput.innerHTML = `<li><i class="ri-checkbox-circle-line"></i><span>Kegiatan terlaksana sesuai target perencanaan</span></li>`;
        }
    }

    const programGallery = document.getElementById("programGallery");
    if (programGallery) {
        if (Array.isArray(data.galeri) && data.galeri.length > 0) {
            programGallery.innerHTML = data.galeri.map(img => `
                <div class="gallery-item">
                    <img src="${BASE_PATH}${img}" alt="Dokumentasi ${data.nama}" loading="lazy" onerror="handleImageError(this)">
                </div>
            `).join("");
        } else {
            programGallery.innerHTML = `
                <div class="gallery-empty" style="grid-column: 1/-1;">
                    <i class="ri-image-2-line"></i>
                    <p>Dokumentasi kegiatan akan segera diperbarui setelah pelaksanaan.</p>
                </div>
            `;
        }
    }

    // Program Terkait
    const relatedContainer = document.getElementById("relatedPrograms");
    if (relatedContainer && prokerList) {
        const related = prokerList
            .filter(p => String(p.id) !== String(data.id))
            .slice(0, 3);

        if (related.length > 0) {
            const getStatusClass = (status) => {
                switch ((status || "").toLowerCase()) {
                    case "berjalan": return "status-berjalan";
                    case "selesai": return "status-selesai";
                    default: return "status-direncanakan";
                }
            };
            relatedContainer.innerHTML = related.map(p => `
                <a href="proker-detail.html?id=${p.id}&slug=${p.slug || ''}" class="program-card">
                    <div class="program-card-header">
                        <div class="program-card-icon">
                            <i class="${p.icon || 'ri-flag-line'}"></i>
                        </div>
                        <div class="program-card-badges">
                            <span class="program-tag">${p.kategori || p.divisi}</span>
                            <span class="program-status-badge ${getStatusClass(p.status)}">${p.statusLabel || p.status || 'Direncanakan'}</span>
                        </div>
                    </div>
                    <div class="program-card-body">
                        <h3 class="program-title">${p.nama}</h3>
                        <p class="program-summary">${p.deskripsi}</p>
                    </div>
                    <div class="program-meta">
                        <span><i class="ri-calendar-line"></i> ${p.periode || '2026'}</span>
                        <span class="program-kategori"><i class="ri-price-tag-3-line"></i> ${p.kategori || 'Program'}</span>
                    </div>
                </a>
            `).join("");
        } else {
            relatedContainer.innerHTML = `<p class="empty-state" style="grid-column: 1/-1;">Program kerja lainnya akan segera ditambahkan.</p>`;
        }
    }
}

/* =====================================================
   DETAIL INFORMASI
===================================================== */

function loadDetailInformasi() {
    const slug = getUrlParameter("slug");
    if (!slug) return;

    const informasiList = getInformasi() || DATA.informasi;
    if (!informasiList) {
        console.warn("Data informasi belum dimuat");
        return;
    }

    const data = informasiList.find(item => item.slug === slug);
    if (!data) {
        console.warn("Informasi tidak ditemukan");
        return;
    }

    document.title = `${data.judul} | BEM FIK`;

    const titleEl = document.getElementById("infoTitle");
    const catEl = document.getElementById("infoCategory");
    const dateEl = document.getElementById("infoDate");
    const authorEl = document.getElementById("infoAuthor");
    const imgEl = document.getElementById("infoImage");
    const contentEl = document.getElementById("infoContent");

    if (titleEl) titleEl.textContent = data.judul;
    if (catEl) catEl.textContent = data.kategori || "Berita";
    if (dateEl) {
        dateEl.textContent = new Date(data.tanggal).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }
    if (authorEl) authorEl.textContent = data.penulis || "BEM FIK";
    if (imgEl && data.thumbnail) {
        imgEl.src = BASE_PATH + data.thumbnail;
        imgEl.alt = data.judul;
    }
    if (contentEl) {
        const paragraphs = (data.deskripsi || "").split("\n\n");
        contentEl.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join("");
    }

    // Tags
    const tagContainer = document.getElementById("tagContainer");
    if (tagContainer && Array.isArray(data.tags)) {
        tagContainer.innerHTML = data.tags.map(tag => `<span class="tag">#${tag}</span>`).join("");
    }

    // Gallery / Dokumentasi Berita
    const galleryContainer = document.getElementById("galleryContainer");
    if (galleryContainer) {
        if (Array.isArray(data.gambar) && data.gambar.length > 0) {
            galleryContainer.innerHTML = data.gambar.map(img => `
                <div class="gallery-item">
                    <img src="${BASE_PATH}${img}" alt="${data.judul}" loading="lazy" onerror="handleImageError(this)">
                </div>
            `).join("");
        } else {
            galleryContainer.innerHTML = `
                <div class="gallery-empty" style="grid-column: 1/-1;">
                    <i class="ri-image-2-line"></i>
                    <p>Dokumentasi tambahan untuk informasi ini belum tersedia.</p>
                </div>
            `;
        }
    }

    // Related Information
    const relatedContainer = document.getElementById("relatedContainer");
    if (relatedContainer && Array.isArray(informasiList)) {
        const related = informasiList
            .filter(item => item.id !== data.id && item.status === "publish")
            .slice(0, 3);

        if (related.length > 0) {
            relatedContainer.innerHTML = related.map(item => `
                <article class="news-card">
                    <div class="news-image">
                        <img src="${BASE_PATH}${item.thumbnail}" alt="${item.judul}" onerror="handleImageError(this)">
                        <span class="news-category">${item.kategori || 'Berita'}</span>
                    </div>
                    <div class="news-content">
                        <div class="news-meta">
                            <span><i class="ri-calendar-line"></i> ${new Date(item.tanggal).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
                        </div>
                        <h3>${item.judul}</h3>
                        <p>${item.ringkasan}</p>
                        <a href="informasi-detail.html?slug=${item.slug}" class="news-link">
                            Baca Selengkapnya <i class="ri-arrow-right-line"></i>
                        </a>
                    </div>
                </article>
            `).join("");
        }
    }
}

/* =====================================================
   INIT DETAIL PAGE
===================================================== */

async function initDetail() {
    try {
        if (typeof loadAllData === "function") {
            await loadAllData();
        }
        const page = window.location.pathname.split("/").pop();

        if (page.includes("divisi-detail")) {
            loadDetailDivisi();
        } else if (page.includes("proker-detail")) {
            loadDetailProgram();
        } else if (page.includes("informasi-detail")) {
            loadDetailInformasi();
        }
    } catch (error) {
        console.error("Detail init error:", error);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDetail);
} else {
    initDetail();
}
