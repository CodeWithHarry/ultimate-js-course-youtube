Ok so we will finally be discussing arrays now, they are a very cruicial part of javascript and are used in almost every program, so make sure you understand them well.

# Arrays
Arrays are a way to store multiple values in a single variable. They are very useful when you want to store a list of values and perform operations on them. Arrays are declared using square brackets `[]` and the values are separated by commas `,`. For example, the following code declares an array named `arr` with 3 values:
```js
let arr = [1, 2, 3];
```
The values in an array are called elements. The first element of an array is at index 0, the second element is at index 1, and so on. So, in the above example, the value `1` is at index 0, the value `2` is at index 1, and the value `3` is at index 2.

## Creating an Array
We can create an array of marks and store different marks in it as follows:
```js
let marks = [90, 85, 95, 80];
console.log(marks); // [90, 85, 95, 80]
```
Arrays can have different data types as well. For example, we can create an array with a string, a number, and a boolean as follows:
```js
let arr = ["Hello", 10, true];
console.log(arr); // ["Hello", 10, true]
```
We can also create an empty array as follows:
```js
let arr = [];
console.log(arr); // []
```
Why would we want to create an empty array? Well, we can add elements to an array later on. We will see how to do that later in this lesson.

## Accessing Elements of an Array
We can access the elements of an array using the index of the element. For example, the following code accesses the first element of the array `marks`:
```js
let marks = [90, 85, 95, 80];
console.log(marks[0]); // 90
```
lets create a new array `fruits` and try accessing the elements of the array:
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Banana
```
We can also access the elements of an array using negative indices. For example, the following code accesses the last element of the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits[-1]); // Banana
```
The index `-1` refers to the last element of the array, `-2` refers to the second last element, and so on. So, the index `-1` is equivalent to the index `fruits.length - 1`.

If we try to access an index that is not present in the array, it will return undefined.
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits[3]); // undefined
```
### Array Length
We can find the length of an array using the `.length` property, which returns the number of elements in the array.
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.length); // 3
```
## Adding and Changing Array Values:
**Unlike strings, arrays are mutable**, which means we can change or add values to them. To add a new value to an array, we need to specify the index where we want to add the value and assign the new value to it. If the index does not exist in the array, it will create a new element with the assigned value, and the elements in the array after that index will be shifted to the right.
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits); // ["Apple", "Orange", "Banana"]
console.log(fruits.length); // 3
fruits[3] = "Grapes";
console.log(fruits); // ["Apple", "Orange", "Banana", "Grapes"]
console.log(fruits.length); // 4
```
In the above example, we added a new element to the array `fruits` at index 3. The value of the element at index 3 is `"Grapes"`. The length of the array is now 4.

We can also change the value of an existing element in an array. For example, the following code changes the value of the first element of the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits); // ["Apple", "Orange", "Banana"]
console.log(fruits.length); // 3
fruits[0] = "Pinapple";
console.log(fruits); // ["Pinapple", "Orange", "Banana"]
console.log(fruits.length); // 3
```
In the above example, we changed the value of the first element of the array `fruits` to `"Pinapple"`. Note that the length of the array is still 3, this is because we did not add or remove any elements from the array, we just modified the value of an existing element.

ok so last thing to take away from this lesson is that arrays are not primitive types; they are a type of object in JavaScript. We can check the type of an array using the `typeof` operator.
```js
let fruits = ["Apple", "Orange", "Banana"];
console.log(typeof fruits); // object
```
In the next lesson, we will learn about the different methods that can be used to manipulate arrays. It will be a very interesting lesson!