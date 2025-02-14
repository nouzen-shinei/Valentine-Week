function playMusic() {
    const noImage = document.getElementById('noImage');
    if (noImage.style.display === 'none') {
        const musicAudio = document.getElementById('musicAudio');
        musicAudio.play();
    }
}

document.addEventListener('mousemove', playMusic);

function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const minDistance = 100;
    const safeMargin = 5; // Safe margin from all sides

    // Get viewport dimensions and button dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const btnWidth = noButton.offsetWidth;
    const btnHeight = noButton.offsetHeight;

    let randomX, randomY;
    let attempts = 0;
    const maxAttempts = 100; // Prevent infinite loop

    // Generate positions ensuring the button stays within [safeMargin, viewport - btn size - safeMargin]
    do {
        randomX = safeMargin + Math.floor(Math.random() * (viewportWidth - btnWidth - 2 * safeMargin));
        randomY = safeMargin + Math.floor(Math.random() * (viewportHeight - btnHeight - 2 * safeMargin));
        attempts++;
    } while (yesButton && isTooClose(randomX, randomY, yesButton, minDistance) && attempts < maxAttempts);

    // Ensure the button stays within the viewport
    randomX = Math.max(safeMargin, Math.min(randomX, viewportWidth - btnWidth - safeMargin));
    randomY = Math.max(safeMargin, Math.min(randomY, viewportHeight - btnHeight - safeMargin));

    // Position the button relative to the viewport
    noButton.style.position = 'fixed';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Replace the lottie-player with the no.png image
    const lottiePlayer = document.querySelector('#parentElement lottie-player');
    if (lottiePlayer) {
        const noImgElem = document.createElement('img');
        noImgElem.src = "assets/images/no.png";
        noImgElem.alt = "No!";
        // Set fixed width and height values
        noImgElem.style.width = "400px";
        noImgElem.style.height = "300px";
        lottiePlayer.parentNode.replaceChild(noImgElem, lottiePlayer);
    }

    // Other actions: hiding or showing additional elements & playing audio

    const noImage = document.getElementById('noImage');
    if (noImage) {
        noImage.style.display = 'inline-block';
    }

    const musicAudio = document.getElementById('musicAudio');
    if (musicAudio) {
        musicAudio.pause();
    }

    const noAudio = document.getElementById('noAudio');
    if (noAudio) {
        noAudio.currentTime = 0;
        noAudio.play().catch(error =>
            console.error("Audio playback failed:", error)
        );
    }
}

function isTooClose(x, y, element, minDistance) {
    const rectNo = element.getBoundingClientRect();
    const rectNew = { x, y, width: 100, height: 20 };

    return (
        rectNew.x < rectNo.x + rectNo.width + minDistance &&
        rectNew.x + rectNew.width > rectNo.x - minDistance &&
        rectNew.y < rectNo.y + rectNo.height + minDistance &&
        rectNew.y + rectNew.height > rectNo.y - minDistance
    );
}

// Add event listeners to move the button on hover or click
const noButton = document.getElementById('noButton');
noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton);

// No revert logic needed, so the image stays replaced

const parentElement = document.getElementById("parentElement");
const showMessage = document.getElementById("showMessage");
const changeColor = document.body.style;

const propose = () => {
    parentElement.style.display = "none";
    showMessage.style.display = "block";
    changeColor.background = "linear-gradient(116.82deg, #ff94e7 0%, #27cbff 100%)";

    const yesAudio = document.getElementById('yesAudio');
    if (yesAudio) {
        yesAudio.currentTime = 0;
        yesAudio.play().catch(error => console.error("Glitter audio playback failed:", error));
    }

    // Play hata.mp3 concurrently
    const hataAudio = new Audio("assets/sounds/hata.mp3");
    hataAudio.play().catch(error => console.error("Hata audio playback failed:", error));
};

// Animate Text with Anim JS
var textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: ".ml6 .letter",
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i,
    })
    .add({
        targets: ".ml6",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
    });
    document.addEventListener('DOMContentLoaded', function () {
        // Send a message to the parent window to stop the music (fallback)
        if (window.parent) {
            window.parent.postMessage('stopMusic', '*');
            console.log("Stop music message sent to parent (fallback).");
        }
    });
    