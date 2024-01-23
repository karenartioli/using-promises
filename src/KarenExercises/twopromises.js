// Part 5: Sequencing two or more Promises
// Practice: sequence any two or three promises

const { prompt } = require("enquirer");

async function promptFaculty() {
  return prompt({
    type: "select",
    name: "faveFaculty",
    message: "What's your favourite faculty member?",
    choices: ["Neill", "Katie", "Nico", "Marta"],
  });
}

async function promptSeries() {
  return prompt({
    type: "select",
    name: "faveSeries",
    message: "What's your favourite series?",
    choices: ["Money Heist", "Prision Break", "Breaking Bad"],
  });
}

async function main() {
  const facultyResult = await promptFaculty();
  const seriesResult = await promptSeries();
  console.log({ facultyResult, seriesResult });
}

main();