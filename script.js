const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 100);

let guesses = 0; 

while (true) {
    guesses++;

    const input = prompt("Guess a number(0-100): ");
    const guess = Number(input);

    // Check if the input is not a number
    if (isNaN(guess)) {
        console.log("That's not a valid number. Try again.");
        continue; // Skip the rest of the loop and prompt again
    }

    if (guess > target) {
        console.log("Too High.");
    } else if (guess < target) {
        console.log("Too low.");
    } else {
        console.log("You guessed it!");
        break;
    }
}

console.log("You guessed the number in", guesses, "tries!");
