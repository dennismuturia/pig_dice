/*
 *Business Logic for both players
 *Created by Dennis Muturia, Elvis Mogaka, Caroline Theuri
 *Version 1.0.0.0
*/
function Players1(random1){
    this.random1 = random1;
}
function Players2(random2){
    this.random2 = random2;
}

//User Interface
$(document).ready(function(){
    $('form#player1').submit(function(event){
        event.preventDefault();
        var random1 = Math.floor(Math.random() * 6) + 1;
        
        var result  = new Players1(random1);
        
        console.log(result);
        });
    $('form#player2').submit(function(event){
        event.preventDefault();
        var random2 = Math.floor(Math.random() * 6) + 1;
        
        var result1  = new Players2(random2);
        
        console.log(result1);
        });
    });