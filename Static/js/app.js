function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;

    humanChoice = yourChoice.id;
    botChoice = NumberToChoice(PickRandomNumber());

    console.log(botChoice);

    let results = DecideWinner(humanChoice, botChoice);
    console.log(results);
    message = FinalMessenge(results[0]); // its object: (message: "you win", color: "green")
    console.log(message);
    // rpsFrontend(yourChoice, botChoice, message);
}

function PickRandomNumber() {
    // Math.floor make the number on floor mean 2.8 to 2, 2.3 into 2.
    // Math.random return number between 0, 1 and we multiply to 3 to get between 0 to 2

    // let temp = Math.floor(Math.random() * 3);

    // // my solution:
    // let result;
    // switch(temp){
    //     case 0:
    //         result = "rock";
    //         break;
    //     case 1:
    //         result = "paper";
    //         break;
    //     case 2:
    //         result = "scissor";
    //         break;
    // }

    return Math.floor(Math.random() * 3);
}

function NumberToChoice(number) {
    return ["rock", "paper", "scissor"][number];
    // ["rock", "paper", "scissor"][0] gives rock, [1] gives paper, [2] gives scissor. More easy and short solution by clever 
}

function DecideWinner(humanChoice, botChoice) {
    // we can go your if and else statements but it need alot of work. So, we use datastrructure which is suited for us.

    var rpsDatabase = {
        "rock": { "scissor": 1, "rock": 0.5, "paper": 0 }, // scissor u win, rock u draw, paper u loss.
        "paper": { "rock": 1, "paper": 0.5, "scissor": 0 },
        "scissor": { "paper": 1, "scissor": 0.5, "rock": 0 }
    }

    var yourScore = rpsDatabase[humanChoice][botChoice]; // your choice scissor and bot is paper return 1 u win
    var botScore = rpsDatabase[botChoice][humanChoice];

    return [yourScore, botScore];
}

function FinalMessenge(yourScore){
    if(yourScore === 0 ){
        return {"message": "You Lost", "color": "red"};
    }
    else if(yourScore === 0.5){
        return {"message" : "You tired", "color" : "yellow"};
    }
    else{
        return {"message": "You Win!", "color":"Green"};
    }
}


