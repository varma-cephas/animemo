const darkMoonIcon = document.querySelector(".darkmode-icon");
const lightMoonIcon = document.querySelector(".lightmode-icon");
const darkModeButton = document.querySelector(".darkmode-button");
const lightModeButton = document.querySelector(".lightmode-button");
const logo = document.querySelector(".logo");
const body = document.body;


darkModeButton.addEventListener("click", ()=>{
    body.classList.toggle("toggleDarkMode");
    body.classList.toggle("darkModetoggleTransition")
    lightMoonIcon.classList.toggle("toggleLightModeIcon");
    darkMoonIcon.classList.toggle("toggleDarkModeIcon");
    darkModeButton.classList.toggle("toggleDarkModeButton");
    lightModeButton.classList.toggle("toggleLightModeButton");
    logo.classList.toggle("toggleLogoColor");

    localStorage.setItem("darkMode", "true")
})

lightModeButton.addEventListener("click", ()=>{
    body.classList.toggle("toggleDarkMode");
    body.classList.toggle("darkModetoggleTransition")
    lightMoonIcon.classList.toggle("toggleLightModeIcon");
    darkMoonIcon.classList.toggle("toggleDarkModeIcon");
    darkModeButton.classList.toggle("toggleDarkModeButton");
    lightModeButton.classList.toggle("toggleLightModeButton");
    logo.classList.toggle("toggleLogoColor");

    localStorage.setItem("darkMode", "false")
})

darkMoonIcon.addEventListener("click", ()=>{
    body.classList.toggle("toggleDarkMode");
    body.classList.toggle("darkModetoggleTransition")
    lightMoonIcon.classList.toggle("toggleLightModeIcon");
    darkMoonIcon.classList.toggle("toggleDarkModeIcon");
    darkModeButton.classList.toggle("toggleDarkModeButton");
    lightModeButton.classList.toggle("toggleLightModeButton");
    logo.classList.toggle("toggleLogoColor");
})

lightMoonIcon.addEventListener("click", ()=>{
    body.classList.toggle("toggleDarkMode");
    body.classList.toggle("darkModetoggleTransition")
    lightMoonIcon.classList.toggle("toggleLightModeIcon");
    darkMoonIcon.classList.toggle("toggleDarkModeIcon");
    darkModeButton.classList.toggle("toggleDarkModeButton");
    lightModeButton.classList.toggle("toggleLightModeButton");
    logo.classList.toggle("toggleLogoColor");
})

export{darkModeButton, lightModeButton, darkMoonIcon, lightMoonIcon, logo};



