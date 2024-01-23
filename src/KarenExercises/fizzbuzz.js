// Part 2: Getting command-line input (with enquirer)
// Practice Tasks: write some very simple command-line programs which take a prompt from the user.

const { prompt } = require("enquirer");

prompt({
    type: "numeral",
    name: "inputNumber",
    message: "What number would you like to input on FizzBuzz function?",
}).then((response) => {
    console.log("FizzBuzz: ", FizzBuzz(response.inputNumber));
});


function FizzBuzz(N) {
    let result = [];
    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}