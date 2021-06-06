function rpsGame(yourChoice){
    console.log(yourChoice);    
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    console.log(humanChoice);

    let result = DecideWinner(humanChoice, botChoice);
    let message = FinalMessenge(result); // its object: (message: "you win", color: "green") 

    rpsFrontend(yourChoice, botChoice, message);
}

