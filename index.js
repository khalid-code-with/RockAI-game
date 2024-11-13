let userScore = 0;
let aiScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscoreSpan = document.querySelector("#user-score"); // Changed variable name for clarity
const comscoreSpan = document.querySelector("#ai-score"); // Changed variable name for clarity

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const drawGame = () => {

    msg.innerText = "Game is draw.."; // Corrected typo
    msg.style.background = "green";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++; // Corrected
        userscoreSpan.innerText = userScore; // Corrected

        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`; // Made minor text corrections
        msg.style.background = "blue";
    } else {
        aiScore++; // Corrected
        comscoreSpan.innerText = aiScore; // Corrected

        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
};

const playGame = (userChoice) => {

    const compChoice = genComputerChoice();


    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = userChoice === "rock" && compChoice === "scissors" ||
            userChoice === "paper" && compChoice === "rock" ||
            userChoice === "scissors" && compChoice === "paper";

        showWinner(userWin, userChoice, compChoice);
    }
};
 

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
