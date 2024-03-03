const bar = document.querySelector(".bx-menu");
const cross = document.querySelector(".bx-x");
const header = document.querySelector(".header");
const img = document.querySelector(".home-img");

bar.addEventListener("click", function () {
  setTimeout(() => {
    cross.style.display = "block";
  }, 200);
  header.style.right = "0%";
  bar.style.display = "none";
  img.style.marginTop = "300px";
});

cross.onclick = () => {
  cross.style.display = "none";
  header.style.right = "-100%";
  bar.style.display = "block";
  img.style.marginTop = "auto";
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
// sr.reveal(".share", { delay: 950, origin: "bottom" });
sr.reveal(".home-img", { delay: 1000, origin: "right" });
