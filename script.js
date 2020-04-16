
//set the variables
let playerCount=0;
let compCount=0;
let gameCount=0;

//show the winner
function showWinner(playerCount,compCount){

    if (playerCount>compCount) {
        document.getElementById("win").innerHTML = "player wins";
        
    }

    else if(compCount>playerCount){
        document.getElementById("win").innerHTML = "Computer wins";
    }
    else{
        document.getElementById("win").innerHTML = "its a draw";
    }

}

//show player and computer's pick
function showMessage(x,y){
    document.getElementById("comp_message").innerHTML=y;
    document.getElementById("player_message").innerHTML=x;
}

//show score
function showScore(x,y){
    document.getElementById("comp_score").innerHTML=y;
    document.getElementById("player_score").innerHTML=x;
}

//show turns
function showTurns(x){
    document.getElementById("turns").innerHTML=x;
}


//play functions

function play_1() {

    

        let player="rock";

        let select = ["rock","paper","scissors"];
    
        let computer = select[Math.floor(Math.random()*select.length)];
    
        if(computer=="paper"){
            compCount++;
            
        }
        else if(computer=="scissors"){
            playerCount++;
            
        }
        showScore(playerCount,compCount);
        showMessage(player,computer);
        showWinner(playerCount,compCount);
        gameCount++;
        showTurns(gameCount);
   


    
    
}

function play_2() {


    let player="paper";

    let select = ["rock","paper","scissors"];

    let computer = select[Math.floor(Math.random()*select.length)];

    if(computer=="scissors"){
        compCount++;
        
    }
    else if(computer=="rock"){
        playerCount++;
        
    }
    
    showScore(playerCount,compCount);
    showMessage(player,computer);
    showWinner(playerCount,compCount);
    gameCount++;
    showTurns(gameCount);
    
    

    
    
    
}

function play_3() {

    
    let player="scissors";

    let select = ["rock","paper","scissors"];

    let computer = select[Math.floor(Math.random()*select.length)];

    if(computer=="rock"){
        compCount++;
        
    }
    else if(computer=="paper"){
        playerCount++;
        
    }
    
    showMessage(player,computer);
    showScore(playerCount,compCount);
    showWinner(playerCount,compCount);
    gameCount++;
    showTurns(gameCount);
    
    
    
}

//start afresh by setting everything to default
function newGame() {
    player="";
    computer="";
    playerCount=0;
    compCount=0;
    gameCount=0;
    showTurns(gameCount);
    showMessage(player,computer);
    showScore(playerCount,compCount);
    document.getElementById("win").innerHTML = "";
    
}
