/* =====================================================
   DIVISI PAGE
===================================================== */

const Divisi = {

    cards: [],
    keyword: "",

    init() {
        this.cards = document.querySelectorAll(".division-card, .divisi-card");
        this.search();
    },

    search() {
        const input = document.getElementById("searchDivisi");
        if (!input) return;

        input.addEventListener("input", (e) => {
            this.keyword = e.target.value.toLowerCase();
            this.cards = document.querySelectorAll(".division-card, .divisi-card");
            this.filter();
        });
    },

    filter() {
        this.cards.forEach(card => {
            const h3 = card.querySelector("h3");
            const p = card.querySelector("p");
            const nama = h3 ? h3.textContent.toLowerCase() : "";
            const deskripsi = p ? p.textContent.toLowerCase() : "";

            if (nama.includes(this.keyword) || deskripsi.includes(this.keyword)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    }

};

document.addEventListener("DOMContentLoaded", () => {
    Divisi.init();
});

