// Part 6: Repeatedly sequencing Promises in loops
// Practice tasks: Write a guessing game which chooses a random number between 1 and 10 and has the user repeatedly guess until it gets it right.  Bonus: have your program advise the user “higher” or “lower” after each user guess.

const { prompt } = require("enquirer");

async function mainLoop() {
    while (true) {
        const guessedCorrectly = await askOneQuestionAndProcessAnswer();
        if (guessedCorrectly) {
            break;
        }
    }
}

mainLoop();

async function askOneQuestionAndProcessAnswer() {
    const numToGuess = 6;

    const result = await prompt({
        type: "number",
        name: "guessedNumber",
        message: "Guess a number between 1 and 10",
    });

    const guess = parseInt(result.guessedNumber);
    const guessedCorrectly = numToGuess === guess;
    if (guessedCorrectly) {
        console.log("Correct");
    } else {
        if (guess < numToGuess) {
        console.log("Higher")}
        else {
        console.log("Lower")
        }
    }

    return guessedCorrectly;
}
