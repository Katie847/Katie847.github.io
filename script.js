// script.js

document.addEventListener("DOMContentLoaded", function () {
    const movingGif = document.getElementById("movingGif");

    // Set initial position
    let posX = 0;
    let posY = 0;

    // Set speed and direction
    let speedX = 2;
    let speedY = 1;

    // Move the GIF
    function moveGif() {
        posX += speedX;
        posY += speedY;

        movingGif.style.left = posX + "px";
        movingGif.style.top = posY + "px";

        // Check if the GIF is out of the window bounds
        if (posX + movingGif.width > window.innerWidth || posX < 0) {
            speedX = -speedX; // Reverse direction on X-axis
        }

        if (posY + movingGif.height > window.innerHeight || posY < 0) {
            speedY = -speedY; // Reverse direction on Y-axis
        }

        requestAnimationFrame(moveGif);
    }

    moveGif();

    // Change the GIF after a certain time (e.g., 5 seconds)
    setTimeout(function () {
        movingGif.src = "https://media.giphy.com/media/GPjNIQTlCDgHe/giphy.gif";
    }, 5000);
});
