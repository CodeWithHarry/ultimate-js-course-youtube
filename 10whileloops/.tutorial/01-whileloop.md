We discussed the following loops in previous lesson
1. `for` loop
2. `for-in` loop
3. `for-of` loop

In this lesson, we will learn about the remaining 2 types of loops:
1. `while` loop
2. `do-while` loop

# while Loop
A `while` loop is a type of loop that repeatedly executes a block of code while a particular condition is true. The loop will keep executing until the condition becomes false.

## Syntax
The syntax of the while loop is as follows:

```js
while (condition) {
    // code to be executed
}
```
Here's an example of using a while loop to print all the numbers from 0 to the user input:
```js
let input = prompt("Enter a number");
input = Number(input);
let i = 0;

while (i < input) {
    console.log(i);  // print the current value of i
    i++;  // increment i by 1
}
```
The code above works as follows:

* Ask the user to enter a number using `prompt()`.
* Convert the user input to a number using `Number()`.
* Initialize the variable `i` to 0.
* Check if `i` is less than the user input.
* If `i` is less than the user input, print the current value of `i` using `console.log()`.
* Increment `i` by 1.
* Check the condition again, and repeat the loop until `i` is no longer less than the user input.

## Example without i++
What happens if we don't increment `i` by 1?
Here's an example of using a while loop to print all the numbers from 0 to the user input without using i++:
```js
let input = prompt("Enter a number");
input = Number(input);
let i = 0;

while (i < input) {
    console.log(i);  // print the current value of i
}
```
In the code above, the `i` variable is never incremented, so the loop will continue to execute indefinitely. To stop the loop, you can press `Ctrl+C`.

# Do While Loop
A `do-while` loop is a type of loop that executes a block of code at least once, and then repeatedly executes the block of code while a particular condition is true.

## Syntax
The syntax for the do-while loop is as follows:
```js
do {
  // code to be executed
} while(condition);
```
The following code asks the user for a number and prints all the numbers from 0 to that number using a do-while loop:
```js
let input;
do {
    input = prompt("Enter a number");
    input = Number(input);
} while(isNaN(input));

let i = 0;
do {
    console.log(i);
    i++;
} while(i < input);
```
* The first `do` loop asks the user for a number and assigns it to the `input` variable. If the input is not a number, the loop will run again until a valid number is entered.
* The let `i = 0` line initializes a counter variable `i` to 0.
* The second `do` loop will keep running as long as `i` is less than `input`.
* The `console.log(i)` line will print the value of `i` to the console on each iteration.
* The `i++` statement increments the value of `i` by 1 after each iteration.

# Differences between While and Do-While Loop
|        | **while loop**                                                        | **do-while loop**                                                                    |
|-----------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| Syntax          | while (condition) { statement }                                       | do { statement } while (condition);                                                     |
| First iteration | Condition is checked before the iteration.                            | The statement is executed before the check.                                             |
| Number of loops | 0 or more                                                             | 1 or more                                                                               |
| Execution order | Condition → Statement                                                 | Statement → Condition → Statement                                                       |
| Use case        | Use when the number of iterations is unknown or based on a condition. | Use when you want to execute the statement at least once, and then check the condition. |


In summary, the main differences between the `while` loop and the `do-while` loop are:

* The `while` loop checks the condition first, then executes the loop if the condition is true, however the `do-while` loop executes the loop first, then checks the condition.
* The `while` loop may execute zero or more times, while the `do-while` loop always executes at least once.
* The `while` loop is often used when the number of iterations is unknown or based on a condition, however the `do-while` loop is useful when you want to execute a statement at least once, and then check the condition.
  
We understand that the concept of loops can be intimidating and confusing for beginners. However, with practice and a good understanding of the concepts covered in these markdowns, you will be well on your way to writing your own programs. Remember, don't be discouraged if you don't get it right away - keep practicing and you'll get there!