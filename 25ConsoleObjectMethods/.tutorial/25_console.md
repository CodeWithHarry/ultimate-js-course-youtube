# Console Object
Starting from this lesson, we will be running our JavaScript code on the web as we have learned in the previous two lessons. In this lesson, we will discuss the JavaScript console object. 

The console object has several methods, and the most common method we have been using until now is the `console.log()` method. Lets discuss some of the most common methods of the console object.

## console.log()
The `console.log()` method is used to print the output to the console. It is usually used for debugging purposes. It can be used to print the output of a variable, an array, an object, a string, a number, etc.
```javascript
console.log("Hello World"); // Prints "Hello World" to the console
```

## console.error()
The `console.error()` method is used to print the error message to the console. The error message is printed in red color.
```javascript
console.error("This is an error"); // Prints "This is an error" to the console as an error
```

## console.warn()
The `console.warn()` method is used to print the warning message to the console. The warning message is printed in yellow color.
```javascript
console.warn("This is a warning"); // Prints "This is a warning" to the console as a warning
```

## console.clear()
The `console.clear()` method is used to clear the console. If you have a lot of output in the console, you can use this method to clear the console.
```javascript
console.clear(); // Clears the console
```

## console.assert()
The `console.assert()` method is used to assert a condition. If the condition is true, nothing happens. If the condition is false, the error message is printed to the console.
```javascript
let x = 5;
console.assert(x == 5, "Error: x is not equal to 5"); // Output: no output
console.assert(x == 6, "Error: x is not equal to 6"); // Output: Assertion failed: Error: x is not equal to 6
```

## console.table()
The `console.table()` method is used to print the output in the form of a table. It is used to print the output of an array of objects.
```javascript
let students = [
    {name: "coco", age: 20, city: "New York"},
    {name: "wld", age: 21, city: "London"},
    {name: "ryn", age: 22, city: "Chicago"}
];
console.table(students);
```
Output:
| **(index)** | **age** | **city**   | **name** |
|:-----------:|:-------:|:----------:|:--------:|
| 0           | 20      | 'New York' | 'coco'   |
| 1           | 21      | 'London'   | 'wld'    |
| 2           | 22      | 'Chicago'  | 'ryn'    |

## console.time() and console.timeEnd()
The `console.time()` method is used to start the timer. The `console.timeEnd()` method is used to end the timer. The time taken by the code between the `console.time()` and `console.timeEnd()` methods is printed to the console.
```javascript
console.time("Time taken");
let x = 5;
let y = 6;
let z = x + y;
console.timeEnd("Time taken"); // time taken by the code between console.time() and console.timeEnd() is printed to the console
```

## Mini Exercise
Use the `console.time()` and `console.timeEnd()` methods to find the time taken by the for and while loops to print the numbers from 1 to 10000.
<details>
<summary>Solution</summary>

```javascript
console.time("Time taken by for loop");
for(let i = 1; i <= 10000; i++) {
    console.log(i);
}
console.timeEnd("Time taken by for loop");

console.time("Time taken by while loop");
let i = 1;
while(i <= 10000) {
    console.log(i);
    i++;
}
console.timeEnd("Time taken by while loop");
```
</details>