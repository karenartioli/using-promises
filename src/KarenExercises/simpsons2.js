// Part 4: Getting data from web APIs (with axios)
// Practice task: 2. Write another program that first takes a search term from the user at the command-line before fetching the episode data, and searching through it and printing out episode titles which contain the search term.

const { prompt } = require("enquirer");
const axios = require("axios").default;
const url = "https://api.tvmaze.com/shows/83/episodes";

// Function to get episodes filtered by input string
async function getEpisodesWithInputString(inputString) {
    const response = await axios.get(url);
    return response.data.filter(episode =>
        episode.name.toLowerCase().includes(inputString.toLowerCase())
    );
}

// Function to prompt user for input
async function getUserInput() {
    const response = await prompt({
        type: "input",
        name: "inputString",
        message: "Search term for Simpsons episodes: ",
    });
    return response.inputString;
}

// Function to print the names of episodes
function printEpisodeNames(episodes) {
    for (const episode of episodes) {
        console.log(episode.name);
    }
}

// Main program
async function main() {
    const inputString = await getUserInput();
    const filteredEpisodes = await getEpisodesWithInputString(inputString);
    printEpisodeNames(filteredEpisodes);
}

// Call the main program
main();