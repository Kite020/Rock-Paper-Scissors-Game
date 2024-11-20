let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "game was draw! play again";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `you win ! your ${userChoice} beats comp's ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compscorepara.innerText = compScore;
        msg.innerText = `you lost ! comp's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice===compChoice) {
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="rock") {
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin=compChoice==="rock" ? true : false;
        }
        else {
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
