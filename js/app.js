// =============================================
// Grisspelet – startfil
// Fyll i funktionerna nedan steg för steg.
// Läs README.md för spelregler och tips.
// =============================================


// ---------- 1. Speldata (state) ----------
// Allt spelet behöver komma ihåg. Ändra värdena här, och visa dem sedan i DOM:en.

const WINNING_SCORE = 100; // Poäng som krävs för att vinna

let scores = [0, 0];       // Totalpoäng: scores[0] = Spelare 1, scores[1] = Spelare 2
let roundScore = 0;        // Omgångspoäng för den aktiva spelaren
let activePlayer = 0;      // 0 = Spelare 1, 1 = Spelare 2
let isPlaying = true;      // Blir false när någon har vunnit


// ---------- 2. Element i DOM:en ----------
// Knappar
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

// Tärningar (dice2 används först i extrautmaning 3)
const dice1 = document.querySelector('#dice-1');
const dice2 = document.querySelector('#dice-2');

// Inputfältet för vinstpoäng (används i extrautmaning 2)
const finalScoreInput = document.querySelector('.final-score');

// Tips: Spelarnas element har id:n som slutar på 0 eller 1, t.ex.
// #score-0, #current-1, #name-0, .player-1-panel
// Då kan du bygga selektorn med activePlayer:
// document.querySelector(`#current-${activePlayer}`)


// ---------- 3. Funktioner ----------

// Startar ett nytt spel: nollställer all data och allt som visas
function init() {
  // TODO: Sätt tillbaka scores, roundScore, activePlayer och isPlaying till startvärdena
  // TODO: Skriv 0 i #score-0, #score-1, #current-0 och #current-1
  // TODO: Sätt tillbaka namnen till "Spelare 1" och "Spelare 2"
  // TODO: Ta bort klassen 'winner' från båda panelerna
  // TODO: Se till att bara .player-0-panel har klassen 'active'
  // TODO: Dölj tärningarna (style.display = 'none')
}

// Körs när man klickar på "Slå tärning"
function rollDice() {
  // TODO: Gör ingenting om spelet är slut (isPlaying är false)
  // TODO: Slumpa ett tal mellan 1 och 6
  // TODO: Visa tärningen och byt bild till rätt sida (img/dice-X.png)
  // TODO: Om talet INTE är 1: lägg till det i roundScore och visa det i #current-X
  // TODO: Om talet ÄR 1: byt spelare
}

// Körs när man klickar på "Håll poäng"
function holdScore() {
  // TODO: Gör ingenting om spelet är slut
  // TODO: Lägg roundScore till den aktiva spelarens totalpoäng i scores
  // TODO: Visa den nya totalpoängen i #score-X
  // TODO: Har spelaren nått WINNING_SCORE?
  //       Ja  -> skriv "Vinnare!" som namn, lägg till 'winner', ta bort 'active',
  //              dölj tärningen och sätt isPlaying till false
  //       Nej -> byt spelare
}

// Byter till den andra spelaren
function switchPlayer() {
  // TODO: Nollställ roundScore och visa 0 i den aktiva spelarens #current-X
  // TODO: Byt activePlayer från 0 till 1 eller från 1 till 0
  // TODO: Toggla klassen 'active' på båda panelerna (classList.toggle)
}


// ---------- 4. Händelser ----------
btnNew.addEventListener('click', init);
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);

// Starta spelet när sidan laddas
init();
