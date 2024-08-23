let userScore=0;
let compScore=0;

let choices= document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let useScorePara= document.querySelector("#user-score");
let compScorePara=document.querySelector("#computer-score");

let playGame=(userChoice)=>{
    console.log("user choice= "+ userChoice);

    //Computer generated answer compare
    let computerChoice= generateComputerChoice();
    console.log("Computer choice= "+ computerChoice);

    //If answer get draws
    if(userChoice===computerChoice){
        drawGame();

    }else{
        let userWin=true;

        if(userChoice==="rock"){
              //Scissors , Paper
            userWin=computerChoice=== "paper"?false: true;
        }else if(userChoice==="paper"){
            //Scissor ,Rock
            userWin= computerChoice==="scissor"? false:true;
        }else{
            //Rock, Paper
            userWin=computerChoice==="rock"? false: true;
        }
        showWinner(userWin, computerChoice, userChoice);
    }

}

let showWinner=(userWin ,computerChoice, userChoice)=>{
    if(userWin){
        userScore++;
        useScorePara.innerHTML= userScore;
        console.log("You Win!");
        msg.innerHTML=`Yay! You win ${userChoice} beats ${computerChoice}`;
        
        
    }else{
        compScore++;
        compScorePara.innerHTML=compScore;
        console.log("You Lost");
        msg.innerHTML=`OOPS! You lost ${computerChoice} beats ${userChoice}`;
        
    }
}

let drawGame=()=>{
    console.log("Game is drawn!");
    msg.innerHTML=`! It's Drawn for ${computerChoice} & ${userChoice}, Please try Again` ;
}

let generateComputerChoice=()=>{
    let options=["rock", "paper", "scissor"];
    let randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

choices.forEach((choice)=>{
    console.log(choice);

    choice.addEventListener("click",()=>{
        let userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})    