# Practice Set 2
Ok everyone, now lets put our knowledge to the test. and try to solve the following questions.
## Q1: Using Logical Operators
Create a JavaScript program to check if a age is between 10 and 20.
<details><summary>Answer</summary> 

```javascript
let age = prompt("Enter your age");
if (age >= 10 && age <= 20) {
  console.log("You are between 10 and 20");
} else {
  console.log("You are not between 10 and 20");
}
```
In this example, we use the `&&` operator to check if the age is between `10` and `20`. If the age is between 10 and 20, the condition evaluates to true, and the first `console.log` statement is executed. If the age is not between 10 and 20, the condition evaluates to false, and the second `console.log` statement is executed.
</details> </br>



## Q2: Using Switch Case
Demonsrate the use of switch case in JavaScript.
<details><summary>Answer</summary>


```javascript
let day = prompt("Enter a day");
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}
```
In this example, we use the `switch` statement to check the value of the `day` variable. If the value of `day` is `Monday`, the first `console.log` statement is executed. If the value of `day` is `Tuesday`, the second `console.log` statement is executed. If the value of `day` is not `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, or `Sunday`, the `default` statement is executed.

Also do note that the `break` keyword is used to prevent the execution of the next `case` statement. If you don't use the `break` keyword, the execution will continue to the next `case` statement, even if the condition is false.

</details> </br>

## Q3: Divisible by 2 and 3
Create a JavaScript program to check if a number is divisible by 2 and 3.

<details><summary>Answer</summary>

```javascript
let num = prompt("Enter a number");
if (num % 2 == 0 && num % 3 == 0) {
  console.log("The number is divisible by 2 and 3");
} else {
  console.log("The number is not divisible by 2 and 3");
}
```
In this example, we use the `&&` operator to check if the number is divisible by `2` and `3`. If the number is divisible by 2 and 3, the condition evaluates to true, and the first `console.log` statement is executed. If the number is not divisible by 2 and 3, the condition evaluates to false, and the second `console.log` statement is executed.
</details> </br>

## Q4: Divisible by 2 or 3
Create a JavaScript program to check if a number is divisible by 2 or 3.
<details><summary>Answer</summary>

```javascript
let num = prompt("Enter a number");
if (num % 2 == 0 || num % 3 == 0) {
  console.log("The number is divisible by 2 or 3");
} else if (num % 2 == 0) {
  console.log("The number is divisible by 2");
} else if (num % 3 == 0) {
  console.log("The number is divisible by 3");
} else {
  console.log("The number is not divisible by 2 or 3");
}
```
In this example, we use the `||` operator to check if the number is divisible by `2` or `3`. If the number is divisible by 2 or 3, the condition evaluates to true, and the first `console.log` statement is executed. If the number is not divisible by 2 or 3, the condition evaluates to false, and the second `console.log` statement is executed.

</details> </br>

## Q5: Using Ternary Operator
Print "you can drive" if the age is greater than or equal to 18, otherwise print "you cannot drive". Use the ternary operator.

<details><summary>Answer</summary>

```javascript
let age = prompt("Enter your age");
age >= 18
  ? console.log("You can drive")
  : console.log("You cannot drive");
```
In this example, we use the ternary operator to check if the age is greater than or equal to 18. If the age is greater than or equal to 18, the condition evaluates to true, and the first `console.log` statement is executed. If the age is less than 18, the condition evaluates to false, and the second `console.log` statement is executed.
</details> </br>

Congratulations! You have completed the practice set. Now you can move on to the next chapter.