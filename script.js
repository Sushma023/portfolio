/* =========================
   SCROLL ANIMATION
========================= */
const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 120);
        }
    });
});

elements.forEach(el => observer.observe(el));

/* =========================
   NAVBAR SCROLL EFFECT
========================= */
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    nav.style.background = window.scrollY > 50
        ? "rgba(0,0,0,0.9)"
        : "rgba(0,0,0,0.6)";
});

/* =========================
   SMOOTH REVEAL ON LOAD
========================= */
window.addEventListener("load", () => {
    document.querySelector(".hero-content").style.opacity = "1";
});
