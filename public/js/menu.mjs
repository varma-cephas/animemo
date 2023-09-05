import{darkModeButton, lightModeButton, darkMoonIcon, lightMoonIcon, logo} from "/js/darkmode.mjs"

const ousamaRanking = document.querySelector("#ousama-ranking");
const oddTaxi = document.querySelector("#odd-taxi");
const tengokuDaimakyou = document.querySelector("#tengoku-daimakyou");
const kimetsuNoYaiba = document.querySelector("#kimetsu-no-yaiba");
const vinlandSaga = document.querySelector("#vinland-saga");
const beastars = document.querySelector("#beastars");
const soulEater = document.querySelector("#soul-eater");
const caroleTuesday = document.querySelector("#carole-tuesday");

if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("toggleDarkMode");
    lightMoonIcon.classList.add("toggleLightModeIcon");
    darkMoonIcon.classList.add("toggleDarkModeIcon");
    darkModeButton.classList.add("toggleDarkModeButton");
    lightModeButton.classList.add("toggleLightModeButton");
    logo.classList.add("toggleLogoColor");
}else if(localStorage.getItem("darkMode") === "false"){
    document.body.classList.remove("toggleDarkMode")
    lightMoonIcon.classList.remove("toggleLightModeIcon");
    darkMoonIcon.classList.remove("toggleDarkModeIcon");
    darkModeButton.classList.remove("toggleDarkModeButton");
    lightModeButton.classList.remove("toggleLightModeButton");
    logo.classList.remove("toggleLogoColor");
}

ousamaRanking.addEventListener("click", ()=>{
    localStorage.setItem("ousamaRankingState", true);
    localStorage.setItem("oddTaxiState", false);
    localStorage.setItem("tengokuDaimakyouState", false);
    localStorage.setItem("kimetsuNoYaibaState", false);
    localStorage.setItem("vinlandSagaState", false);
    localStorage.setItem("beastarsState", false);
    localStorage.setItem("soulEaterState", false);
    localStorage.setItem("caroleTuesdayState", false);
})

oddTaxi.addEventListener("click", ()=>{
    localStorage.setItem("oddTaxiState", true);
    localStorage.setItem("ousamaRankingState", false);
    localStorage.setItem("tengokuDaimakyouState", false);
    localStorage.setItem("kimetsuNoYaibaState", false);
    localStorage.setItem("vinlandSagaState", false);
    localStorage.setItem("beastarsState", false);
    localStorage.setItem("soulEaterState", false);
    localStorage.setItem("caroleTuesdayState", false);
})

tengokuDaimakyou.addEventListener("click", ()=>{
    localStorage.setItem("tengokuDaimakyouState", true);
    localStorage.setItem("ousamaRankingState", false);
    localStorage.setItem("oddTaxiState", false);
    localStorage.setItem("kimetsuNoYaibaState", false);
    localStorage.setItem("vinlandSagaState", false);
    localStorage.setItem("beastarsState", false);
    localStorage.setItem("soulEaterState", false);
    localStorage.setItem("caroleTuesdayState", false);
})

kimetsuNoYaiba.addEventListener("click", ()=>{
    localStorage.setItem("kimetsuNoYaibaState", true);
    localStorage.setItem("tengokuDaimakyouState", false);
    localStorage.setItem("ousamaRankingState", false);
    localStorage.setItem("oddTaxiState", false);
    localStorage.setItem("vinlandSagaState", false);
    localStorage.setItem("beastarsState", false);
    localStorage.setItem("soulEaterState", false);
    localStorage.setItem("caroleTuesdayState", false);
})

vinlandSaga.addEventListener("click", ()=>{
    localStorage.setItem("vinlandSagaState", true);
    localStorage.setItem("tengokuDaimakyouState", false);
    localStorage.setItem("ousamaRankingState", false);
    localStorage.setItem("oddTaxiState", false);
    localStorage.setItem("kimetsuNoYaibaState", false);
    localStorage.setItem("beastarsState", false);
    localStorage.setItem("soulEaterState", false);
    localStorage.setItem("caroleTuesdayState", false);
})

beastars.addEventListener("click", ()=>{
    localStorage.setItem("beastarsState", true);
    localStorage.setItem("tengokuDaimakyouState", false);
    localStorage.setItem("ousamaRankingState", false);
    localStorage.setItem("oddTaxiState", false);
    localStorage.setItem("kimetsuNoYaibaState", false);
    localStorage.setItem("vinlandSagaState", false);
    localStorage.setItem("soulEaterState", false);
    localStorage.setItem("caroleTuesdayState", false);
})

soulEater.addEventListener("click", ()=>{
    localStorage.setItem("soulEaterState", true);
    localStorage.setItem("tengokuDaimakyouState", false);
    localStorage.setItem("ousamaRankingState", false);
    localStorage.setItem("oddTaxiState", false);
    localStorage.setItem("kimetsuNoYaibaState", false);
    localStorage.setItem("vinlandSagaState", false);
    localStorage.setItem("beastarsState", false);
    localStorage.setItem("caroleTuesdayState", false);
})

caroleTuesday.addEventListener("click", ()=>{
    localStorage.setItem("caroleTuesdayState", true);
    localStorage.setItem("tengokuDaimakyouState", false);
    localStorage.setItem("ousamaRankingState", false);
    localStorage.setItem("oddTaxiState", false);
    localStorage.setItem("kimetsuNoYaibaState", false);
    localStorage.setItem("vinlandSagaState", false);
    localStorage.setItem("beastarsState", false);
    localStorage.setItem("soulEaterState", false);
})


