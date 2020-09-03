// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
	return callback(stringList[0]);
}

console.log(processFirstItem(['foo', 'bar'], (str) => str + str));

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 *      Counter1 is using a nested function.
 *      Counter2 is just a regular function.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 *      Counter 2 is using Closure.  It is reaching outside of the function scope to get the variable.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 *
 *
 */

// counter1 code
function counterMaker() {
	let count = 0;
	return function counter() {
		return count++;
	};
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
	return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
	let points = Math.round(Math.random() * 2); //This creates a random number between 0 - 2
	return points;
}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(callback, inningNumber) {
	let score = { Home: 0, Away: 0 };
	for (let i = 1; i < inningNumber; i++) {
		score.Home += callback();
		score.Away += callback();
	}
	return score;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(callback, inningNumber) {
	// setup object for the score keeping.
	let gameScore = { Home: 0, Away: 0 };
	// for loop to iterate through number of innings and apply a score to the inning.
	for (let i = 1; i <= inningNumber; i++) {
		let homeScore = callback();
		let awayScore = callback();

		gameScore.Home += homeScore;
		gameScore.Away += awayScore;
		// Function inside the loop to apply the score to each inning with proper 1st, 2nd and 3rd notation and return them.
		function getInningScore() {
			if (i === 1) {
				return `${i}st inning: ${gameScore.Home} - ${gameScore.Away}`;
			} else if (i === 2) {
				return `${i}nd inning: ${gameScore.Home} - ${gameScore.Away}`;
			} else if (i === 3) {
				return `${i}rd inning: ${gameScore.Home} - ${gameScore.Away}`;
			} else {
				return `${i}th inning: ${gameScore.Home} - ${gameScore.Away}`;
			}
		}

		console.log(getInningScore()); //Logs function running inning 1-9 with scores.
	}
	return `Final Score: ${gameScore.Home} - ${gameScore.Away}`; // return the final score of the game.
}
console.log(scoreboard(inning, 9)); // Logs the function that runs the entire scoreboard of inning 1-9 and outputs a final score.
