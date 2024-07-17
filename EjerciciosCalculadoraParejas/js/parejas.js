let gameContainer = document.getElementById("game-container");
let player1ScoreElem = document.getElementById("player1-score");
let player2ScoreElem = document.getElementById("player2-score");
let currentPlayerElem = document.getElementById("current-player");
let player1MatchedImages = document.getElementById("player1-matched-images");
let player2MatchedImages = document.getElementById("player2-matched-images");

let cardImages  = [
    'img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png',
    'img/6.png', 'img/7.png', 'img/8.png', 'img/9.png', 'img/10.png',
    'img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png',
    'img/6.png', 'img/7.png', 'img/8.png', 'img/9.png', 'img/10.png'
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
let matchedPairs = 0;
let player1Name = "Jugador 1";
let player2Name = "Jugador 2";

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createCard(imageSrc) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front"></div>
            <div class="card-back">
                <img src="${imageSrc}" alt="Image">
            </div>
        </div>
    `;
    card.addEventListener("click", flipCard);
    return card;
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.querySelector(".card-back img").src === secondCard.querySelector(".card-back img").src;

    isMatch ? handleMatch() : unflipCards();
}

function handleMatch() {
    setTimeout(() => {
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';
    }, 500);

    let matchedImageSrc = firstCard.querySelector(".card-back img").src;
    displayMatchedImage(matchedImageSrc);

    updateScore();
    resetBoard();

    matchedPairs++;
    if (matchedPairs === cardImages.length / 2) {
        endGame();
    }
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        switchPlayer();
        resetBoard();
    }, 1500);
}

function displayMatchedImage(src) {
    let img = document.createElement("img");
    img.src = src;
    img.classList.add("matched-image");

    if (currentPlayer === 1) {
        player1MatchedImages.appendChild(img);
    } else {
        player2MatchedImages.appendChild(img);
    }
}

function updateScore() {
    if (currentPlayer === 1) {
        player1Score++;
        player1ScoreElem.textContent = player1Score;
    } else {
        player2Score++;
        player2ScoreElem.textContent = player2Score;
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    currentPlayerElem.textContent = `Turno de: ${currentPlayer === 1 ? player1Name : player2Name}`;
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function endGame() {
    setTimeout(() => {
        alert(`Juego terminado. ${player1Name}: ${player1Score} puntos, ${player2Name}: ${player2Score} puntos.`);
    }, 500);
}

function initGame() {
    // Solicitar nombres de los jugadores
    player1Name = prompt("Introduce el nombre del Jugador 1:", "Jugador 1");
    player2Name = prompt("Introduce el nombre del Jugador 2:", "Jugador 2");

    gameContainer.innerHTML = '';
    player1Score = 0;
    player2Score = 0;
    matchedPairs = 0;
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    currentPlayer = 1;
    player1ScoreElem.textContent = '0';
    player2ScoreElem.textContent = '0';
    currentPlayerElem.textContent = `Turno de: ${player1Name}`;
    player1MatchedImages.innerHTML = '';
    player2MatchedImages.innerHTML = '';
    
    let shuffledImages = shuffle(cardImages);
    shuffledImages.forEach(imageSrc => {
        let card = createCard(imageSrc);
        gameContainer.appendChild(card);
    });
}

document.getElementById('new-game').addEventListener('click', initGame);

initGame();
