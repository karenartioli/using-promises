// Part 4: Getting data from web APIs (with axios)
// Practice tasks: 3. Write a program which fetches and displays the current weather from the openweathermap API for a location of your choice.



const axios = require("axios").default;
const url = "https://api.openweathermap.org/data/2.5/weather?lat=-23.533773&lon=-46.625290&appid=d98cb4486a093eec0064f065e7ca38da";
const resultingPromise = axios.get(url);

resultingPromise.then(handleCompletedPromise);

function handleCompletedPromise(resultFromPromise) {
    console.log(resultFromPromise);
}