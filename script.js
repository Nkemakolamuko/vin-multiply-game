const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const quest = document.getElementById("question");

const input = document.getElementById("input");

const form = document.getElementById("form");

const scorel = document.getElementById("score");

const name1 = document.getElementById("playerName");

const restartButton = document.getElementById("restart");

const newPlayerButton = document.getElementById("new-player");


let nam = localStorage.getItem("playerName");

if (!nam) {
    nam = prompt("Enter Your Name");
    localStorage.setItem("playerName", nam);
}

name1.innerText = `Player: ${nam}`;;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scorel.innerText = `Score: ${score}`;

quest.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

form.addEventListener("submit", () => {
  const userAns = +input.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

restartButton.addEventListener("click", () => {
    score = 1;
    updateLocalStorage();
    scorel.innerText = `Score: ${score}`;
    correctAns = generateQuestion(); // Generate a new question
  });
  
  newPlayerButton.addEventListener("click", () => {
    nam = prompt("Enter New Player's name");
    localStorage.setItem("playerName", nam);
    score = 1;
    updateLocalStorage();
    name1.innerText = `Player: ${nam}`;
    scorel.innerText = `Score: ${score}`;
    correctAns = generateQuestion(); // Generate a new question
  });

  if (score == 10) {
    alert(`10 in a row
    You're a genius!`);
  }

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}