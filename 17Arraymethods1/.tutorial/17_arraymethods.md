# Array Methods
Array methods are functions that are called on an array. They can be used to perform operations on the elements of an array. In this lesson, we will learn about some of the most commonly used array methods.

Arrays come with a bunch of built-in methods that can be used to manipulate the array. Some methods return a new array, while others modify the existing array. It's important to note that these methods do not create a copy of the original array unless explicitly stated. Here are some of the most commonly used array methods:

## toString()
The `toString()` method converts an array to a string of comma-separated values. For example, the following code converts the array `fruits` to a string:
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.toString()); // Apple,Orange,Banana
console.log(typeof fruits.toString()); // string
```
## join()
The `join()` method also converts an array to a string. However, it takes an argument for the separator. For example, the following code converts the array `fruits` to a string using a hyphen as the separator:
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.join("-")); // Apple-Orange-Banana
console.log(typeof fruits.join("-")); // string
```
or lets try " and " as the separator:
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.join(" and ")); // Apple and Orange and Banana
```
## pop()
The `pop()` method removes the last element from an array and returns that element. For example, the following code removes the last element from the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.pop()); // Banana
console.log(fruits); // ["Apple", "Orange"]
```
## push()
The `push()` method adds one or more elements to the end of an array and returns the new length of the array. For example, the following code adds the string "Pineapple" to the end of the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.push("Pineapple")); // 4
console.log(fruits); // ["Apple", "Orange", "Banana", "Pineapple"]
```
## shift()
The `shift()` method removes the first element from an array and returns that element. For example, the following code removes the first element from the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.shift()); // Apple
console.log(fruits); // ["Orange", "Banana"]
```
## unshift()
The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array. For example, the following code adds the string "Pineapple" to the beginning of the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.unshift("Pineapple")); // 4
console.log(fruits); // ["Pineapple", "Apple", "Orange", "Banana"]
```

This was a quick overview of some of the most commonly used array methods. In the next lesson, we will explore some more of these.