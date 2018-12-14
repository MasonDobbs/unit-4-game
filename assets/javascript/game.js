

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

$("#ruby").on("click", function(){
playerValue += ruby; 
console.log(ruby);
console.log(playerValue);
$("#totalScore").html(playerValue);

if(playerValue > computerValue){
    $("#randomNumber").html("You Lose!");
    loses++;
    console.log(loses);
    $("#losses").html("Losses: " + loses++);

}
else if(playerValue === computerValue){
    $("#randomNumber").html("You Win!");
    wins++;
    console.log("You Win!");
    $("#wins").html("Wins: " + wins++);
}


});

$("#sapphire").on("click", function(){
    playerValue += sapphire;
    console.log(sapphire);
    console.log(playerValue);
    $("#totalScore").html(playerValue);

    if(playerValue > computerValue){
        $("#randomNumber").html("You Lose!");
        loses++;
        console.log(loses);
        $("#losses").html("Losses: " + loses++)
    }
    else if(playerValue === computerValue){
        $("#randomNumber").html("You Win!");
        wins++;
        console.log("You Win!");
        $("#wins").html("Wins: " + wins++);
    }



});

$("#emerald").on("click", function(){
    playerValue += emerald;
    console.log(emerald);
    console.log(playerValue)
    $("#totalScore").html(playerValue);

    if(playerValue > computerValue){
        $("#randomNumber").html("You Lose!");
        loses++;
        console.log(loses);
        $("#losses").html("Losses: " + loses++)
    }
    else if(playerValue === computerValue){
        $("#randomNumber").html("You Win!");
        wins++;
        console.log("You Win!");
        $("#wins").html("Wins: " + wins++);
    }


});

$("#diamond").on("click", function(){
    playerValue += diamond
    console.log(diamond);
    console.log (playerValue)
    $("#totalScore").html(playerValue);

    if(playerValue > computerValue){
        $("#randomNumber").html("You Lose!");
        loses++;
        console.log(loses);
        $("#losses").html("Losses: " + loses++)
    }
    else if(playerValue === computerValue){
        $("#randomNumber").html("You Win!");
        wins++;
        console.log("You Win!");
        $("#wins").html("Wins: " + wins++);
    }


});


$("#randomNumber").html(computerValue);

