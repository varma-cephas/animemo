const video = document.querySelector(".video");
const currentlyWatching = document.querySelector(".currentAnimeTitle");
const continue_work = document.querySelector("#continue_work");

const episode1 = document.querySelector("#episode1");
const episode2 = document.querySelector("#episode2");
const episode3 = document.querySelector("#episode3");
const episode4 = document.querySelector("#episode4");
const episode5 = document.querySelector("#episode5");
const episode6 = document.querySelector("#episode6");
const episode7 = document.querySelector("#episode7");
const episode8 = document.querySelector("#episode8");
const episode9 = document.querySelector("#episode9");
const episode10 = document.querySelector("#episode10");
const episode11 = document.querySelector("#episode11");
const episode12 = document.querySelector("#episode12");
const episode13 = document.querySelector("#episode13");
const episode14 = document.querySelector("#episode14");
const episode15 = document.querySelector("#episode15");
const episode16 = document.querySelector("#episode16");
const episode17 = document.querySelector("#episode17");
const episode18 = document.querySelector("#episode18");
const episode19 = document.querySelector("#episode19");
const episode20 = document.querySelector("#episode20");
const episode21 = document.querySelector("#episode21");
const episode22 = document.querySelector("#episode22");
const episode23 = document.querySelector("#episode23");

let animeTitles = ["ousama_ranking", "tengoku_daimakyou", "odd_taxi", "kimetsu_no_yaiba", "vinland_saga", "beastars", "soul_eater", "carla_tuesday"];
let ousamaRankingState = localStorage.getItem("ousamaRankingState");
let oddTaxiState = localStorage.getItem("oddTaxiState");
let tengokuDaimakyouState = localStorage.getItem("tengokuDaimakyouState");
let kimetsuNoYaibaState = localStorage.getItem("kimetsuNoYaibaState");
let vinlandSagaState = localStorage.getItem("vinlandSagaState");
let beastarsState = localStorage.getItem("beastarsState");
let soulEaterState = localStorage.getItem("soulEaterState");
let caroleTuesdayState = localStorage.getItem("caroleTuesdayState");

let episodes = ["ep1.mp4", "ep2.mp4", "ep3.mp4", "ep4.mp4", "ep5.mp4", "ep6.mp4",
                "ep7.mp4", "ep8.mp4", "ep9.mp4", "ep10.mp4", "ep11.mp4", "ep12.mp4",
                "ep13.mp4", "ep14.mp4", "ep15.mp4","ep16.mp4", "ep17.mp4", "ep18.mp4", 
                "ep19.mp4", "ep20.mp4", "ep21.mp4", "ep22.mp4", "ep23.mp4"];

let episodeButtonArr = [episode1,episode2,episode3,episode3,episode4,episode5,episode6,episode7,episode8,episode9,
                        episode10,episode11,episode12,episode13,episode14,episode15,episode16,episode17,episode18,episode19,
                        episode20,episode21,episode22,episode23]

const getEpisode = (episode)=>{
    return episode.textContent;
}
const showEpisodeButton = (episode) =>{
    episode.style.display = "block";
}

if(ousamaRankingState === "true"){
    video.setAttribute("src", `assets/videos/ousama_ranking/${episodes[0]}`);
    currentlyWatching.textContent = `${animeTitles[0]} episode 1`;
    episodeButtonArr[0].style.outline = "3px solid #79B473";
    
    const episodeButton = (episode)=>{
        episode.addEventListener("click", ()=>{
            for(let x in episodes){
                if(`ep${getEpisode(episode)}.mp4` === episodes[x]){
                    video.setAttribute("src", `assets/videos/ousama_ranking/${episodes[x]}`);
                    currentlyWatching.textContent = `${animeTitles[0]} episode ${getEpisode(episode)}`;
                }   
            }
        })
    }
    
    let nextEpisode = ''
    
    
    episodeButton(episode1);
    episodeButton(episode2);
    episodeButton(episode3);
    episodeButton(episode4);
    episodeButton(episode5);
    episodeButton(episode6);
    episodeButton(episode7);
    episodeButton(episode8);
    episodeButton(episode9);;
    episodeButton(episode10);
    episodeButton(episode11);
    episodeButton(episode12);
    episodeButton(episode13);
    episodeButton(episode14);
    episodeButton(episode15);
    episodeButton(episode16);
    episodeButton(episode17);
    episodeButton(episode18);
    episodeButton(episode19);
    episodeButton(episode20);
    episodeButton(episode21);
    episodeButton(episode22);
    episodeButton(episode23);


    showEpisodeButton(episode1);
    showEpisodeButton(episode2);
    showEpisodeButton(episode3);
    showEpisodeButton(episode4);
    showEpisodeButton(episode5);
    showEpisodeButton(episode6);
    showEpisodeButton(episode7);
    showEpisodeButton(episode8);
    showEpisodeButton(episode9);;
    showEpisodeButton(episode10);
    showEpisodeButton(episode11);
    showEpisodeButton(episode12);
    showEpisodeButton(episode13);
    showEpisodeButton(episode14);
    showEpisodeButton(episode15);
    showEpisodeButton(episode16);
    showEpisodeButton(episode17);
    showEpisodeButton(episode18);
    showEpisodeButton(episode19);
    showEpisodeButton(episode20);
    showEpisodeButton(episode21);
    showEpisodeButton(episode22);
    showEpisodeButton(episode23);

    //paints already watched in a different color
    for(let x in episodeButtonArr){
        episodeButtonArr[x].addEventListener("click", ()=>{
            localStorage.setItem(`watchedOusamaRanking_episode${episodeButtonArr[x].textContent}`, "true");
            episodeButtonArr[x].style.outline = "3px solid #79B473";
        })
        if(localStorage.getItem(`watchedOusamaRanking_episode${episodeButtonArr[x].textContent}`) === "true"){
            episodeButtonArr[x].style.background = "#0B5563";
            episodeButtonArr[x].style.borderColor = "#0B5563";
        }
    }
}


if(oddTaxiState  === "true"){
    video.setAttribute("src", `assets/videos/odd_taxi/${episodes[8]}`);
    currentlyWatching.textContent = `${animeTitles[2]} episode 9`;
    episodeButtonArr[9].style.outline = "3px solid #79B473";
    
    const episodeButton = (episode)=>{
        episode.addEventListener("click", ()=>{
            for(let x in episodes){
                if(`ep${getEpisode(episode)}.mp4` === episodes[x]){
                    video.setAttribute("src", `assets/videos/odd_taxi/${episodes[x]}`);
                    currentlyWatching.textContent = `${animeTitles[2]} episode ${getEpisode(episode)}`;
                }
            }
        })
    }
    episodeButton(episode1);
    episodeButton(episode2);
    episodeButton(episode3);
    episodeButton(episode4);
    episodeButton(episode5);
    episodeButton(episode6);
    episodeButton(episode7);
    episodeButton(episode8);
    episodeButton(episode9);
    episodeButton(episode10);
    episodeButton(episode11);
    episodeButton(episode12);
    episodeButton(episode13);
    episodeButton(episode14);
    episodeButton(episode15);
    episodeButton(episode16);
    episodeButton(episode17);
    episodeButton(episode18);
    episodeButton(episode19);
    episodeButton(episode20);
    episodeButton(episode21);
    episodeButton(episode22);
    episodeButton(episode23);


    showEpisodeButton(episode1);
    showEpisodeButton(episode2);
    showEpisodeButton(episode3);
    showEpisodeButton(episode4);
    showEpisodeButton(episode5);
    showEpisodeButton(episode6);
    showEpisodeButton(episode7);
    showEpisodeButton(episode8);
    showEpisodeButton(episode9);
    showEpisodeButton(episode10);
    showEpisodeButton(episode11);
    showEpisodeButton(episode12);
    showEpisodeButton(episode13);

//paints already watched in a different color
    for(let x in episodeButtonArr){
        episodeButtonArr[x].addEventListener("click", ()=>{
            localStorage.setItem(`watchedOddTaxi_episode${episodeButtonArr[x].textContent}`, "true");
            episodeButtonArr[x].style.outline = "3px solid #79B473";
        })
        if(localStorage.getItem(`watchedOddTaxi_episode${episodeButtonArr[x].textContent}`) === "true"){
            episodeButtonArr[x].style.background = "#0B5563";
            episodeButtonArr[x].style.borderColor = "#0B5563";
        }
    }
}


if(tengokuDaimakyouState  === "true"){
    video.setAttribute("src", `assets/videos/tengoku_daimakyou/${episodes[2]}`);
    currentlyWatching.textContent = `${animeTitles[1]} episode 3`;
    episodeButtonArr[3].style.outline = "3px solid #79B473";
    
    const episodeButton = (episode)=>{
        episode.addEventListener("click", ()=>{
            for(let x in episodes){
                if(`ep${getEpisode(episode)}.mp4` === episodes[x]){
                    video.setAttribute("src", `assets/videos/tengoku_daimakyou/${episodes[x]}`);
                    currentlyWatching.textContent = `${animeTitles[1]} episode ${getEpisode(episode)}`;
                }
            }
        })
    }
    episodeButton(episode1);
    episodeButton(episode2);
    episodeButton(episode3);
    episodeButton(episode4);
    episodeButton(episode5);
    episodeButton(episode6);
    episodeButton(episode7);
    episodeButton(episode8);
    episodeButton(episode9);
    episodeButton(episode10);
    episodeButton(episode11);
    episodeButton(episode12);
    episodeButton(episode13);
    episodeButton(episode14);
    episodeButton(episode15);
    episodeButton(episode16);
    episodeButton(episode17);
    episodeButton(episode18);
    episodeButton(episode19);
    episodeButton(episode20);
    episodeButton(episode21);
    episodeButton(episode22);
    episodeButton(episode23);

    showEpisodeButton(episode1);
    showEpisodeButton(episode2);
    showEpisodeButton(episode3);
    showEpisodeButton(episode4);
    showEpisodeButton(episode5);
    showEpisodeButton(episode6);
    showEpisodeButton(episode7);
    showEpisodeButton(episode8);
    showEpisodeButton(episode9);
    showEpisodeButton(episode10);
    showEpisodeButton(episode11);
    showEpisodeButton(episode12);
    showEpisodeButton(episode13);
    
    //paints already watched in a different color
    for(let x in episodeButtonArr){
        episodeButtonArr[x].addEventListener("click", ()=>{
            localStorage.setItem(`watchedTengokuDaimakyou_episode${episodeButtonArr[x].textContent}`, "true");
            episodeButtonArr[x].style.outline = "3px solid #79B473";
        })
        if(localStorage.getItem(`watchedTengokuDaimakyou_episode${episodeButtonArr[x].textContent}`) === "true"){
            episodeButtonArr[x].style.background = "#0B5563";
            episodeButtonArr[x].style.borderColor = "#0B5563";
        }
    }
}

if(kimetsuNoYaibaState  === "true"){
    video.setAttribute("src", `assets/videos/kimetsu_no_yaiba/${episodes[0]}`);
    currentlyWatching.textContent = `${animeTitles[3]} episode 1`;
    episodeButtonArr[0].style.outline = "3px solid #79B473";
    
    const episodeButton = (episode)=>{
        episode.addEventListener("click", ()=>{
            for(let x in episodes){
                if(`ep${getEpisode(episode)}.mp4` === episodes[x]){
                    video.setAttribute("src", `assets/videos/kimetsu_no_yaiba/${episodes[x]}`);
                    currentlyWatching.textContent = `${animeTitles[3]} episode ${getEpisode(episode)}`;
                }
            }
        })
    }
    episodeButton(episode1);
    episodeButton(episode2);
    episodeButton(episode3);
    episodeButton(episode4);
    episodeButton(episode5);
    episodeButton(episode6);
    episodeButton(episode7);
    episodeButton(episode8);
    episodeButton(episode9);
    episodeButton(episode10);
    episodeButton(episode11);
    episodeButton(episode12);
    episodeButton(episode13);
    episodeButton(episode14);
    episodeButton(episode15);
    episodeButton(episode16);
    episodeButton(episode17);
    episodeButton(episode18);
    episodeButton(episode19);
    episodeButton(episode20);
    episodeButton(episode21);
    episodeButton(episode22);
    episodeButton(episode23);

    showEpisodeButton(episode1);
    showEpisodeButton(episode2);
    showEpisodeButton(episode3);
    showEpisodeButton(episode4);
    showEpisodeButton(episode5);
    showEpisodeButton(episode6);
    showEpisodeButton(episode7);
    showEpisodeButton(episode8);
    showEpisodeButton(episode9);
    showEpisodeButton(episode10);
    showEpisodeButton(episode11);
    showEpisodeButton(episode12);
    showEpisodeButton(episode13);

       //paints already watched in a different color
       for(let x in episodeButtonArr){
        episodeButtonArr[x].addEventListener("click", ()=>{
            localStorage.setItem(`watchedKimetsuNoYaiba_episode${episodeButtonArr[x].textContent}`, "true");
            episodeButtonArr[x].style.outline = "3px solid #79B473";
        })
        if(localStorage.getItem(`watchedKimetsuNoYaiba_episode${episodeButtonArr[x].textContent}`) === "true"){
            episodeButtonArr[x].style.background = "#0B5563";
            episodeButtonArr[x].style.borderColor = "#0B5563";
        }
    }
}

if(vinlandSagaState === "true"){
    video.setAttribute("src", `assets/videos/vinland_saga/${episodes[0]}`);
    currentlyWatching.textContent = `${animeTitles[4]} episode 1`;
    episodeButtonArr[0].style.outline = "3px solid #79B473";
    
    const episodeButton = (episode)=>{
        episode.addEventListener("click", ()=>{
            for(let x in episodes){
                if(`ep${getEpisode(episode)}.mp4` === episodes[x]){
                    video.setAttribute("src", `assets/videos/vinland_saga/${episodes[x]}`);
                    currentlyWatching.textContent = `${animeTitles[4]} episode ${getEpisode(episode)}`;
                }
            }
        })
    }
    episodeButton(episode1);
    episodeButton(episode2);
    episodeButton(episode3);
    episodeButton(episode4);
    episodeButton(episode5);
    episodeButton(episode6);
    episodeButton(episode7);
    episodeButton(episode8);
    episodeButton(episode9);
    episodeButton(episode10);
    episodeButton(episode11);
    episodeButton(episode12);
    episodeButton(episode13);
    episodeButton(episode14);
    episodeButton(episode15);
    episodeButton(episode16);
    episodeButton(episode17);
    episodeButton(episode18);
    episodeButton(episode19);
    episodeButton(episode20);
    episodeButton(episode21);
    episodeButton(episode22);
    episodeButton(episode23);

    showEpisodeButton(episode1);
    showEpisodeButton(episode2);
    showEpisodeButton(episode3);
    showEpisodeButton(episode4);
    showEpisodeButton(episode5);
    showEpisodeButton(episode6);

    //paints already watched in a different color
    for(let x in episodeButtonArr){
    episodeButtonArr[x].addEventListener("click", ()=>{
        localStorage.setItem(`watchedVinlandSaga_episode${episodeButtonArr[x].textContent}`, "true");
        episodeButtonArr[x].style.outline = "3px solid #79B473";
    })
    if(localStorage.getItem(`watchedVinlandSaga_episode${episodeButtonArr[x].textContent}`) === "true"){
        episodeButtonArr[x].style.background = "#0B5563";
        episodeButtonArr[x].style.borderColor = "#0B5563";
        }
    }
}

if(beastarsState === "true"){
    video.setAttribute("src", `assets/videos/beastars/${episodes[0]}`);
    currentlyWatching.textContent = `${animeTitles[5]} episode 1`;
    episodeButtonArr[0].style.outline = "3px solid #79B473";
    
    const episodeButton = (episode)=>{
        episode.addEventListener("click", ()=>{
            for(let x in episodes){
                if(`ep${getEpisode(episode)}.mp4` === episodes[x]){
                    video.setAttribute("src", `assets/videos/beastars/${episodes[x]}`);
                    currentlyWatching.textContent = `${animeTitles[5]} episode ${getEpisode(episode)}`;
                }
            }
        })
    }
    episodeButton(episode1);
    episodeButton(episode2);
    episodeButton(episode3);
    episodeButton(episode4);
    episodeButton(episode5);
    episodeButton(episode6);
    episodeButton(episode7);
    episodeButton(episode8);
    episodeButton(episode9);
    episodeButton(episode10);
    episodeButton(episode11);
    episodeButton(episode12);
    episodeButton(episode13);
    episodeButton(episode14);
    episodeButton(episode15);
    episodeButton(episode16);
    episodeButton(episode17);
    episodeButton(episode18);
    episodeButton(episode19);
    episodeButton(episode20);
    episodeButton(episode21);
    episodeButton(episode22);
    episodeButton(episode23);

    showEpisodeButton(episode1);
    showEpisodeButton(episode2);
    showEpisodeButton(episode3);
    showEpisodeButton(episode4);
    showEpisodeButton(episode5);
    showEpisodeButton(episode6);
    showEpisodeButton(episode7);
    showEpisodeButton(episode8);
    showEpisodeButton(episode9);
    showEpisodeButton(episode10);
    showEpisodeButton(episode11);
    showEpisodeButton(episode12);

    //paints already watched in a different color
    for(let x in episodeButtonArr){
    episodeButtonArr[x].addEventListener("click", ()=>{
        localStorage.setItem(`watchedBeastars_episode${episodeButtonArr[x].textContent}`, "true");
        episodeButtonArr[x].style.outline = "3px solid #79B473";
    })
    if(localStorage.getItem(`watchedBeastars_episode${episodeButtonArr[x].textContent}`) === "true"){
        episodeButtonArr[x].style.background = "#0B5563";
        episodeButtonArr[x].style.borderColor = "#0B5563";
        }
    }
}

if(soulEaterState === "true"){
    video.setAttribute("src", `assets/videos/soul_eater/${episodes[0]}`);
    currentlyWatching.textContent = `${animeTitles[6]} episode 1`;
    episodeButtonArr[0].style.outline = "3px solid #79B473";
    
    const episodeButton = (episode)=>{
        episode.addEventListener("click", ()=>{
            for(let x in episodes){
                if(`ep${getEpisode(episode)}.mp4` === episodes[x]){
                    video.setAttribute("src", `assets/videos/soul_eater/${episodes[x]}`);
                    currentlyWatching.textContent = `${animeTitles[6]} episode ${getEpisode(episode)}`;
                }
            }
        })
    }
    episodeButton(episode1);
    episodeButton(episode2);
    episodeButton(episode3);
    episodeButton(episode4);
    episodeButton(episode5);
    episodeButton(episode6);
    episodeButton(episode7);
    episodeButton(episode8);
    episodeButton(episode9);
    episodeButton(episode10);
    episodeButton(episode11);
    episodeButton(episode12);
    episodeButton(episode13);
    episodeButton(episode14);
    episodeButton(episode15);
    episodeButton(episode16);
    episodeButton(episode17);
    episodeButton(episode18);
    episodeButton(episode19);
    episodeButton(episode20);
    episodeButton(episode21);
    episodeButton(episode22);
    episodeButton(episode23);

    showEpisodeButton(episode1);
    showEpisodeButton(episode2);
    showEpisodeButton(episode3);
    showEpisodeButton(episode4);
    showEpisodeButton(episode5);
    showEpisodeButton(episode6);
    showEpisodeButton(episode7);
    showEpisodeButton(episode8);
    showEpisodeButton(episode9);

    //paints already watched in a different color
    for(let x in episodeButtonArr){
        episodeButtonArr[x].addEventListener("click", ()=>{
            localStorage.setItem(`watchedSoulEater_episode${episodeButtonArr[x].textContent}`, "true");
            episodeButtonArr[x].style.outline = "3px solid #79B473";
        })
        if(localStorage.getItem(`watchedSoulEater_episode${episodeButtonArr[x].textContent}`) === "true"){
            episodeButtonArr[x].style.background = "#0B5563";
            episodeButtonArr[x].style.borderColor = "#0B5563";
            }
        }
}

if(caroleTuesdayState === "true"){
    video.setAttribute("src", `assets/videos/carla_tuesday/${episodes[0]}`);
    currentlyWatching.textContent = `${animeTitles[7]} episode 1`;
    episodeButtonArr[0].style.outline = "3px solid #79B473";
    
    const episodeButton = (episode)=>{
        episode.addEventListener("click", ()=>{
            for(let x in episodes){
                if(`ep${getEpisode(episode)}.mp4` === episodes[x]){
                    video.setAttribute("src", `assets/videos/carla_tuesday/${episodes[x]}`);
                    currentlyWatching.textContent = `${animeTitles[7]} episode ${getEpisode(episode)}`;
                }
            }
        })
    }
    episodeButton(episode1);
    episodeButton(episode2);
    episodeButton(episode3);
    episodeButton(episode4);
    episodeButton(episode5);
    episodeButton(episode6);
    episodeButton(episode7);
    episodeButton(episode8);
    episodeButton(episode9);
    episodeButton(episode10);
    episodeButton(episode11);
    episodeButton(episode12);
    episodeButton(episode13);
    episodeButton(episode14);
    episodeButton(episode15);
    episodeButton(episode16);
    episodeButton(episode17);
    episodeButton(episode18);
    episodeButton(episode19);
    episodeButton(episode20);
    episodeButton(episode21);
    episodeButton(episode22);
    episodeButton(episode23);

    showEpisodeButton(episode1);
    showEpisodeButton(episode2);
    showEpisodeButton(episode3);
    showEpisodeButton(episode4);
    showEpisodeButton(episode5);
    showEpisodeButton(episode6);
    showEpisodeButton(episode7);
    showEpisodeButton(episode8);
    showEpisodeButton(episode9);
    showEpisodeButton(episode10);
    showEpisodeButton(episode11);
    showEpisodeButton(episode12);
    showEpisodeButton(episode13);
    showEpisodeButton(episode14);
    showEpisodeButton(episode15);
    showEpisodeButton(episode16);
    showEpisodeButton(episode17);
    showEpisodeButton(episode18);
    showEpisodeButton(episode19);
    showEpisodeButton(episode20);
    showEpisodeButton(episode21);
    showEpisodeButton(episode22);
    showEpisodeButton(episode23);
    showEpisodeButton(episode24);

    //paints already watched in a different color
    for(let x in episodeButtonArr){
        episodeButtonArr[x].addEventListener("click", ()=>{
            localStorage.setItem(`watchedCarlaTuesday_episode${episodeButtonArr[x].textContent}`, "true");
            episodeButtonArr[x].style.outline = "3px solid #79B473";
        })
        if(localStorage.getItem(`watchedCarlaTuesday_episode${episodeButtonArr[x].textContent}`) === "true"){
            episodeButtonArr[x].style.background = "#0B5563";
            episodeButtonArr[x].style.borderColor = "#0B5563";
        }
    }
}

setTimeout(()=>{
    continue_work.style.display = "block"
}, 240000)


