/* =====================================================
   INFORMASI PAGE JS (BEM FIK)
===================================================== */

let informasiData = [];
let filteredData = [];

let currentPage = 1;
const itemsPerPage = 6;

let activeCategory = "";
let keyword = "";

const featuredContainer = document.getElementById("featuredContainer");
const informationContainer = document.getElementById("informationContainer");
const paginationContainer = document.getElementById("pagination");

const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

/* =====================================================
   INIT
===================================================== */

document.addEventListener("DOMContentLoaded", initInformasi);

async function initInformasi() {
    try {
        if (typeof loadAllData === "function") {
            await loadAllData();
        }

        const data = getInformasi();
        if (!data) {
            console.warn("Data informasi tidak ditemukan.");
            return;
        }

        informasiData = data
            .filter(item => item.status === "publish")
            .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

        filteredData = [...informasiData];

        bindEvents();
        renderAll();
    } catch (err) {
        console.error("Gagal inisialisasi informasi:", err);
    }
}

/* =====================================================
   EVENTS
===================================================== */

function bindEvents() {
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            keyword = this.value.trim().toLowerCase();
            currentPage = 1;
            filterData();
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            activeCategory = button.dataset.category || "";
            currentPage = 1;
            filterData();
        });
    });
}

/* =====================================================
   FILTER
===================================================== */

function filterData() {
    filteredData = informasiData.filter(item => {
        const matchKeyword = !keyword ||
            (item.judul && item.judul.toLowerCase().includes(keyword)) ||
            (item.ringkasan && item.ringkasan.toLowerCase().includes(keyword)) ||
            (item.deskripsi && item.deskripsi.toLowerCase().includes(keyword));

        const matchCategory = activeCategory === "" ||
            (item.kategori && item.kategori.toLowerCase() === activeCategory.toLowerCase());

        return matchKeyword && matchCategory;
    });

    renderAll();
}

/* =====================================================
   RENDER ALL
===================================================== */

function renderAll() {
    renderFeatured();
    renderInformation();
    renderPagination();
}

/* =====================================================
   FEATURED NEWS
===================================================== */

function renderFeatured() {
    if (!featuredContainer) return;

    if (filteredData.length === 0) {
        featuredContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <i
                    class="ri-search-line"
                    style="font-size: 32px; color: var(--primary); margin-bottom: 12px; display: block;"
                ></i>

                <h3>Tidak ada informasi ditemukan</h3>

                <p>
                    Coba gunakan kata kunci pencarian
                    atau kategori yang berbeda.
                </p>
            </div>
        `;

        return;
    }

    const item = filteredData[0];

    const images =
        Array.isArray(item.gambar)
            ? item.gambar
            : item.gambar
                ? [item.gambar]
                : [];

    const thumbnail =
        item.thumbnail ||
        images[0] ||
        "";

    const imgSrc =
        resolveInformationImagePath(thumbnail);

    const fallbackSrc =
        images.length > 0
            ? resolveInformationImagePath(images[0])
            : `${BASE_PATH}assets/images/no-image.png`;

    featuredContainer.innerHTML = `
        <div class="featured-card">

            <div class="featured-image">

                <img
                    src="${imgSrc}"
                    alt="${item.judul}"
                    loading="lazy"
                    data-fallback-src="${fallbackSrc}"
                    onerror="handleInformationImageError(this)"
                >

                <span class="featured-category">
                    ${item.kategori || "Highlight"}
                </span>

            </div>

            <div class="featured-content">

                <div class="featured-meta">

                    <span>
                        <i class="ri-calendar-line"></i>
                        ${formatDate(item.tanggal)}
                    </span>

                    <span>
                        <i class="ri-user-line"></i>
                        ${item.penulis || "BEM FIK"}
                    </span>

                </div>

                <h2>
                    ${item.judul}
                </h2>

                <p>
                    ${item.ringkasan || ""}
                </p>

                <a
                    href="informasi-detail.html?slug=${item.slug}"
                    class="btn btn-primary"
                >
                    Baca Selengkapnya
                    <i class="ri-arrow-right-line"></i>
                </a>

            </div>

        </div>
    `;
}

/* =====================================================
   GRID INFORMASI
===================================================== */

function renderInformation() {
    if (!informationContainer) return;

    if (filteredData.length === 0) {
        informationContainer.innerHTML = `
            <div
                class="empty-state"
                style="grid-column: 1/-1;"
            >
                <h3>
                    Informasi tidak ditemukan
                </h3>

                <p>
                    Coba gunakan kata kunci
                    pencarian lain.
                </p>
            </div>
        `;

        return;
    }

    const start =
        (currentPage - 1) * itemsPerPage;

    const end =
        start + itemsPerPage;

    const pageData =
        filteredData.slice(start, end);

    informationContainer.innerHTML =
        pageData.map(item => {

            const images =
                Array.isArray(item.gambar)
                    ? item.gambar
                    : item.gambar
                        ? [item.gambar]
                        : [];

            const thumbnail =
                item.thumbnail ||
                images[0] ||
                "";

            const imgSrc =
                resolveInformationImagePath(
                    thumbnail
                );

            const fallbackSrc =
                images.length > 0
                    ? resolveInformationImagePath(
                        images[0]
                    )
                    : `${BASE_PATH}assets/images/no-image.png`;

            const ringkasan =
                item.ringkasan || "";

            return `
                <article class="news-card">

                    <div class="news-image">

                        <img
                            src="${imgSrc}"
                            alt="${item.judul}"
                            loading="lazy"
                            data-fallback-src="${fallbackSrc}"
                            onerror="handleInformationImageError(this)"
                        >

                        <span class="news-category">
                            ${item.kategori || "Berita"}
                        </span>

                    </div>

                    <div class="news-content">

                        <div class="news-meta">

                            <span>
                                <i class="ri-calendar-line"></i>
                                ${formatDate(item.tanggal)}
                            </span>

                            <span>
                                <i class="ri-user-line"></i>
                                ${item.penulis || "BEM FIK"}
                            </span>

                        </div>

                        <h3>
                            ${item.judul}
                        </h3>

                        <p>
                            ${
                                ringkasan.length > 115
                                    ? ringkasan.substring(0, 115) + "..."
                                    : ringkasan
                            }
                        </p>

                        <a
                            href="informasi-detail.html?slug=${item.slug}"
                            class="news-link"
                        >
                            Baca Selengkapnya
                            <i class="ri-arrow-right-line"></i>
                        </a>

                    </div>

                </article>
            `;
        }).join("");
}

/* =====================================================
   IMAGE HELPER INFORMASI
===================================================== */

function resolveInformationImagePath(pathStr) {

    if (!pathStr) {
        return `${BASE_PATH}assets/images/no-image.png`;
    }

    if (
        pathStr.startsWith("http://") ||
        pathStr.startsWith("https://") ||
        pathStr.startsWith("/")
    ) {
        return pathStr;
    }

    return `${BASE_PATH}${pathStr}`;
}


function handleInformationImageError(img) {

    if (!img) return;

    const fallback =
        img.dataset.fallbackSrc;

    if (
        fallback &&
        img.dataset.fallbackUsed !== "true"
    ) {
        img.dataset.fallbackUsed = "true";
        img.src = fallback;
        return;
    }

    img.onerror = null;

    img.src =
        `${BASE_PATH}assets/images/no-image.png`;
}

/* =====================================================
   PAGINATION
===================================================== */

function renderPagination() {
    if (!paginationContainer) return;

    paginationContainer.innerHTML = "";
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    if (totalPages <= 1) return;

    let paginationHTML = `
        <button
            class="page-btn"
            ${currentPage === 1 ? "disabled" : ""}
            onclick="changePage(${currentPage - 1})"
            aria-label="Halaman Sebelumnya">
            <i class="ri-arrow-left-s-line"></i>
        </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <button
                class="page-btn ${i === currentPage ? "active" : ""}"
                onclick="changePage(${i})"
                aria-label="Halaman ${i}">
                ${i}
            </button>
        `;
    }

    paginationHTML += `
        <button
            class="page-btn ${currentPage === totalPages ? "disabled" : ""}
            onclick="changePage(${currentPage + 1})"
            aria-label="Halaman Selanjutnya">
            <i class="ri-arrow-right-s-line"></i>
        </button>
    `;

    paginationContainer.innerHTML = paginationHTML;
}

/* =====================================================
   CHANGE PAGE
===================================================== */

function changePage(page) {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderInformation();
    renderPagination();

    const target = document.querySelector(".information-list");
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}

/* =====================================================
   FORMAT DATE
===================================================== */

function formatDate(dateString) {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
