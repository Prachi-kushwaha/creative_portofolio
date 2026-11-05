(() => {
    const modal = document.getElementById("poetryModal");
    const closeButton = document.getElementById("closeModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalPoem = document.getElementById("modalPoem");
    const modalChapter = document.getElementById("modalChapter");
    const backdrop = document.querySelector(".modal-backdrop");

    const poems = {
        "Maa... Unspoken Words": `
Add your poem about Maa here...
`,

        "The Little Things About Being in Love": `
Add your love poem here...
`,

        "Political Thoughts": `
Add your political poem here...
`,

        "Unconfessed Love, Unanswered Questions": `
Add your poem here...
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