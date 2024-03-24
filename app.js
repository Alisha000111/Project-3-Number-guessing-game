import inquirer from "inquirer";
let secretNumber = Math.round(Math.random() * 10);
let numberOfGuesses = 0;
let guess;
do {
    guess = await inquirer.prompt({
        name: "guess",
        type: "number",
        message: "Guess the secret number: "
    });
    if (guess.guess < secretNumber) {
        console.log(`your number is too low, try again!! attempts (${++numberOfGuesses})`);
    }
    else if (guess.guess > secretNumber) {
        console.log(`your number is too high, try again!! attempts (${++numberOfGuesses})`);
    }
    else {
        console.log(`Congratulations!! You've guessed the number!! attempts (${++numberOfGuesses})`);
    }
} while (guess.guess != secretNumber);
