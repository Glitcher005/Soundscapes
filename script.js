window.addEventListener("DOMContentLoaded" , function() {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-image");
    var bannerHeader = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    // set the images default
    banner.style.backgroundImage = "url(images/banner.png)";
    bannerImage.setAttribute("src", "images/image.png");
    bannerHeader.textContent= "Vibes in Motion";
    bannerText.textContent= "Pop Fusion Grooves and Moves";
})

function playAll(songNumber) {
    var audioElement = document.getElementById("song");
    var playBtn = document.getElementById("play-pause");
    var songFileName = "music/" + songNumber + ".mp3";
    var currentRow = document.getElementById("song" + songNumber);
    var banner = document.querySelector("banner");
    var bannerImage = document.querySelector("banner .left-image");
    var bannerHeader = document.querySelector("banner .heading h1");
    var bannerText = document.querySelector("banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused) {
        audioElement.pause()
        playBtn.innerHTML = "<img src='images/play-button.png'>";

        banner.style.backgroundImage = "url(images/banner.png)";
        bannerImage.setAttribute("src", "images/image.png");
        bannerHeader.textContent="Vibes in Motion";
        bannerText.textContent="Pop Fusion Grooves and Moves";
    }

    else{
        audioElement.setAttribute("src", songFileName);
        audioElement.play();
        playBtn.innerHTML="<img src='images/pause-button.png'>";

        if(songNumber === 1) {
            bannerHeader.textContent = "The Moments I'm Missing"
            bannerText.textContent = "By WHITENO1SE & Ranji Ft. Nina Nesbitt"
        }

        else if(songNumber === 2) {
            bannerHeader.textContent="Dance Monkey";
            bannerText.textContent="By Tones and I";
        }

        else if(songNumber === 3) {
            bannerHeader.textContent="Hymn for the Weekend";
            bannerText.textContent="By Coldplay";
        }

        else if(songNumber ===4) {
            bannerHeader.textContent="Levitating"
            bannerText.textContent="By Dua Lipa"
        }

        else if(songNumber ===5) {
            bannerHeader.textContent="Move Your Body";
            bannerText.textContent="By Sia";
        }

        else if(songNumber ===6) {
            bannerHeader.textContent="Blinding Lights";
            bannerText.textContent="By The Weekend";
        }

        else if(songNumber ===7) {
            bannerHeader.textContent="Let Me Love You";
            bannerText.textContent="By DJ Snake ft.Justin Bieber";
        }

        else if(songNumber ===8) {
            bannerHeader.textContent="Cheap Thrills";
            bannerText.textContent="By Sia ft.Sean Paul";
        }

        else if(songNumber ===9) {
            bannerHeader.textContent="Take it Off";
            bannerText.textContent="By Kesha";
        }

        else if(songNumber ===10) {
            bannerHeader.textContent="Waka Waka(This time for Africa)";
            bannerText.textContent="Shakira";
        }

    }

}

function playaudio() {
    var audio = document.getElementById("song");
    var playBtn = document.getElementById("play-pause");
    if(audio.paused) {
        audio.play()
        playBtn.innerHTML = "<img src='images/play-button.png'>";
    }

    else{
        audio.pause();
        playBtn.innerHTML = "<img src='images/pause-button.png'>";
    }
}
