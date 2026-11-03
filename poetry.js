
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
        Bachpan se humein ek hi kahani sunayi jaati hai...
        Achhi ladki bano.
        Zyada mat bolo.
        Seedha chalo.
        Sar jhukakar baat karo.
        Sabki baat maan lo.
        Aur pata hi nahi chalta...
        kab "achha insaan" banne ki chahat,
        "khud ko kho dene" mein badal jaati hai.
        ......
        Maine bhi koshish ki thi.
        School mein achhe number laaye.
        Kabhi kisi se badtameezi nahi ki.
        Mehman aaye to muskurayi.
        Rishta aaye to chai bhi le gayi.
        Har us jagah "haan" kahi,
        jahaan mera dil "nahin" kehna chahta tha.
        Aur sab kehte the...
        "Kitni samajhdaar ladki hai."
        Lekin...
        kisi ne kabhi yeh nahi poocha...
        ki mujhe samajhne ki koshish kisne ki?
        ...

        Mujhe yaad hai...
        ek din school ki copy ke aakhri panne par maine likha tha—
        "Main badi hokar kya banna chahti hoon?"
        Us din maine doctor nahi likha.
        Engineer nahi.
        Teacher nahi.
        Maine sirf ek lafz likha tha...
        "Azaad."

        Us waqt mujhe us lafz ka matlab bhi nahi maloom tha.
        Bas itna jaanti thi...
        ki kuch tha...
        jo mujhe andar hi andar pukarta tha.
        ...

        Ghar mein sab mujhe samajhte the.
        Mohalle wale mujhe jaante the.
        Rishta-daar meri tareef karte the.
        Lekin...
        har raat diary ka ek safha mujhe dekhkar poochhta tha—
        "Aur tum?
        Tum khud ko jaanti ho?"
        ...
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
