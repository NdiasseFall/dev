$(document).ready(function () {
    $(".cardProjet").click(function () {
        $(".cardProjet").addClass("ajout");
        $(".myProjet").fadeIn(3000);
        cardDetails1.style.display = "block";
        cardDetails2.style.display = "none";
        cardDetails3.style.display = "none";
        $(".cardStack").removeClass("ajout");
        $(".cardOutil").removeClass("ajout");
    });
});
$(document).ready(function () {
    $(".cardStack").click(function () {
        $(".cardStack").addClass("ajout");
        $(".myStack").fadeIn(3000);
        cardDetails2.style.display = "block";
        cardDetails1.style.display = "none";
        cardDetails3.style.display = "none";
        $(".cardOutil").removeClass("ajout");
        $(".cardProjet").removeClass("ajout");
    });
});
$(document).ready(function () {
    $(".cardOutil").click(function () {
        $(".cardOutil").addClass("ajout");
        $(".myOutil").fadeIn(3000);
        cardDetails3.style.display = "block";
        cardDetails1.style.display = "none";
        cardDetails2.style.display = "none";
        $(".cardStack").removeClass("ajout");
        $(".cardProjet").removeClass("ajout");
    });
});

const btnProjts = document.querySelector(".cardProjet");
const btnStack = document.querySelector(".cardStack");
const btnOutil = document.querySelector(".cardOutil");

const cardDetails1 = document.querySelector(".myProjet");
const cardDetails2 = document.querySelector(".myStack");
const cardDetails3 = document.querySelector(".myOutil");

// gestion du boutton burger

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

// gestion des Animation

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
