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

const score0 = document.querySelector("#score-0");
const score1 = document.querySelector("#score-1");

const current0 = document.querySelector("#current-0");
const current1 = document.querySelector("#current-1");

const name0 = document.querySelector("#name-0");
const name1 = document.querySelector("#name-1");

const player0 = document.querySelector(".player-0-panel");
const player1 = document.querySelector(".player-1-panel");

const dice = document.querySelector("#dice-1");

const btnNew = document.querySelector(".btn-new");

// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel

function init() {
  // Återställ spelets data
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  isPlaying = true;

  // Nollställ poängen
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  // Återställ namnen
  name0.textContent = "Spelare 1";
  name1.textContent = "Spelare 2";

  // Återställ aktiv spelare
  player0.classList.add("active");
  player1.classList.remove("active");

  // Ta bort vinnarstatus
  player0.classList.remove("winner");
  player1.classList.remove("winner");

  // Dölj båda tärningarna
  document.querySelector("#dice-1").style.visibility = "hidden";
  document.querySelector("#dice-2").style.visibility = "hidden";
}

// SPEL-2: Körs när man klickar på "Slå tärning"
function rollDice() {}

// SPEL-3 och SPEL-4: Körs när man klickar på "Håll poäng"
function holdScore() {}

// SPEL-2: Byter till den andra spelaren
function switchPlayer() {}

// ---------- 4. Händelser ----------

btnNew.addEventListener("click", init);

init();
