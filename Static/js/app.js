function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;

    humanChoice = yourChoice.id;
    botChoice = NumberToChoice(PickRandomNumber());

    console.log(botChoice);

    let result = DecideWinner(humanChoice, botChoice);
    console.log(result);
    let message = FinalMessenge(result); // its object: (message: "you win", color: "green")

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