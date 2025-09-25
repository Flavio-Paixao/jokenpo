const choices = document.querySelectorAll(".choice");
const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const winnerDisplay = document.getElementById("winner");
const resetBtn = document.getElementById("resetBtn");

const options = ["pedra", "papel", "tesoura"];

let userChoice = "";
let computerChoice = "";

// Função para jogar
function play(choice) {
  userChoice = choice;
  computerChoice = options[Math.floor(Math.random() * options.length)];

  userChoiceDisplay.textContent = `Você escolheu: ${emoji(userChoice)} ${userChoice}`;
  computerChoiceDisplay.textContent = `Computador escolheu: ${emoji(computerChoice)} ${computerChoice}`;

  checkWinner();
}

// Função para verificar o vencedor
function checkWinner() {
  if (userChoice === computerChoice) {
    winnerDisplay.textContent = "Resultado: Empate 😐";
    winnerDisplay.style.color = "#ffc107";
    return;
  }

  if (
    (userChoice === "pedra" && computerChoice === "tesoura") ||
    (userChoice === "papel" && computerChoice === "pedra") ||
    (userChoice === "tesoura" && computerChoice === "papel")
  ) {
    winnerDisplay.textContent = "Resultado: Você venceu! 🎉";
    winnerDisplay.style.color = "#00c853";
  } else {
    winnerDisplay.textContent = "Resultado: Computador venceu! 💻";
    winnerDisplay.style.color = "#f44336";
  }
}

// Função para resetar
function resetGame() {
  userChoice = "";
  computerChoice = "";
  userChoiceDisplay.textContent = "Você escolheu: -";
  computerChoiceDisplay.textContent = "Computador escolheu: -";
  winnerDisplay.textContent = "Resultado: -";
  winnerDisplay.style.color = "#f5f5f5";
}

// Função para retornar emoji
function emoji(choice) {
  if (choice === "pedra") return "✊";
  if (choice === "papel") return "✋";
  if (choice === "tesoura") return "✌️";
}

// Eventos
choices.forEach(choice => {
  choice.addEventListener("click", () => play(choice.dataset.choice));
});
resetBtn.addEventListener("click", resetGame);
