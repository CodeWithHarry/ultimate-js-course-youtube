<h1 align="center"> Variables </h1>
<h2 align="center"> var, let and const </h2>

In the previous video, we learned about syntax, types of languages, comments and variables. In this chapter, we will learn about the `var`, `let` and `const` keywords and how to declare variables using them.

# var, let and const
In javascript, there are three keywords that are used to declare variables: `var`, `let` and `const`. The `var` keyword was used to declare variables in javascript before the `let` and `const` keywords were introduced. The `let` and `const` keywords were introduced in ES6 (ECMAScript 6). ES6 is the latest version of javascript. It was released in 2015. ES6 introduced a lot of new features to javascript. We will learn about some of them in this course.

# var
The `var` keyword is used to declare variables in JavaScript. Here's an example:
```js
var name = "Harry";
console.log(name); //output: Harry
```
we can also reassign the value of a variable declared using the `var` keyword:
```js
var name = "Harry";
name = "Ron";
console.log(name); //output: Ron
```
One important thing to note about var is that it has block scope. This means that if a variable is declared with var inside a function, it is accessible anywhere within that block.

Note: Block scope will be discussed in the upcoming videos. For now, just remember that anything inside curly braces `{}` is a block.

Here's an example:
```js
var name = "Harry";
{
    var name = "Ron";
    console.log(name); //output: Ron
}
console.log(name); //output: Ron
```
This is the reason why the `var` keyword is not recommended to be used anymore. It can lead to unexpected results. Instead we make use of the `let` and `const` keywords.

# let
The let keyword is used to declare variables in JavaScript and has block scope. This means that if a variable is declared with let inside a block, it is only accessible within that block.

Here's an example:
```js
let a = 29

let b = " Harry";
{
let b = "this";
console.log(b); //output: this
}
console.log(b); //output: Harry
```

# const
The `const` keyword is used to declare variables in JavaScript and is used when you don't want to reassign the variable. The value of a variable declared with `const` cannot be changed.

Here's an example:
```js
const name = " Harry";
name = "this";
console.log(name); //output: Uncaught TypeError: Assignment to constant variable.
```

# Differences

|  | **Block scoped** | **Hoisting** | **Reassignment** | **Initialization** |
|----------|-------------------|--------------|------------------|--------------------|
| `let`      | Yes               | No           | Yes              | Optional           |
| `var`      | No                | Yes          | Yes              | Optional           |
| `const`    | Yes               | No           | No               | Required           |


* **Block scoped**: `let` and `const` are block-scoped, meaning they are only accessible within the block they were defined in, while `var` is function-scoped, meaning it is accessible within the entire function it was defined in.
* **Hoisting:** `let` and `const` are not hoisted, meaning they cannot be accessed before they are declared, while `var` is hoisted, meaning it can be accessed before it is declared (although it will have a value of undefined).
* **Reassignment:** `let` and `var` can be reassigned to a new value, while `const` cannot be reassigned.
* **Initialization:** `let` and `var` can be declared without being initialized, while `const` must be initialized with a value when it is declared.


# Best Practices
Now we know everything about the variables in JavaScript. Let's look at some best practices that we should follow while declaring variables in JavaScript to make our code more readable and maintainable.

1. Use descriptive and meaningful variable names: Choose variable names that clearly describe the value they hold. This makes your code easier to read and understand.
```js
const a = "Harry"; //bad
const name = "Harry"; //good
```
2. Use camelCase to name your variables. This makes your code easier to read and understand.
```js
const myName = "Harry"; //good
const myname = "Harry"; //bad
```
3. Use const by default and only use let if you need to reassign the variable. Avoid using var.
```js
const name = "Harry"; //good
let temporary = 29; //good
var name = "Harry"; //bad
```
4. Declare variables at the top of their scope: To make your code more readable, it's best to declare variables at the top of their scope. This makes it easier to see what variables are in scope and what values they hold
```js
//good:
{
    const name = "Harry";
    const hobby = "programming";

    console.log("My name is " + name + " and I love " + hobby); // output: My name is Harry and I love programming
}
//bad
{
    console.log("My name is " + name + " and I love " + hobby); // output: My name is undefined and I love undefined
    const name = "Harry";
    const hobby = "programming";
}
```
5. Use const whenever possible: If you know that a variable will not change, use const to declare it. This helps to prevent bugs in your code that could occur if you accidentally reassign a value to a variable that should not change.
```js
const name = "Harry"; //good
let name = "Harry"; //fine but const is better because we know that the value of name will not change
var name = "Harry"; //bad
```

# Conclusion
Variables are an essential part of JavaScript programming. They allow us to store and manipulate data in our code. In JavaScript, we can declare variables using the `var`, `let`, and `const` keywords. While the `var` keyword has block scope, it can lead to unexpected results and is no longer recommended. Instead, we should use the `let` and `const` keywords, with `const` being the preferred option whenever possible. When declaring variables, we should follow best practices like using descriptive names, using camelCase, declaring variables at the top of their scope, and using `const` by default. By following these practices, we can make our code more readable and maintainable.

[Go to next lecture](nextlectureslink)