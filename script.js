const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissors");
const choices = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")

let userScore = 0;
let comScore = 0;

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randChoice = Math.floor(Math.random()*3);
    return options[randChoice];
}

const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#012169"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "#008000";
    }else{
        comScore++;
        compScorePara.innerText = comScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#FF0000";
    }
}

const winningStatus = (userChoice) => {
    //Generate computer choice 
    const compChoice = genComChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "paper"){
            //scissors, paper
            userWin = compChoice === "rock" ? true : false;
        }else if (userChoice === "scissors"){
            //rock, scissors
            userWin = compChoice === "paper" ? true : false;
        }else{
            //rock, paper
            userWin = compChoice === "scissors" ? true : false;
        };
        showWinner(userWin, userChoice, compChoice);
    };

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was Clicked", userChoice);
        winningStatus(userChoice);
    })
})