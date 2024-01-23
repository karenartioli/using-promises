// Part 3: Getting database query results (with node-postgres)
// write a program that first prompts the user for a choice of options and then connects to your omdb db and runs a db query based on that choice.

const { prompt } = require("enquirer");
const { makeDBConnectionPool } = require("/home/2311-002-ka/Dev/Repos/using-promises/src/dbDemo/dbHelp");

const pool = makeDBConnectionPool("omdb");

const promiseOfInput = prompt({
    type: "autocomplete",
    name: "actor",
    message: "Pick your favorite actor",
    limit: 10,
    choices: ["Robert De Niro", "Johnny Depp", "Tom Hanks", "Bruce Willis", "Tom Cruise", "Arnold Schwarzenegger", "Sylvester Stallone", "Will Smith"],
});

promiseOfInput.then(handleResult);

function handleResult(answer) {

    const query = `
        SELECT m.name, EXTRACT(YEAR FROM m.date) AS year
        FROM movies m
        JOIN casts c ON m.id = c.movie_id
        JOIN people p ON c.person_id = p.id
        WHERE p.name = '${answer.actor}' AND m.kind = 'movie' AND c.position = 1 
        ORDER BY m.revenue DESC
        LIMIT 10;
    `;

    const promiseOfDBResult = pool.query(query);
    promiseOfDBResult.then(handleCompletedPromise);
}

function handleCompletedPromise(result) {
    console.log("The Top 10 movies that your chosen actor stared are: ", result.rows);
}