
const modal = document.getElementById("poetryModal");

const closeButton = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");

const modalChapter = document.getElementById("modalChapter");

const modalPoem = document.getElementById("modalPoem");

const chapterLinks = document.querySelectorAll(".chapter-link");

const backdrop = document.querySelector(".modal-backdrop");


/* YOUR POEMS */

const poems = {

    "Acchi Ladki": `
        Your actual poem goes here.

        Keep each stanza separated
        by an empty line.

        The poem will appear beautifully
        inside the reading panel.
    `,

    "Kyun?": `
        Your poem for Kyun? goes here.
    `,

    "Bigdi Ladki": `
        Your poem for Bigdi Ladki goes here.
    `,

    "Khwaab": `
        Your poem for Khwaab goes here.
    `,

    "Tanhai": `
        Your poem for Tanhai goes here.
    `,

    "Apna Raasta": `
        Your poem for Apna Raasta goes here.
    `,

    "Parwaaz": `
        Your poem for Parwaaz goes here.
    `,

    "Qeemat": `
        Your poem for Qeemat goes here.
    `,

    "Khauf": `
        Your poem for Khauf goes here.
    `,

    "Mere Hisse Ka Aasmaan": `
        Your poem for Mere Hisse Ka Aasmaan goes here.
    `

};


/* OPEN MODAL */

chapterLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const title = this.dataset.title;

        const chapter = this.dataset.chapter;

        modalTitle.textContent = title;

        modalChapter.textContent = `${chapter} / 10`;

        modalPoem.textContent = poems[title] || "Poem coming soon.";

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

        closeButton.focus();

    });

});


/* CLOSE MODAL */

function closePoetryModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* CROSS BUTTON */

closeButton.addEventListener("click", closePoetryModal);


/* CLICK OUTSIDE THE PANEL */

backdrop.addEventListener("click", closePoetryModal);


/* ESCAPE KEY */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePoetryModal();

    }

});
