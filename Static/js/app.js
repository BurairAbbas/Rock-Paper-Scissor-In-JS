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
    rpsFrontend(humanChoice, botChoice, message);
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

function rpsFrontend(yourChoice, botChoice, message){
    var imagesDataBase = {
        "rock" : document.getElementById("rock").src,
        "paper" : document.getElementById("paper").src,
        "scissor" : document.getElementById("scissor").src
    }

    //remove all images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    let humanDiv = document.createElement("div");
    let botDiv = document.createElement("div");
    let messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='"+imagesDataBase[yourChoice]+"' width='150' height='150' style='box-shadow: 0px 10px 50px rgb(75, 75, 211)' >";
    messageDiv.innerHTML = "<h1 style = 'color: " + message['color'] + "' >"+message['message']+"</h1>";
    console.log( message['color']);
   botDiv.innerHTML = "<img src='"+imagesDataBase[botChoice]+"' width='150' height='150' style=' box-shadow: 0px 10px 50px rgb(240, 65, 80)'>";
   
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);





}


