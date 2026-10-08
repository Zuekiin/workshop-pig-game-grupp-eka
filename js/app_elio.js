// =============================================
// Grisspelet
// =============================================

// ---------- 1. Speldata ----------

const WINNING_SCORE = 100; // Poäng som krävs för att vinna

let scores = [0, 0]; // Totalpoäng: scores[0] = Spelare 1, scores[1] = Spelare 2
let roundScore = 0; // Omgångspoäng för den aktiva spelaren
let activePlayer = 0; // 0 = Spelare 1, 1 = Spelare 2
let isPlaying = true; // Blir false när någon har vunnit

// ---------- 2. Element i DOM:en ----------
let elDiceOne = document.querySelector("#dice-1");
let elDiceTwo = document.querySelector("#dice-2");
let elRollDice = document.querySelector(".btn-roll");

let elPlayer0 = document.querySelector(".player-0-panel");
let elPlayer1 = document.querySelector(".player-1-panel");

let elCurrent0 = document.querySelector("#current-0");
let elCurrent1 = document.querySelector("#current-1");

// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel
function init() {}

// SPEL-2: Körs när man klickar på "Slå tärning"

elRollDice.onclick = function () {
  rollDice();
  console.log("I clicked button");
};

function rollDice() {
  let diceOne = Math.floor(Math.random() * 6 + 1);
  let diceTwo = Math.floor(Math.random() * 6 + 1);

  elDiceOne.src = "img/dice-" + diceOne + ".png";
  elDiceTwo.src = "img/dice-" + diceTwo + ".png";

  if (diceOne === 1 || diceTwo === 1) {
    roundScore = 0;
    switchPlayer();
  } else {
    roundScore += diceOne + diceTwo;

    if (activePlayer === 0) {
      elCurrent0.textContent = roundScore;
    } else {
      elCurrent1.textContent = roundScore;
    }
  }
}

// SPEL-3 och SPEL-4: Körs när man klickar på "Håll poäng"
function holdScore() {}

// SPEL-2: Byter till den andra spelaren
function switchPlayer() {
  console.log("PLAYER SWITCH");

  document.querySelector(`#current-${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  elPlayer0.classList.remove("active");
  elPlayer1.classList.remove("active");

  if (activePlayer === 0) {
    elPlayer0.classList.add("active");
  } else {
    elPlayer1.classList.add("active");
  }
}

// ---------- 4. Händelser ----------

init();
