# Introduction
In this game (also known as rock, paper, scissors with a slight variation), the user will be playing against the computer. The game consists of three choices: snake, water, or gun. The computer will choose one of these at random, and the user must choose one as well. The game will then determine the winner based on the following rules:

* Snake drinks water and wins.
* Gun shoots the snake and wins.
* Water can drown the gun and wins.

Instead of `console.log()` to print the output, we will be using `document.write()` to print the output on the webpage. So lets disuss what is `document.write()` and how to use it.

# document.write()
In JavaScript, `document.write()` is a method that allows you to add content to an HTML document dynamically. The method writes a string of text to a document stream opened by the document.

Here's an example of how to use it:
```js
document.write("Hello, world!"); // This will print "Hello, world!" on the webpage
```
Now that we know about document.write(), let's create a simple game called "Snake-Water-Gun"

# Exercise 2 - Snake-Water-Gun
```js
let playerScore = 0;
let computerScore = 0;

for (let round = 1; round <= 3; round++) {
  let playerSelection = prompt(`Round ${round}: Choose Snake, Water, or Gun`);
  playerSelection = playerSelection.toUpperCase();

  let computerOptions = ["SNAKE", "WATER", "GUN"];
  let computerSelection = computerOptions[Math.floor(Math.random() * 3)];

  document.write(`Round ${round}: <br>`);
  document.write(`You chose ${playerSelection} <br>`);
  document.write(`Computer chose ${computerSelection} <br>`);

  if (playerSelection === computerSelection) {
    document.write("It's a tie! <br><br>");
  } else if (
    (playerSelection === "SNAKE" && computerSelection === "WATER") ||
    (playerSelection === "WATER" && computerSelection === "GUN") ||
    (playerSelection === "GUN" && computerSelection === "SNAKE")
  ) {
    document.write("You win! <br><br>");
    playerScore++;
  } else {
    document.write("Computer wins! <br><br>");
    computerScore++;
  }
}

if (playerScore === computerScore) {
  document.write("The game ends with a tie!");
} else if (playerScore > computerScore) {
  document.write("You win the game!");
} else {
  document.write("Computer wins the game!");
}
```
* The code starts by declaring two variables, `playerScore` and `computerScore`, both set to 0.
* Then, it runs a `for` loop for three rounds (`round <= 3`). In each round, the user is prompted to choose between three options: "Snake", "Water", or "Gun". The user's selection is stored in the `playerSelection` variable and converted to uppercase.
* Next, the computer randomly selects an option from the same three options and stores it in the `computerSelection` variable.
* The code then displays the round number, the user's selection, and the computer's selection using `document.write()`.
* After that, the code checks to see who won the round. If it's a tie, it displays a message saying "It's a tie!" Otherwise, if the player wins, it displays "You win!" and increments the `playerScore` variable by 1. If the computer wins, it displays "Computer wins!" and increments the `computerScore` variable by 1.
* After three rounds are completed, the code checks to see who won the game. If the player and computer have the same score, it displays "The game ends with a tie!". Otherwise, if the player has a higher score, it displays "You win the game!". If the computer has a higher score, it displays "Computer wins the game!".

# Conclusion
In this exercise, we learned how to use `document.write()` to print the output on the webpage. We also created a simple game called "Snake-Water-Gun" using `document.write()`. In next lesson we will be walking the DOM!
