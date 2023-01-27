let opennav = document.querySelector('.chick');
let navbar = document.querySelector("header");
let closes = document.querySelector(".close");
opennav.addEventListener("click", function () {
    navbar.classList.add("open")
});
closes.addEventListener("click",function () {
    navbar.classList.remove("open")
})