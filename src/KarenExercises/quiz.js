// Part 6: Repeatedly sequencing Promises in loops
// Write a CLI program which asks the user 10 multiple-choice quiz questions on any topic.  After each answer it tells the user whether they got it right, and their score, before moving on to the next question.  Score is 1 point per question.

const { prompt } = require("enquirer");

async function main() {
    let score = 0;

    const questions = [
        {
            question: "Which city is the capital of Brazil?",
            choices: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            correctAnswer: "Brasília",
        },
        {
            question: "What is the largest river in Brazil?",
            choices: ["Amazon River", "Paraná River", "São Francisco River", "Tocantins River"],
            correctAnswer: "Amazon River",
        },
        {
            question: "Which famous Brazilian festival is known for its vibrant parades and samba music?",
            choices: ["Carnival", "Oktoberfest", "Diwali", "Holi"],
            correctAnswer: "Carnival",
        },
        {
            question: "What is the official currency of Brazil?",
            choices: ["Peso", "Real", "Bolívar", "Dollar"],
            correctAnswer: "Real",
        },
        {
            question: "Which Brazilian soccer player is often referred to as 'The King of Football'?",
            choices: ["Neymar", "Pelé", "Ronaldinho", "Ronaldo"],
            correctAnswer: "Pelé",
        },
    ];

    for (let i = 0; i < questions.length; i++) {
        const result = await askQuestion(questions[i]);
        if (result === questions[i].correctAnswer) {
            score++;
            console.log("Correct! Your score: " + score);
        } else {
            console.log("Incorrect. The correct answer is: " + questions[i].correctAnswer);
            console.log("Your score: " + score);
        }
    }

    console.log("Quiz completed. Your final score: " + score);
}

async function askQuestion(question) {
    const result = await prompt({
        type: "select",
        name: "answer",
        message: question.question,
        choices: question.choices,
    });

    return result.answer;
}

main();