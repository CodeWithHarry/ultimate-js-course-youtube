# Practice Set 6
Time to test our knowledge by solving some problems!

## Question 1
Write a program using the prompt function to take input of age as a value from the user and use alert to tell them if they can drive or not.

<details><summary>Answer</summary>

```javascript
let age = prompt("Enter your age:");

if (age >= 18) {
  alert("You can drive!");
} else {
  alert("Sorry, you are not old enough to drive.");
}
```
In this solution, we use the `prompt()` function to take input of age as a value from the user. We then use an `if` statement to check if the age entered is greater than or equal to 18, which is the minimum age for driving in most countries. If the age is greater than or equal to 18, we use `alert()` to tell the user that they can drive. If the age is less than 18, we use `alert()` to tell the user that they cannot drive yet.

</details> </br>

## Question 2
In question 1, use confirm to ask the user if they want to see the prompt again and want to get prompted again for the age.

<details><summary>Answer</summary>


```javascript
let age;

do {
  age = prompt("Enter your age:");
  if (age >= 18) {
    alert("You can drive!");
  } else {
    alert("Sorry, you are not old enough to drive.");
  }
} while (confirm("Do you want to see the prompt again?"));
```
In this solution, we build on Solution 1 and add a `do-while` loop that asks the user if they want to see the prompt again using the `confirm()` function. If the user clicks "OK" in the confirmation dialog, the `do-while`loop will continue and the prompt will be shown again. If the user clicks "Cancel", the `do-while` loop will stop and the program will exit.

</details> </br>

## Question 3
In the previous question, use console.error to log the error of age is 0 or negative.

<details><summary>Answer</summary>

```javascript
let age;

do {
  age = prompt("Enter your age:");
  if (age > 0) {
    if (age >= 18) {
      alert("You can drive!");
    } else {
      alert("Sorry, you are not old enough to drive.");
    }
  } else {
    console.error("Error: Age must be a positive number");
  }
} while (confirm("Do you want to see the prompt again?"));
```
In this solution, we build on Solution 2 and add a check to see if the age entered is 0 or negative. If the age is 0 or negative, we use `console.error()` to log an error message in the console. This is an example of error handling in JavaScript, where we can detect and handle errors in the program to make it more robust.

</details> </br>

## Question 4
Write a program to prompt the user to input a number and change the URL to `https://google.com` if the user enters a number greater than 4 **(Hint: location.href)**.

<details><summary>Answer</summary>

```javascript
let num = prompt("Enter a number:");

if (num > 4) {
  location.href = "https://google.com";
}
```
 In this solution, we use the `prompt()` function to take input of a number from the user. We then use an `if` statement to check if the number entered is greater than 4. If the number is greater than 4, we use `location.href` to change the URL of the current page to `https://google.com`. This is an example of manipulating the browser's location using JavaScript.

</details> </br>

## Question 5
Change the background of the page to yellow, red or any other color based on user input through prompt.

<details><summary>Answer</summary>

```javascript
let color = prompt("Enter a color (yellow, red, etc.):");

document.body.style.backgroundColor = color;
```
In this solution, we use the `prompt()` function to take input of a color from the user. We then use an `if` statement to check the color entered by the user and change the background color of the page using `document.body.style.backgroundColor`. This is an example of manipulating the CSS of a webpage using JavaScript.

</details> </br>

Phew! That was a lot of practice. Now you are ready to move on to the next section.