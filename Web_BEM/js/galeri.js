/* =====================================================
   GALERI JS — BEM FAKULTAS ILMU KOMPUTER
   Sistem Album & Carousel Modal Documentation
===================================================== */

let galleryData = [];
let filteredGallery = [];
let currentPage = 1;
let currentCategory = "all";
let currentSearch = "";

const ITEMS_PER_PAGE = 9;

/* State Lightbox Modal Album */
let currentAlbum = null;
let currentPhotoIndex = 0;
let isLightboxEventsSetup = false;

/* =====================================================
   INIT
===================================================== */

async function initializeGallery() {
    try {
        // Immediate initial render from synchronous getter (prevents layout flash)
        galleryData = getGaleri() || [];
        filteredGallery = [...galleryData];

        setupFilter();
        setupSearch();
        setupLoadMore();
        renderGallery();
        updateStatistics();
        setupLightboxEvents();

        // Async sync from JSON (if running on http server)
        if (typeof loadAllData === "function") {
            await loadAllData();
            galleryData = getGaleri() || [];
            filterData(); // Re-apply current category and search filter
            updateStatistics();
        }
    } catch (error) {
        console.error("Gagal memuat galeri:", error);
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeGallery);
} else {
    initializeGallery();
}

/* =====================================================
   RENDER ALBUMS
===================================================== */

function renderGallery() {
    const container = document.getElementById("galleryContainer");
    const counter = document.getElementById("galleryCount");
    const empty = document.getElementById("galleryEmpty");

    if (!container) return;

    const limit = currentPage * ITEMS_PER_PAGE;
    const data = filteredGallery.slice(0, limit);

    container.innerHTML = "";

    if (filteredGallery.length === 0) {
        if (empty) {
            empty.style.display = "block";
            const emptyText = empty.querySelector("p");
            if (emptyText) emptyText.textContent = "Dokumentasi kegiatan akan diperbarui secara berkala.";
        }
        if (counter) counter.textContent = "0 Album Dokumentasi";
        updateLoadMore();
        return;
    }

    if (empty) empty.style.display = "none";
    if (counter) counter.textContent = `${filteredGallery.length} Album Dokumentasi`;

    data.forEach((item, index) => {
        container.innerHTML += createAlbumCard(item, index);
    });

    bindAlbumClick();
    updateLoadMore();
}

/* =====================================================
   ALBUM CARD HTML
===================================================== */

function createAlbumCard(item, index) {
    const images = getAlbumImages(item);
    const thumb = item.thumbnail || images[0];
    const thumbSrc = resolveImagePath(thumb);
    const count = images.length;
    const formattedDate = formatDate(item.tanggal);

    return `
        <div class="gallery-card album-card" data-id="${item.id}" data-index="${index}" role="button" tabindex="0" aria-label="Buka Album ${item.judul}">
            <div class="gallery-image album-cover">
                <img src="${thumbSrc}" alt="${item.judul}" loading="lazy" onerror="handleImageError(this)">
                <div class="album-badge">
                    <i class="ri-image-line"></i> ${count} Foto
                </div>
                <div class="gallery-overlay">
                    <span class="gallery-category">${item.kategori || 'Kegiatan'}</span>
                    <h3>${item.judul}</h3>
                    <p>
                        <span><i class="ri-calendar-line"></i> ${formattedDate}</span>
                        <span class="album-action-text">Buka Album <i class="ri-arrow-right-line"></i></span>
                    </p>
                </div>
            </div>
        </div>
    `;
}

/* Helper Path Image */
function resolveImagePath(pathStr) {
    if (!pathStr) return `${BASE_PATH}assets/images/no-image.png`;
    if (pathStr.startsWith("http") || pathStr.startsWith("/") || pathStr.startsWith("../")) {
        return pathStr;
    }
    return BASE_PATH + pathStr;
}

/* Helper Get Images Array */
function getAlbumImages(album) {
    if (!album) return [];
    const imgs = album.gambar || album.images || [];
    return Array.isArray(imgs) ? imgs : [imgs];
}

/* =====================================================
   STATISTIK
===================================================== */

function updateStatistics() {
    const totalGallery = document.getElementById("totalGallery");
    const totalCategory = document.getElementById("totalCategory");
    const totalYear = document.getElementById("totalYear");

    if (totalGallery) {
        totalGallery.textContent = galleryData.length;
    }

    const categories = [
        ...new Set(galleryData.map(item => item.kategori).filter(Boolean))
    ];

    if (totalCategory) {
        totalCategory.textContent = Math.max(categories.length, 1);
    }

    const years = [
        ...new Set(galleryData.map(item => new Date(item.tanggal).getFullYear()).filter(Boolean))
    ];

    if (totalYear) {
        totalYear.textContent = Math.max(years.length, 1);
    }
}

/* =====================================================
   LOAD MORE
===================================================== */

function updateLoadMore() {
    const button = document.getElementById("loadMoreGallery");
    if (!button) return;

    if (currentPage * ITEMS_PER_PAGE >= filteredGallery.length) {
        button.style.display = "none";
    } else {
        button.style.display = "inline-flex";
    }
}

/* =====================================================
   FILTER & SEARCH LOGIC
===================================================== */

function filterData() {
    filteredGallery = galleryData.filter(item => {
        const matchesCategory = (currentCategory === "all" || currentCategory === "")
            ? true
            : (item.kategori && item.kategori.toLowerCase() === currentCategory.toLowerCase());

        const query = currentSearch.toLowerCase().trim();
        const matchesSearch = !query ||
            (item.judul && item.judul.toLowerCase().includes(query)) ||
            (item.kategori && item.kategori.toLowerCase().includes(query)) ||
            (item.deskripsi && item.deskripsi.toLowerCase().includes(query));

        return matchesCategory && matchesSearch;
    });

    currentPage = 1;
    renderGallery();
}

function setupSearch() {
    const input = document.getElementById("gallerySearch");
    if (!input) return;

    input.addEventListener("input", function () {
        currentSearch = this.value;
        filterData();
    });
}

function setupFilter() {
    const wrapper = document.querySelector(".gallery-filter-group");
    if (!wrapper) return;

    const categories = [
        ...new Set(galleryData.map(item => item.kategori).filter(Boolean))
    ];

    let buttonsHTML = `
        <button class="gallery-filter-btn ${currentCategory === 'all' ? 'active' : ''}" data-filter="all">
            Semua
        </button>
    `;

    categories.forEach(category => {
        const isActive = currentCategory.toLowerCase() === category.toLowerCase() ? 'active' : '';
        buttonsHTML += `
            <button class="gallery-filter-btn ${isActive}" data-filter="${category}">
                ${category}
            </button>
        `;
    });

    if (wrapper) {
        wrapper.innerHTML = buttonsHTML;
        const buttons = wrapper.querySelectorAll ? wrapper.querySelectorAll(".gallery-filter-btn") : [];
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                buttons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                currentCategory = button.dataset.filter || "all";
                filterData();
            });
        });
    }
}

function setupLoadMore() {
    const button = document.getElementById("loadMoreGallery");
    if (!button) return;

    button.addEventListener("click", () => {
        currentPage++;
        renderGallery();
    });
}

/* =====================================================
   LIGHTBOX MODAL & CAROUSEL (EVENT DELEGATION DIRECT OPEN)
===================================================== */

function bindAlbumClick() {
    const container = document.getElementById("galleryContainer");
    if (!container) return;

    container.onclick = function(e) {
        const card = e.target.closest(".album-card");
        if (!card) return;

        e.preventDefault();
        e.stopPropagation();

        const index = parseInt(card.dataset.index, 10);
        const albumData = filteredGallery[index] || galleryData[index] || (getGaleri() ? getGaleri()[0] : null);

        if (albumData) {
            openAlbumLightbox(albumData);
        }
    };
}

function openAlbumLightbox(album) {
    const modal = document.getElementById("galleryLightbox");
    if (!modal || !album) return;

    currentAlbum = album;
    currentPhotoIndex = 0;

    updateLightboxContent();
    modal.classList.add("active");

    // Lock body scrolling without modifying scroll position
    document.body.style.overflow = "hidden";
}

function updateLightboxContent() {
    if (!currentAlbum) return;

    const imageEl = document.getElementById("lightboxImage");
    const captionEl = document.getElementById("lightboxCaption");
    const counterEl = document.getElementById("lightboxCounter");

    const photos = getAlbumImages(currentAlbum);
    if (photos.length === 0) return;

    // Boundary check
    if (currentPhotoIndex < 0) currentPhotoIndex = photos.length - 1;
    if (currentPhotoIndex >= photos.length) currentPhotoIndex = 0;

    const photoSrc = resolveImagePath(photos[currentPhotoIndex]);

    if (imageEl) {
        imageEl.src = photoSrc;
        imageEl.alt = `${currentAlbum.judul} - Foto ${currentPhotoIndex + 1}`;
    }

    if (counterEl) {
        counterEl.textContent = `${currentPhotoIndex + 1} / ${photos.length}`;
    }

    if (captionEl) {
        captionEl.innerHTML = `
            <div class="lightbox-meta">
                <span class="lightbox-badge">${currentAlbum.kategori || 'Dokumentasi'}</span>
                <span class="lightbox-counter-text"><i class="ri-image-line"></i> ${currentPhotoIndex + 1} dari ${photos.length} Foto</span>
            </div>
            <h3>${currentAlbum.judul}</h3>
            <p><i class="ri-calendar-line"></i> ${formatDate(currentAlbum.tanggal)} &nbsp;•&nbsp; ${currentAlbum.deskripsi || ''}</p>
        `;
    }
}

function nextPhoto() {
    if (!currentAlbum) return;
    const photos = getAlbumImages(currentAlbum);
    if (photos.length <= 1) return;
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updateLightboxContent();
}

function prevPhoto() {
    if (!currentAlbum) return;
    const photos = getAlbumImages(currentAlbum);
    if (photos.length <= 1) return;
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updateLightboxContent();
}

function closeLightbox() {
    const modal = document.getElementById("galleryLightbox");
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
    currentAlbum = null;
    currentPhotoIndex = 0;
}

/* Setup Event Keyboard, Touch Swipe, dan Klik Navigasi Modal */
function setupLightboxEvents() {
    if (isLightboxEventsSetup) return;
    isLightboxEventsSetup = true;

    // Tombol Navigasi Modal & Event Delegation
    document.addEventListener("click", (e) => {
        if (e.target.id === "closeLightbox" || e.target.closest("#closeLightbox")) {
            e.preventDefault();
            closeLightbox();
        }
        if (e.target.id === "nextImage" || e.target.closest("#nextImage")) {
            e.preventDefault();
            nextPhoto();
        }
        if (e.target.id === "prevImage" || e.target.closest("#prevImage")) {
            e.preventDefault();
            prevPhoto();
        }
        if (e.target.id === "galleryLightbox") {
            closeLightbox();
        }
    });

    // Keyboard Arrow & ESC
    document.addEventListener("keydown", (e) => {
        const modal = document.getElementById("galleryLightbox");
        if (!modal || !modal.classList.contains("active")) return;

        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextPhoto();
        if (e.key === "ArrowLeft") prevPhoto();
    });

    // Touch Swipe Gesture pada Perangkat HP
    const modalContent = document.querySelector(".lightbox-content");
    if (modalContent) {
        let touchStartX = 0;
        let touchEndX = 0;

        modalContent.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        modalContent.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const threshold = 40;
            if (touchEndX < touchStartX - threshold) {
                nextPhoto();
            }
            if (touchEndX > touchStartX + threshold) {
                prevPhoto();
            }
        }
    }
}

/* =====================================================
   FORMAT TANGGAL (Selalu 22 Juli 2026 untuk Pelantikan)
===================================================== */

function formatDate(dateStr) {
    if (!dateStr) return "22 Juli 2026";
    const dateObj = new Date(dateStr);
    if (isNaN(dateObj.getTime())) return "22 Juli 2026";

    return dateObj.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}