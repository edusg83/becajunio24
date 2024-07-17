document.addEventListener('DOMContentLoaded', () => {
    const cardImages = [
        'img/1.png', 'img/2.png', 'img/3.png', 'img/4.png',
        'img/5.png', 'img/6.png', 'img/7.png', 'img/8.png'
    ];
    let cards = [];
    let gameStarted = false;

    const gameBoard = document.getElementById('game-board');
    const score1Elem = document.getElementById('score1');
    const score2Elem = document.getElementById('score2');
    const startButton = document.getElementById('start');
    const resetButton = document.getElementById('reset');
    const resultDiv = document.getElementById('result');
    const currentPlayerElem = document.getElementById('current-player'); 
    
    let flippedCards = [];
    let scores = [0, 0];
    let currentPlayer = 0;

    function createBoard() {
        gameBoard.innerHTML = '';
        cards.forEach((image, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.image = image;
            card.dataset.index = index;
            
            const img = document.createElement('img');
            img.src = image;
            img.style.display = 'none';  
            card.appendChild(img);

            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
        });
    }

    function flipCard() {
        if (flippedCards.length === 2 || this.classList.contains('flipped') || !gameStarted) return;

        this.classList.add('flipped');
        this.querySelector('img').style.display = 'block';  
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;
        if (card1.dataset.image === card2.dataset.image) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            scores[currentPlayer]++;
            updateScores();
            
        } else {
           
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.querySelector('img').style.display = 'none';  
            card2.querySelector('img').style.display = 'none';  
            currentPlayer = (currentPlayer + 1) % 2;
            updateCurrentPlayer(); 
        }
        flippedCards = [];
        checkEndGame();  
    }

    function updateScores() {
        score1Elem.textContent = scores[0];
        score2Elem.textContent = scores[1];
    }

    function updateCurrentPlayer() {
        currentPlayerElem.textContent = currentPlayer === 0 ? 'Jugador 1' : 'Jugador 2';
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function startGame() {
        cards = shuffle([...cardImages, ...cardImages]); 
        createBoard();
        resetButton.style.display = 'inline-block';  
        startButton.style.display = 'none'; 
        gameStarted = true;
        resultDiv.style.display = 'none'; 
        updateCurrentPlayer(); 
    }

    function resetGame() {
        if (gameStarted) {
            cards = shuffle([...cardImages, ...cardImages]); 
            scores = [0, 0];
            currentPlayer = 0;
            flippedCards = [];
            createBoard();
            updateScores();
            resultDiv.style.display = 'none'; 
            updateCurrentPlayer(); 
        }
    }

    function checkEndGame() {
        const totalPairs = cardImages.length; 
        const matchedPairs = document.querySelectorAll('.card.matched').length / 2;

        if (matchedPairs === totalPairs) {
            gameStarted = false;
            const winner = scores[0] > scores[1] ? 'Jugador 1' :
                           scores[1] > scores[0] ? 'Jugador 2' :
                           null; 
            if (winner) {
                resultDiv.textContent = `¡Fin del juego! ${winner} ha ganado con ${Math.max(...scores)} puntos.`;
            } else {
                resultDiv.textContent = `¡Fin del juego! Es un empate con ambos jugadores teniendo ${scores[0]} puntos.`;
            }
            resultDiv.style.display = 'block'; 
            resetButton.style.display = 'none'; 
            startButton.style.display = 'inline'; 
        }
    }

    startButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', resetGame);
});
