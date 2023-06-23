Before we learn conditional statements, let's learn how to ask the user for input since we will be using that in our programs.

# Getting User Input
To get input from the user, we use the `prompt()` function in JavaScript. This input is stored as a string datatype in a variable. To check the datatype of the variable, we use the typeof operator.
```js
let age = prompt("Enter your age");
console.log(typeof age); //age is of string datatype
```
**Note:** By default, the input is stored as a string datatype. If we want to perform mathematical operations on the input , we need to convert the string datatype into a number datatype. We can do this by using the `Number()` function.
```js
let age = prompt("Enter your age");
console.log(typeof age); //age is of string datatype
age = Number(age);
console.log(typeof age); //age is of number datatype
```
We can also use the `parseInt()` function to convert the string datatype to a number.
```js
let age = prompt("Enter your age");
console.log(typeof age); //age is of string datatype
age = parseInt(age);
console.log(typeof age); //age is of number datatype
```

# Conditional Statements
Conditional statements are used to perform different actions based on different conditions. In JavaScript, we have the following conditional statements:

For example, when you log in to Instagram, you can use email or username. If you use email, your program might know that it should search in the place where you stored emails, and if you use a username, it should search in the place where you stored usernames.

* `if` statement
* `if-else` statement
* `if else-if else` statement
  
# The Basic If Statement
The basic syntax for an `if` statement is as follows:
```js
if(condition){
    //code if condition is true
}
```
The `if` statement checks if the condition is true or false. If the condition is true, the code inside the `if` statement is executed. If the condition is false, the code inside the `if` statement is not executed.

# The If-Else Statement
The basic syntax for an `if-else` statement is as follows:
```js
if(condition){
    //code if condition is true
}
else{
    //code if condition is false
}
```
The `if-else` statement checks if the condition is true or false. If the condition is true, the code inside the `if` statement is executed. If the condition is false, the code inside the `else` statement is executed.

# The If-Else If-Else Statement
The basic syntax for an `if-else if-else` statement is as follows:
```js
if(condition1){
    //code if condition1 is true
}
else if(condition2){
    //code if condition2 is true
}
else{
    //code if both condition1 and condition2 are false
}
```
The `if-else if-else` statement checks if the condition1 is true or false. If the condition1 is true, the code inside the `if` statement is executed. If the condition1 is false, the code inside the `else if` statement is executed. If both condition1 and condition2 are false, the code inside the `else` statement is executed.

# Example Programs
## Program 1
print "Hello World" if the user enters "Hello" as input.
```js
let input = prompt("Enter a string");
if(input === "Hello"){
    console.log("Hello World");
}
```
## Program 2
print "Hello World" if the user enters "Hello" as input. Otherwise, print "Goodbye World".
```js
let input = prompt("Enter a string");
if(input === "Hello"){
    console.log("Hello World");
}
else{
    console.log("Goodbye World");
}
```
## Program 3
print "Hello World" if the user enters "Hello" as input. Otherwise, print "Goodbye World" if the user enters "Goodbye" as input. Otherwise, print "Invalid Input".
```js
let input = prompt("Enter a string");
if(input === "Hello"){
    console.log("Hello World");
}
else if(input === "Goodbye"){
    console.log("Goodbye World");
}
else{
    console.log("Invalid Input");
}
```
Note that we didn't convert the input to a number datatype. This is because we are not performing any mathematical operations on the input. If we were performing mathematical operations on the input, we would have converted the input to a number datatype.

**For Example**
```js
let input = prompt("Enter a number");
if(input > 10){
    console.log("Number is greater than 10");
}
else if(input < 10){
    console.log("Number is less than 10");
}
else{
    console.log("Number is equal to 10");
}
```

# Ternary Operator
The ternary operator is a shorthand for the `if-else` statement. The basic syntax for the ternary operator is as follows:
```js
condition ? expression1 : expression2
```
If the condition is true, the expression1 is executed. If the condition is false, the expression2 is executed.

**For Example:**
print "Hello World" if the user enters "Hello" as input. Otherwise, print "Goodbye World".
```js
let input = prompt("Enter a string");
input === "Hello" ? console.log("Hello World") : console.log("Goodbye World");
```
# Homework
Just like if else and ternary operator, you can also use [switch statements](https://www.w3schools.com/js/js_switch.asp). As a homework, explore the switch statement and try to write a program using the switch statement.