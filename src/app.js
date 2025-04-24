const suits = ["♠", "♥", "♦", "♣"];
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function generateCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  const numberElement = document.getElementById("number");
  const suitElements = document.querySelectorAll(".suit");

  if (numberElement && suitElements.length > 0) {
    numberElement.textContent = randomNumber;
    suitElements.forEach(suitElement => {
      suitElement.textContent = randomSuit;
      suitElement.style.color =
        randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";
    });
  }
}

document.getElementById("generateBtn").addEventListener("click", generateCard);
