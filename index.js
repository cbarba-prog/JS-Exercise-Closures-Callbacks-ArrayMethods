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
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter2 would only be returning the result of the counter inside its function, not storing it anywhere
 * counter1 allows you to call a function within a function and returns a parameter that is added onto another variable to keep count
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1, as it uses a function (counterMaker) to call on another function (counter)
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 is for storing and displaying many instances of variables, such as keeping score
 * counter2 is good for just an instance or a counter where keeping the values is not important, such as a counter
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number 
between 0 and 2. */
/*
function inning(){

  let score = Math.floor(Math.random() * 3);  
  return score;
  }
  
  const score2 = inning();
  console.log(score2);*/

  function inning(){
    return Math.floor(Math.random() * 3);
  }

  console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings 
and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, ins){

  let homescore = 0;
  let awayscore = 0;
  
  for(i=0; i < ins; i++){
    homescore = homescore + inning();
    awayscore = awayscore + inning();
  }
  
  
  let finalscore = {Home: homescore, Away: awayscore}
  return finalscore;
  }
  console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

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

function getInningScore(inning){
  return {
    Home: inning(),
    Away: inning()
  }
}

function scoreboard(inningScore, inning, ins){

  const scoreByInning = [];

  let homeScore = 0;
  let awayScore = 0;

  for(let i = 0; i < ins; i++){
    const currentInning = inningScore(inning);
    homeScore = homeScore + currentInning.Home
    awayScore = awayScore + currentInning.Away
    scoreByInning.push(`Inning ${i + 1}: Away: ${currentInning.Away} - Home: ${currentInning.Home}`);
  }
  if(homeScore === awayScore){
    scoreByInning.push(`you will need to play another inning`);
  }
  else{
    scoreByInning.push(`Final Score: Away ${awayScore} - Home: ${homeScore}`);
  }

return scoreByInning;
}
console.log(scoreboard(getInningScore, inning, 9));

/*
function scoreboard(score4, final4, ins4) {
  
  let aTeam = 0;
  let hTeam = 0;
  
  for(i=0; i < ins4; i++){
    console.log(`${i} inning: ${aTeam} - ${hTeam}`);
    aTeam = aTeam + inning();
    hTeam = hTeam + inning();  
    
  }
  return score4;
}

scoreboard(final, inning, 9)*/


