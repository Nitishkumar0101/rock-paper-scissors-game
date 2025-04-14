let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScores = document.getElementById("user-score");
const compScores = document.getElementById("comp-score");

const getCompChoice = () =>{
    let options=["Rock", "Paper", "Scissors"];
    let ranIdx= Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const countColor = (userScore, compScore) =>{
    if(userScore === compScore){
        userScores.style.color = "#081b31";
        compScores.style.color = "#081b31";
    }
    else if(userScore > compScore){
        userScores.style.color = "green";
        compScores.style.color = "red";
    }
    else{
        compScores.style.color = "green";
        userScores.style.color = "red";
    }
}

const showWin = (userWin, userChoice, compChoice) =>{
    if(userWin){
        console.log("You Win!");
        msg.innerText = `Nitish Wins! your ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
        userScore++;
        userScores.innerText = userScore;
    }
    else{
        console.log("You Lose!");
        msg.innerText = `Nitish Loses! Computer ${compChoice} beat your ${userChoice}`;
        msg.style.background = "red";
        compScore++;
        compScores.innerText = compScore;
    }
    countColor(userScore,compScore);
}

const matchDraw = () =>{
    console.log("Match Are Draw!");
    msg.innerText = "The match was a draw";
    msg.style.background = "#081b31";
}

const playGame = (userChoice) =>{
    console.log("User choice is : ",userChoice);
    let compChoice = getCompChoice();
    console.log("comp choice is : ", compChoice);
    if(userChoice === compChoice){
        matchDraw();
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = (compChoice === "Paper") ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = (compChoice === "Rock") ? true : false;
        }
        else{
            userWin = (compChoice === "Paper") ? true : false;
        }
        showWin(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
