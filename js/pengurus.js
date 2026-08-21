/* =====================================================
   PENGURUS PAGE JS (BEM FIK)
===================================================== */

const PengurusPage = {

    init() {
        this.renderLeader();
        this.renderDivision("PSDM", "psdmContainer");
        this.renderDivision("SOSPOL", "sospolContainer");
        this.renderDivision("MINBA", "minbaContainer");
        this.renderDivision("KOMINFO", "kominfoContainer");
    },

    createCard(item) {
        const nama = item.nama && item.nama.trim() !== ""
            ? item.nama
            : "Pengurus BEM";

        const fotoSrc = item.foto ? (BASE_PATH + item.foto) : `${BASE_PATH}assets/images/pengurus/default.png`;
        const divisiText = item.divisi === "Pimpinan" ? "Badan Pengurus Harian" : item.divisi;

        return `
            <div class="pengurus-card">
                <div class="pengurus-card-image">
                    <img
                        src="${fotoSrc}"
                        alt="${nama}"
                        loading="lazy"
                        onerror="this.onerror=null; if(window.handleImageError) window.handleImageError(this); else this.src='${BASE_PATH}assets/images/no-image.png';">
                </div>
                <div class="pengurus-card-content">
                    <h3 class="pengurus-card-name">${nama}</h3>
                    <div class="pengurus-card-role">${item.jabatan}</div>
                    <div class="pengurus-card-division">${divisiText}</div>
                </div>
            </div>
        `;
    },

    renderLeader() {
        const container = document.getElementById("leaderContainer");
        if (!container) return;

        const data = (getPengurus() || []).filter(item =>
            (item.divisi === "Pimpinan" ||
            item.jabatan === "Ketua" ||
            item.jabatan === "Wakil Ketua" ||
            item.jabatan === "Sekretaris" ||
            item.jabatan === "Bendahara") &&
            item.nama && item.nama.trim() !== ""
        );

        container.innerHTML = data.map(item => this.createCard(item)).join("");
    },

    renderDivision(divisi, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const data = (getPengurus() || []).filter(item =>
            item.divisi === divisi &&
            item.nama && item.nama.trim() !== ""
        );

        if (data.length === 0) {
            container.innerHTML = `<p class="empty-state" style="grid-column: 1/-1;">Data pengurus divisi ${divisi} sedang dimutakhirkan.</p>`;
            return;
        }

        container.innerHTML = data.map(item => this.createCard(item)).join("");
    }
};

/* =====================================================
   START
===================================================== */

document.addEventListener("DOMContentLoaded", async () => {
    if (typeof loadAllData === "function") {
        await loadAllData();
    }

    if (typeof BEMApp !== "undefined" && BEMApp.renderFooter) {
        BEMApp.renderFooter();
    }

    PengurusPage.init();
});