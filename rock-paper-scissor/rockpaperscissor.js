const choice = ["Rock", "Paper", "Scissor"];

function toFirstCap(word){
    return(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
}

function getComputerChoice(){
    return(choice[Math.floor(Math.random() * choice.length)])
}

function playRound (player,computer = getComputerChoice()){
    playerChoice = toFirstCap(player);
    
    switch(playerChoice){
        case "Rock":
            if(computer === "Rock"){
                console.log("Its a draw, both of you play Rock")
            } else if(computer === "Paper"){
                console.log("You loss, Paper beats Rock")
            } else { 
                console.log("You win ! Rock betas Scissor")
            };
            break;

        case "Paper":
            if(computer === "Rock"){
                console.log("You win ! Paper beats Rock")
            }else if (computer == "Paper"){
                console.log("Its a draw, both of you play Paper")
            }else{
                console.log("You loss, Scissor beats Paper")
            };
            break;
        
        case "Scissor":
            if(computer === "Rock"){
                console.log("You loss, Rock beats Scissor")
            }else if(computer === "Paper"){
                console.log("You win ! Scissor beats Paper")
            }else {
                console.log("Its a draw, both of you play Scissor")
            };
            break;
        
        default: console.log("Please play in a legit way.");



    }
}

function playGame(){

    return(playRound(player = prompt()))
}

