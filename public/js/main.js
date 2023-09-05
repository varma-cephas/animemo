const timer = document.querySelector("#timer");
const startButton = document.querySelector("#start-button-container");
const stopButton = document.querySelector("#stop-button-container");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const divideTimer = document.querySelector("#divideTimer");
const watch = document.querySelector("#watch");
const playPauseIcon = document.querySelector(".play_pause_icon")
const timerDoneAudio = document.querySelector("#timer-done-audio");
let secondsInAMinute = 59;
const sessionCount = document.querySelector("#sessionCount");
localStorage.setItem("numberOfSessions", localStorage.getItem("sessionCount"));
let numberOfSessions;
localStorage.getItem("sessionCount") === null ? numberOfSessions = 2 : numberOfSessions = localStorage.getItem("numberOfSessions");

startButton.addEventListener("click",()=>{
    setTimeout(()=>{
        startButton.style.display = "none"
        stopButton.style.display = "flex"
    },2000)
    startButton.classList.add("disableButton");
    watch.classList.add("disableButton");
    setTimeout(()=>{
        playPauseIcon.setAttribute("src", "assets/icons/lock-closed.svg")
    }, 1000)

    setTimeout(()=>{
    minutes.textContent -= 1;
    },1000)

    const timerInterval = setInterval(()=>{
        seconds.textContent = secondsInAMinute;

        if(minutes.textContent === '0' && seconds.textContent === '1'){
            timerDoneAudio.setAttribute("src", "assets/audio/riff.wav");
            clearInterval(timerInterval);
            secondsInAMinute = 59;
            minutes.textContent = '55';
            seconds.textContent = '00';
            startButton.classList.remove("disableButton");
            watch.classList.remove("disableButton");
            minutes.style.display = "inline";
            divideTimer.style.display = "inline";
            localStorage.setItem("sessionCount", numberOfSessions++);
            sessionCount.textContent = localStorage.getItem("sessionCount");
            playPauseIcon.setAttribute("src", "assets/icons/play_white.svg");
            setTimeout(()=>{
            stopButton.style.display = "none";
            startButton.style.display = "flex";
            },1000)
        }
        else if(secondsInAMinute > 1){
            secondsInAMinute--;
        }
        else{
            setTimeout(()=>{
                minutes.textContent -= 1;
            },1000)
            secondsInAMinute = 59;
        }

        if(minutes.textContent === '0'){
            minutes.style.display = "none";
            divideTimer.style.display = "none";
        }
    },1000)

    stopButton.addEventListener("click",()=>{
        setTimeout(()=>{
            stopButton.style.display = "none";
            startButton.style.display = "flex";
        },1000)
        watch.classList.remove("disableButton");
        startButton.classList.remove("disableButton");
        clearInterval(timerInterval)
        playPauseIcon.setAttribute("src", "assets/icons/play_white.svg");
        secondsInAMinute = 59
        minutes.textContent = '55'
        seconds.textContent = '00'
        startButton.classList.remove("disableButton");
    })
    
})

sessionCount.textContent = localStorage.getItem("sessionCount");


