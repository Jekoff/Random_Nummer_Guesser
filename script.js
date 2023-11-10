const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 100);

let guesses = 0; 
console.log(target);

const guess = Number(prompt("Guess a number(0-100): "));

if(guess > target){
     console.log("Too High.");
}else if(guess < target){
    console.log("Too low.");
}else{
    console.log("You guessed it!");
}
   

