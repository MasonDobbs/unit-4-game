

var playerValue = 0;

var computerValue;

var wins = 0;

var loses = 0;


computerValue = Math.floor(Math.random()*250) +25;

console.log(computerValue);

var ruby = Math.floor(Math.random() * 25) +1;

var sapphire = Math.floor(Math.random() * 25) +1;

var emerald = Math.floor(Math.random() * 25) +1;

var diamond = Math.floor(Math.random() * 25) +1;

$("#totalScore").html(playerValue);

$("#wins").html("Wins: " + wins);

$("#losses").html("Losses: " + loses);


function resetGame(){

    $("#totalScore").html(0)

$("#wins").html("Wins: " + wins);

$("#losses").html("Losses: " + loses);

    computerValue = Math.floor(Math.random()*250) +25;

console.log(computerValue);

ruby = Math.floor(Math.random() * 25) +1;

sapphire = Math.floor(Math.random() * 25) +1;

emerald = Math.floor(Math.random() * 25) +1;

diamond = Math.floor(Math.random() * 25) +1;

$("#randomNumber").html(computerValue);
}





$("#ruby").on("click", function(){
playerValue += ruby; 
console.log(ruby);
console.log(playerValue);
$("#totalScore").html(playerValue);

if(playerValue > computerValue){
    $("#randomNumber").html("You Lose!");
    console.log(loses);
    $("#losses").html("Losses: " + loses++);
    resetGame();
    playerValue = 0;
}
else if(playerValue === computerValue){
    $("#randomNumber").html("You Win!");
    console.log("You Win!");
    $("#wins").html("Wins: " + wins++);
    resetGame();
    playerValue = 0;
}

});





$("#sapphire").on("click", function(){
    playerValue += sapphire;
    console.log(sapphire);
    console.log(playerValue);
    $("#totalScore").html(playerValue);

    if(playerValue > computerValue){
        $("#randomNumber").html("You Lose!");
        
        console.log(loses);
        $("#losses").html("Losses: " + loses++)
        resetGame();
        playerValue = 0;
    }
    else if(playerValue === computerValue){
        $("#randomNumber").html("You Win!");
        console.log("You Win!");
        $("#wins").html("Wins: " + wins++);
        resetGame();
        playerValue = 0;
    }

});




$("#emerald").on("click", function(){
    playerValue += emerald;
    console.log(emerald);
    console.log(playerValue)
    $("#totalScore").html(playerValue);

    if(playerValue > computerValue){
        $("#randomNumber").html("You Lose!");
        
        console.log(loses);
        $("#losses").html("Losses: " + loses++)
        resetGame();
        playerValue = 0;
    }

    else if(playerValue === computerValue){
        $("#randomNumber").html("You Win!");
        console.log("You Win!");
        $("#wins").html("Wins: " + wins++);
        resetGame();
        playerValue = 0;
    }

});




$("#diamond").on("click", function(){
    playerValue += diamond
    console.log(diamond);
    console.log (playerValue)
    $("#totalScore").html(playerValue);

    if(playerValue > computerValue){
        $("#randomNumber").html("You Lose!");
        
        console.log(loses);
        $("#losses").html("Losses: " + loses++)
        resetGame();
        playerValue = 0;
    }

    else if(playerValue === computerValue){
        $("#randomNumber").html("You Win!");
        console.log("You Win!");
        $("#wins").html("Wins: " + wins++);
        resetGame();
        playerValue = 0;
    }

});


$("#randomNumber").html(computerValue);

