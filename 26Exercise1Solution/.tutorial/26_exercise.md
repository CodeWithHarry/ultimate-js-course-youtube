# Guess the number game

Ok so we have covered a lot of stuff so far. Let's put it all together and make a game. The game will be a guessing game where the user has to guess a number between 1 and 100. 

## Instructions
1. Generate a random number using the `Math.random()` function and store it in a variable.
1. Take input from the user using the `prompt()` function and store it in a variable.
1. Compare the user's guess with the generated number using if-else statements and inform the user accordingly.
1. Repeat steps 2 and 3 until the user guesses the correct number.
1. Keep track of the number of turns it took the user to guess the correct number and calculate the score accordingly.
1. Terminate the program and show the final score.

<details>
<summary> Solution </summary>

```javascript
// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
```
</details>

Go ahead and try it out on your own. Once you are done, you can check the solution below.
<details> 
<summary>Solution</summary>

### Code
```js
const randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuess = prompt("Guess the number between 1 and 100");
let turns = 0;

while (userGuess != randomNumber) {
  if (userGuess < randomNumber) {
    userGuess = prompt("Your guess was too low. Try again.");
  } else {
    userGuess = prompt("Your guess was too high. Try again.");
  }
  turns++;
}

const score = 100 - turns;
console.log(`Congratulations! You guessed the number in ${turns} turns! Your score is ${score}.`);

```

### Explanation
```js
const randomNumber = Math.floor(Math.random() * 100) + 1;
```
This line generates a random number between 1 and 100 and stores it in the variable `randomNumber`.

```js
let userGuess = prompt("Guess the number between 1 and 100");
```
This line takes input from the user and stores it in the variable `userGuess`.

```js
let turns = 0;
```
This line initializes the variable `turns` to 0.

```js
while (userGuess != randomNumber) {
  if (userGuess < randomNumber) {
    userGuess = prompt("Your guess was too low. Try again.");
  } else {
    userGuess = prompt("Your guess was too high. Try again.");
  }
  turns++;
}
```
This is a while loop that runs until the user guesses the correct number. It compares the user's guess with the generated number and prompts the user to guess again if the guess is incorrect. It also increments the variable `turns` by 1.

```js
const score = 100 - turns;
```
This line calculates the score of the user. The score is calculated by subtracting number of turns taken to guess the correct number from 100. The score is then stored in the variable `score`.

```js
console.log(`Congratulations! You guessed the number in ${turns} turns! Your score is ${score}.`);
```
This line displays a message to the user informing them of the number of turns it took them to guess the correct number and their score.

</details>