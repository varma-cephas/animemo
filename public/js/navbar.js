const hamburgerButton = document.querySelector(".hamburger-button");
const mobileNav = document.querySelector("nav ul");

hamburgerButton.addEventListener("click", ()=>{
    mobileNav.classList.toggle("displayMobileNav")
})