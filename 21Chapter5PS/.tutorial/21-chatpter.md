# Practice Set 5
We have learnt a lot of things in the previous chapters. Let's test our knowledge by solving some problems.

## Question 1
Create an array of numbers and take input from the user to add numbers to this array.

<details><summary>Answer</summary>

```javascript
let numbers = [1, 2, 3, 4, 5];
let input = prompt("Enter a number: ");
input = Number(input);
numbers.push(input);
console.log(numbers);
```
The `push()` method is used to add an element to the end of an array. The `prompt()` method is used to get the user's input and the `Number()` function is used to convert the input to a number.

</details> </br>

## Question 2
Keep adding numbers to the array in Q1 until 0 is entered.

<details><summary>Answer</summary>

```javascript
let numbers = [1, 2, 3, 4, 5];
let input = prompt("Enter a number: ");
input = Number(input);
while (input != 0) {
  numbers.push(input);
  input = prompt("Enter a number: ");
  input = Number(input);
}
console.log(numbers);
```
The `while` loop will continue to run as long as the condition `input != 0` is true. The `prompt()` method is used to get the user's input and store it in the `input` variable. The `Number()` function is used to convert the input to a number. The `push()` method is used to add an element to the end of an array.

we can also do this with `do-while` loop:

```javascript
let numbers = [1, 2, 3, 4, 5];
let input = null;
do {
  input = prompt("Enter a number: ");
  input = Number(input);
  numbers.push(input);
} while (input != 0);
console.log(numbers);
```
The `do-while` loop will run at least once, even if the condition is false. The `prompt()` method is used to get the user's input and store it in the `input` variable. The `Number()` function is used to convert the input to a number. The `push()` method is used to add an element to the end of an array.

</details> </br>

## Question 3
Filter for numbers deivisible by 10 from an array of numbers.

<details><summary>Answer</summary>

```javascript
let numbers = [10, 29, 33, 40, 50, 61, 17, 38, 90, 7];
let filtered = numbers.filter(function (number) {
  return number % 10 == 0;
});
console.log(filtered);
```
The `filter()` method is used to create a new array with all elements that pass the test implemented by the provided function. The `function` keyword is used to define a function. The `number` parameter is used to store the value of each element in the array. The `return` keyword is used to return the result of the function. The `%` operator is used to get the remainder of a division.

</details> </br>

## Question 4
Create an array of square of given numbers.

<details><summary>Answer</summary>

```javascript
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function (number) {
  return number * number;
});
console.log(squares);
```
The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. The `function` keyword is used to define a function. The `number` parameter is used to store the value of each element in the array. The `return` keyword is used to return the result of the function. The `*` operator is used to multiply two numbers.

</details> </br>

## Question 5
Use the reduce method to calulate factorial of a given number from an array of first n natural numbers (n being the numbers whose factorial needs to be calculated).

<details><summary>Answer</summary>

```javascript
let numbers = [1, 2, 3, 4, 5];
let factorial = numbers.reduce(function (x1, x2) {
  return x1 * x2;
});
console.log(factorial);
```
The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. The `function` keyword is used to define a function. The `x1` and `x2` parameters are used to store the value of each element in the array. The `return` keyword is used to return the result of the function. The `*` operator is used to multiply two numbers.

This one is a bit tricky. Let's break it down.

1. First, we create an array called `numbers` that contains the values `[1, 2, 3, 4, 5]`.

1. Next, we call the `reduce()` method on the `numbers` array. The `reduce()` method is used to perform a specific operation on each element of an array and reduce the entire array to a single value.

1. The `reduce()` method takes a callback function as its argument, which is executed on each element of the array. This function takes two arguments: `x1` (the accumulated value) and `x2` (the current element of the array being processed).

1. In this example, the callback function multiplies the accumulated value (`x1`) by the current element of the array being processed (`x2`). So, for example, the first time the function is called, `x1` is 1 (the initial value), and `x2` is 2 (the first element of the `numbers` array).

1. The `reduce()` method continues to call the callback function for each element of the array, passing in the result of the previous function call as the new `x1` value, and the next element of the array as `x2`. This continues until every element of the array has been processed, and the final value is returned.

1. In this example, the `reduce()` method returns the factorial of the `numbers` in the numbers array, which is the product of all the numbers from 1 to 5. So, the value of `factorial` is 1 * 2 * 3 * 4 * 5, which is 120.

1. Finally, we use the `console.log()` method to output the value of `factorial` to the console, which will display the value `120`. 

</details> </br>

Done! You have completed this practice set. You can now move on : ))