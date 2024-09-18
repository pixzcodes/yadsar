const openMenuBtn = document.getElementById("openMenu");
const closeMenutBtn = document.getElementById("closeMenu");
const nav = document.getElementById("nav");

openMenuBtn.addEventListener("click", function (e) {
    nav.style.width = "250px";
});

closeMenutBtn.addEventListener("click", function (e) {
    nav.style.width = "0px";
});

