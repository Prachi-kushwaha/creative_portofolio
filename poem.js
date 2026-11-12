(() => {
    const modal = document.getElementById("poetryModal");
    const closeButton = document.getElementById("closeModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalPoem = document.getElementById("modalPoem");
    const modalChapter = document.getElementById("modalChapter");
    const backdrop = document.querySelector(".modal-backdrop");

    const poems = {
        "Maa... Unspoken Words": `
Tumne kabhi ye soch kar khana nahi banaya
ki aaj tumhara kya khane ka mann hai.
Tumne hamesha bas itna poocha,
"Tum sab kya khaoge?"
Aur phir sabki pasand ki thaali saj gayi,
bas tumhari pasand har baar peeche reh gayi.
Tum bimar bhi hoti thi,
phir bhi hamare liye sabse pehle uth jaati thi.
Tumhe bhi bukhaar aata hoga,
tumhe bhi dard hota hoga,
har mahine woh takleef bhi hoti hogi...
Lekin tumne kabhi humein
apni takleef ka ehsaas tak nahi hone diya.
Hamari har zid,
har chhoti si khwahish,
har sapna...
Na jaane kitni baar
tumne apni khwahishon se pehle rakha.
Aur hum...
shayad kabhi yeh pooch hi nahi paaye,
"Maa, tumhara mann kis cheez ka hai?"
Ab meri baari hai, Maa.
m zid karna.
Jo khana ho,
woh banega.
Jo pehenna ho,
woh pehenna.
Jahan ghoomne ka mann ho,
wahan chalenge.
Jo kitab padhni ho,
jo geet sunna ho,
jo cheez kharidni ho...
Bas keh dena.
Aur ek baat...
Yeh mat sochna
ki ghar ka har kaam sirf tumhari zimmedari hai.
Ab tum tabhi kaam karna
jab tumhara mann kare.
Baaki sab...
hum sambhal lenge.
Aur haan...
Bachpan mein
jo sapne zimmedariyon ke neeche kahin dab gaye the,
Aaj unki dhool hatao.
Ek-ek karke mujhe batana.
Is baar sapne tumhare honge...
Aur unhe poora karna,
meri zid hogi.
Kyuki bachpan se aaj tak
tumne sirf hamari zindagi sanwaari hai.
Ab zara si zindagi...
sirf apne liye bhi jee lena, Maa
`,

        "The Little Things About Being in Love": `
Teri bahon me theher kr, waqt se gila krna h
teri ankhon mein utar kr, khud ko bhula dena h
Na waadon ki jarurat, na lafzon ka koi iqrar
bs yunhi umr bhr tere qareeb reh kr, tujhse ishq beshumar krna h

`,

        "Political Thoughts": `
Takht farman likh sakte h
Takdeer nhi
Farmano ke raste bdle ja sakte h
Irade nhi
Diware unchi ki ja sakti h
Magar aasman pr pehre nhi baithaye ja sakte
Aawaj ko kuch der dabaya ja sakta h
Magar khamosi ki bhi ek umr hoti h
Jb sadiyo ka sbr
Apne hd se gujar jata h
Toh ek chingari bhi
Karwan bn jati h
Phir log nhi chlte wakt chl pdta h
Aur jb wakt chl pdta h
Toh takhton ko unchai se nhi dekhta
Sirf neev ki sanchai se dekhta h

Yaad rakhna...
Tumhari takat ka hisab
Tumhare hathiyaar nhi karenge
Tumhare samne khadi janta karegi
Kyonki desh
Mehlo se nhi
Un hatho se bnta h
Joh use hr roj apne paseene se sinchte h

Tum shyd bhul gye the...
Kursiya Waqt ki amanat hoti h
Desh hamesha logo ka rehta h
`,

        "Unconfessed Love, Unanswered Questions": `
Mujhe kyu ho bair tumse,
Jb koi bair tha hi nhi
Kuch sawal the, kuch jawab mile,
Bs baat itni si thi
N koi jang thi, n koi shikwa,
N koi jeet, n koi haar
Kuch lafjo ka silsila tha bs,
Aur khtm ho gyi baat
`
    };

    // OPEN POEM MODAL
    document.querySelectorAll(".poem-card").forEach(card => {
        card.addEventListener("click", function (event) {
            event.preventDefault();

            const title = this.dataset.title;

            if (!title) {
                console.error("Missing data-title:", this);
                return;
            }

            modalTitle.textContent = title;
            modalPoem.textContent = poems[title] || "Poem coming soon.";

            if (modalChapter) {
                modalChapter.textContent = "";
            }

            const modalLabel = document.querySelector(".modal-top span:first-child");

            if (modalLabel) {
                modalLabel.textContent = "SELECTED POETRY";
            }

            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    // CLOSE MODAL
    function closePoetryModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    closeButton.addEventListener("click", closePoetryModal);

    if (backdrop) {
        backdrop.addEventListener("click", closePoetryModal);
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.classList.contains("active")) {
            closePoetryModal();
        }
    });
})();