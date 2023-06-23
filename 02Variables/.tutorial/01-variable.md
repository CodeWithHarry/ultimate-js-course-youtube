<h1 align="center"> Foundation </h1>
<h2 align="center"> Introduction to Syntax, Types of Languages, Comments and Variables </h2>

Before we dive into the world of programming, we need to understand the basics of syntax, types of languages, and variables. This chapter will cover the basics and lay a strong foundation for your programming journey.

# Syntax
Just like there are some set of rules for writing a sentence in English, there are some set of rules for writing a program in a programming language. These rules are called syntax. 
Syntax is how a program is written and arranged. It defines the combination of symbols that are considered to be correctly structured.

# Types of Languages
There are two main types of programming languages: dynamically typed and statically typed.

### Dynamically Typed
Dynamically typed languages are the ones where the type of a variable is determined at runtime. This means that the type of a variable can change during the execution of the program. Js is example of a dynamically typed language.

### Statically Typed
Statically typed languages are the ones where the type of a variable is determined at compile time. This means that the type of a variable cannot change during the execution of the program. C is example of a statically typed language.

# Comments
Comments are used to explain the code. They are not executed by the computer. They are just for the programmer to understand the code. There are two types of comments: single line and multi-line.

### Single Line Comments
Single line comments are used to comment a single line of code. They are denoted by `//`. Everything after `//` is a comment and will not be executed by the computer.

```js
// This is a single line comment
console.log("Hello World"); // This is also a single line comment
```

### Multi-Line Comments
Multi-line comments are used to comment multiple lines of code. They are denoted by `/*` and `*/`. Everything between `/*` and `*/` is a comment and will not be executed by the computer.

```js
/*
This is 
a multi-line 
comment.
*/
```
Think of comments as sticky notes that you leave for yourself or others who may read your code in the future. They help make your code easier to understand and maintain.

# Variables
Variables are used to store data. They are like containers that hold data.Just like there are different containers in your kitchen like one may be used to store rice, another may be used to store sugar, similarly, variables are used to store different types of data. And since javascript is a dynamically typed language, the type of data that can be stored in a variable can change during the execution of the program.

Variables are declared using the `var`, `let` or `const` keyword (we will discuss this in next lecture). The syntax for declaring a variable is as follows:

```js
var name = "Harry";
```

Here, `name` is the name of the variable and `"Harry"` is the value that is stored in the variable. The value can be of any type. It can be a string, a number, a boolean, an array, an object, etc. Don't worry if you don't understand what these terms mean. We will cover them in the upcoming lectures.

Now that we know what variables are, let's discuss some rules for naming variables.

## Rules for Naming Variables
1. Variable names cannot start with a number.
```js
var 1name = "Harry"; // will throw an error because of the 1 at the start
```
2. Variable names cannot contain spaces.
```js
var my name = "Harry"; // will throw an error because of the space
```
3. Variable names cannot contain special characters like `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `-`, `+`, `=`, `[`, `]`, `{`, `}`, `|`, `\`, `:`, `;`, `<`, `>`, `,`, `.`, `/`, `?`, `~`.
```js
var my-name = "Harry"; // will throw an error because of the `-` character
```
4. Variable names cannot be a reserved keyword. Reserved keywords are the keywords that are already used by the language. For example, `var`, `let`, `const`, `if`, `else`, `for`, `while`, `function`, `return`, etc.
```js
var var = "Harry"; // will throw an error because var is a reserved keyword
```
5. Variable names are case sensitive. This means that `name` and `Name` are two different variables.
```js
var name = "Harry";
var Name = "Ron";
console.log(name); // will print "Harry"
console.log(Name); // will print "Ron"
```

[Go to next lecture](nextlectureslink)


