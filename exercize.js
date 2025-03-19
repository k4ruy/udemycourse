/* Lesson Task:

1) Create a variable `numberOfFilms` and store the user's response to the question:
   'How many movies have you already watched?'

2) Create an object `personalMovieDB` and include the following properties:
    - `count` - assign it the answer from the first question
    - `movies` - store an empty object in this property
    - `actors` - also store an empty object
    - `genres` - store an empty array
    - `privat` - assign it a boolean value `false`

3) Ask the user twice:
    - 'One of the last movies you watched?'
    - 'How would you rate it?'
Store the answers in separate variables.
Then, save the responses in the `movies` object in the following format:  
    movies: {
        'logan': '8.1'
    }

Make sure everything works correctly without errors in the console. */

"use strict";
const numberOfFilms = +prompt("How many movies have you already watched?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("One of the last movies you watched?"),
  b = "How would you rate it?",
  c = "One of the last movies you watched?",
  d = "How would you rate it?";

personalMovieDB.movies[a] = b;
personalMovieDB.movies[a] = d;

console.log(personalMovieDB);
