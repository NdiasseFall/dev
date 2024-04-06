const bar = document.querySelector(".bx-menu");
const cross = document.querySelector(".bx-x");
const header = document.querySelector(".header");

bar.addEventListener("click", function () {
    setTimeout(() => {
        cross.style.display = "block";
    }, 200);
    header.style.display = "block";
    bar.style.display = "none";
});

cross.onclick = () => {
    cross.style.display = "none";
    header.style.display = "none";
    bar.style.display = "block";
};

const sr = ScrollReveal({
    distance: "40px",
    duration: 2500,
    reset: true,
});

sr.reveal("header .logo", { delay: 200, origin: "left" });
sr.reveal(".navbar", { delay: 400, origin: "top" });
sr.reveal(".menu-btn", { delay: 520, origin: "right" });

sr.reveal(".home-text span", { delay: 600, origin: "top" });
sr.reveal(".home-text h1", { delay: 680, origin: "left" });
sr.reveal(".home-text p", { delay: 750, origin: "right" });
sr.reveal(".main-btn", { delay: 860, origin: "left" });
sr.reveal(".home-img", { delay: 1000, origin: "right" });
