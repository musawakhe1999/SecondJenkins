const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;

let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;
let gameStarted = false;

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    document.querySelector(".timer").textContent = formattedTime;


       // Check if the time limit (1 minute) has been reached
       if (minutes >= 1) {
        clearInterval(timerInterval); // Stop the timer
        endGame();
    }
}



function restartGame() {
    location.reload();

    // Hide both modals
    document.getElementById('gameOverModal').style.display = 'none';
    document.getElementById('youWinModal').style.display = 'none';
}






function endGame() {
    // Display the Game Over modal
    document.getElementById('gameOverModal').style.display = 'block';

    // Disable further interactions by removing event listeners
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.removeEventListener("click", handleTileClick);
    });
}


function youWin() {
    // Display the You Win modal
    document.getElementById('youWinModal').style.display = 'block';

    // Display the winning time
    document.getElementById('winTime').textContent = document.querySelector(".timer").textContent;

    // Disable further interactions by removing event listeners
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.removeEventListener("click", handleTileClick);
    });
}


function pad(number) {
    return number < 10 ? "0" + number : number;
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function buildTile(color) {
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false");

    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed");

        if (
            awaitingEndOfMove
            || revealed === "true"
            || element == activeTile
        ) {
            return;
        }

        // Reveal this color
        element.style.backgroundColor = color;

        if (!activeTile) {
            activeTile = element;

            // Start the timer when the first tile is clicked
            if (!gameStarted) {
                startTimer();
                gameStarted = true;
            }

            return;
        }

        const colorToMatch = activeTile.getAttribute("data-color");

        if (colorToMatch === color) {
            element.setAttribute("data-revealed", "true");
            activeTile.setAttribute("data-revealed", "true");

            activeTile = null;
            awaitingEndOfMove = false;
            revealedCount += 2;

            if (revealedCount === tileCount) {
                clearInterval(timerInterval); // Stop the timer
                youWin();
            }

            return;
        }

        awaitingEndOfMove = true;

        setTimeout(() => {
            activeTile.style.backgroundColor = null;
            element.style.backgroundColor = null;

            awaitingEndOfMove = false;
            activeTile = null;
        }, 1000);
    });

    return element;
}

// Build up tiles
for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
    const color = colorsPicklist[randomIndex];
    const tile = buildTile(color);

    colorsPicklist.splice(randomIndex, 1);
    tilesContainer.appendChild(tile);
}


