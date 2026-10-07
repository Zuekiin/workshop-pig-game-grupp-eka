// =============================================
// Grisspelet
// =============================================


// ---------- 1. Speldata ----------

const WINNING_SCORE = 100; // Poäng som krävs för att vinna

let scores = [0, 0];       // Totalpoäng: scores[0] = Spelare 1, scores[1] = Spelare 2
let roundScore = 0;        // Omgångspoäng för den aktiva spelaren
let activePlayer = 0;      // 0 = Spelare 1, 1 = Spelare 2
let isPlaying = true;      // Blir false när någon har vunnit


// ---------- 2. Element i DOM:en ----------

const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

const dice1 = document.querySelector('#dice-1');
const dice2 = document.querySelector('#dice-2');          // EXTRA-3
const finalScoreInput = document.querySelector('.final-score'); // EXTRA-2


// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel
function init() {

}

// SPEL-2: Körs när man klickar på "Slå tärning"
function rollDice() {

}

// SPEL-4 och SPEL-5: Körs när man klickar på "Håll poäng"
function holdScore() {

}

// SPEL-3: Byter till den andra spelaren
function switchPlayer() {

}


// ---------- 4. Händelser ----------

btnNew.addEventListener('click', init);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);

init();
