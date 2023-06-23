# Practice set 3
Today, we will be testing our knowledge about loops and functions in JavaScript. We will be solving a few programming questions to help you understand the concepts better. Remember that there are dozens of way of solving a problem, your oesnt have to be the same way as mine, aslong as it give u the desired output, its fine.

## Question 1 
Write a program to print the marks of a student in an object using for loop:
object could be like this:
```js
 {
  coco: 80,
  harry: 98,
  rohan: 75
 }
```
<details><summary>Answer</summary>

```javascript
let marks = {
  coco: 80,
  harry: 98,
  rohan: 75
}

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}
```
This might seem a bit complex its because we havent studied `arrays` yet, but dont worry, we will learn it soon. For now, just know that arrays are a collection of items. Here is a detailed explaination of the code, dont worry if you dont understand it, we will learn it soon.

The first line creates an object called "marks" that contains three key-value pairs. Each key represents a student's name and the corresponding value represents their marks.

The second line starts a `for` loop that will iterate through each of the keys in the "marks" object.

The `Object.keys()` method is used to get an array of all the keys in the "marks" `object. Object.keys(marks)` will return an array containing ["coco", "harry", "rohan"]. The `.length` property is then used to get the number of items in this array (which is 3 in this case).

The `for` loop runs three times (once for each student) because of the `Object.keys(marks).length` condition in the loop.

The third line of code inside the `for` loop is what prints the student's name and their corresponding marks to the console.

The `Object.keys(marks)[i]` part of the code retrieves the key for the current student that we are looking at in the loop. For example, when `i` is `0`, it will retrieve the key `coco`.

The marks`[Object.keys(marks)[i]]` part of the code retrieves the value for the current key. In other words, it gets the marks for the current student. For example, when `i` is `0`, it will retrieve the value `80`.

Finally, the `console.log()` method is used to print the student's name and marks to the console using the retrieved key and value.

So in summary, this code loops through each key in the "marks" object and prints the name of the student along with their marks to the console.

</details> </br>

## Question 2
Write a program in Q1 using for in loop:
<details><summary>Answer</summary>

```javascript
let marks = {
  coco: 80,
  harry: 98,
  rohan: 75
}

for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
}
```
See how much simpler it is to use a `for-in` loop in this scenario? The `for-in` loop automatically iterates through each key in the object, so we don't need to use `Object.keys()` to get an array of the keys.

</details> </br>

## Question 3
Write a program to print "try again" until the user enters the correct number:
<details><summary>Answer</summary>

```javascript
let correctNumber = 9;
let guessedNumber = null
while (guessedNumber != correctNumber){
guessedNumber = prompt("Enter a number: ")
console.log("Try Again!");
}
console.log("congrats, youve guessed the number!")
```
The `while` loop will continue to run as long as the condition `guessedNumber != correctNumber` is true. The `prompt()` method is used to get the user's input and store it in the `guessedNumber` variable. The `console.log()` method is used to print "Try Again!" to the console. 
However there is a slight issue with this code, even if thse user enters the correct number, the loop will still run once more. To fix this, we can add an `if` statement inside the loop that checks if the user has guessed the correct number. If they have, we can use the `break` keyword to exit the loop.

```javascript
let correctNumber = 9;
let guessedNumber = null
while (guessedNumber != correctNumber){
guessedNumber = prompt("Enter a number: ")
if (guessedNumber == correctNumber){
break;
}
console.log("Try Again!");
}
console.log("congrats, youve guessed the number!")
```
the `break` keyword is used to exit the loop. So when the user enters the correct number, the `break` keyword will be executed and the loop will be exited.

</details> </br>

## Question 4
Write a function to find the mean of 5 numbers:
<details><summary>Answer</summary>

```javascript
function findMean(num1, num2, num3, num4, num5) {
  let sum = num1 + num2 + num3 + num4 + num5;
  let mean = sum / 5;
  return mean;
}

let result = findMean(10, 20, 30, 40, 50);
console.log("The mean of the numbers is " + result);
```
The `function` keyword is used to create a function. The `findMean()` function takes five parameters: `num1`, `num2`, `num3`, `num4`, and `num5`. The `return` keyword is used to return the mean of the five numbers to the caller of the function and finally, the `console.log()` method is used to print the result to the console.

</details> </br>

Congratulations on completing the programming questions! Don't worry if you weren't able to complete them. You can always revise the concepts and practice more. Remember, practice makes perfect!