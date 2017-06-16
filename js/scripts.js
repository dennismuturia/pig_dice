/*
 *Business Logic for both players
 *Created by Dennis Muturia, Elvis Mogaka, Caroline Theuri
 *Version 1.0.0.0
*/
 //var total = 0;
function Players1(points){
    this.points = points;
}
Players1.prototype.computeScores = function(randomValue){
     return this.points += randomValue;
}

function Players2(random2){
    this.random2 = random2;
}

//User Interface
$(document).ready(function(){
    var result  = new Players1(0);
    $('form#player1').submit(function(event){
        event.preventDefault();
        var randomm = Math.floor(Math.random() * 6) + 1;      
        
        
        result.computeScores(randomm);
        console.log(result.points);
        });
    $('form#player2').submit(function(event){
        event.preventDefault();
        var random2 = Math.floor(Math.random() * 6) + 1;
        
        var result1  = new Players2(random2);
        
        console.log(result1);
        });
    });