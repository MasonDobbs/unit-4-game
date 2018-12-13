


var playerValue = 0;

var computerValue;


computerValue = Math.floor(Math.random()*500) +25;


console.log(computerValue);

$("#ruby").on("click", function(){
var ruby = Math.floor(Math.random() * 25) +1;
console.log(ruby);
});

$("#sapphire").on("click", function(){
    var sapphire = Math.floor(Math.random() * 25) +1;
    console.log(sapphire);
});

$("#emerald").on("click", function(){
    var emerald = Math.floor(Math.random() * 25) +1;
    console.log(emerald);
});

$("#diamond").on("click", function(){
    var diamond = Math.floor(Math.random() * 25) +1;
    console.log(diamond);
});

$("#randomNumber").html(computerValue);

