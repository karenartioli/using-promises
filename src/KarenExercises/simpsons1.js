// Part 4: Getting data from web APIs (with axios)
// Practice task: 1. Fetch the data of all the simpsons episodes from the tvmaze api.
// Then print out just the episode titles.

const axios = require("axios").default;
const url = "https://api.tvmaze.com/shows/83/episodes";
const resultingPromise = axios.get(url);

resultingPromise.then(handleCompletedPromise);

function handleCompletedPromise(resultFromPromise) {
    resultFromPromise.data.map(episode => {
        console.log(episode.name);
    });
}

// For loop can also be used as alternative to the map method used on function above
// function handleCompletedPromise(resultFromPromise) {
//     for (const episode of resultFromPromise.data) {
//     console.log(episode.name);
//     }
// }