# More Array Methods
In the previous lesson, we learned some common array methods, lets explore some more of the most commonly used array methods in this lesson.

## delete()
The `delete()` method removes the element at the specified index from an array. For example, the following code removes the element at index 1 from the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
delete fruits[1];
console.log(fruits); // ["Apple", <1 empty item>, "Banana"]
```
Note that the `delete()` method does not change the length of the array. It simply removes the element at the specified index and replaces it with an empty item. Also, the `delete()` method does not return the removed element like the `pop()` method.

## concat()
The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. For example, the following code merges the arrays `fruits` and `vegetables`:
```js
let fruits = ["Apple", "Orange", "Banana"];
let vegetables = ["Potato", "Tomato", "Onion"];
let food = fruits.concat(vegetables);
console.log(food); // ["Apple", "Orange", "Banana", "Potato", "Tomato", "Onion"]
```
The `concat()` method can also be used to add items to an existing array. For example, the following code adds the string "Pineapple" to the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
let food = fruits.concat("Pineapple");
console.log(food); // ["Apple", "Orange", "Banana", "Pineapple"]
```
You can concatenate as many arrays as you want and the `concat()` method will merge them all into a single array.

Its also possible to add multiple items to an array using the `concat()` method. For example, the following code adds the strings "Pineapple" and "Mango" to the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
let food = fruits.concat("Pineapple", "Mango");
console.log(food); // ["Apple", "Orange", "Banana", "Pineapple", "Mango"]
```
## sort()
The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. For example, the following code sorts the array `fruits`:
```js
let fruits = ["Banana", "Orange", "Apple"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Orange"]
```
The `sort()` method can also be used to sort numbers in an array. For example, the following code sorts the array `numbers`:
```js
let numbers = [40, 100, 1, 5, 29, 10, 2907];
numbers.sort();
console.log(numbers); // [1, 10, 100, 2907, 29, 40, 5]
```
the `sort()` method modifies the original array and does not create a new array. Also, the `sort()` method sorts the elements as strings by default. This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the `sort()` method will produce incorrect result when sorting numbers.

To sort numbers correctly, you must provide a compare function. The compare function should return a negative, zero, or positive value, depending on the arguments. The following code sorts the array `numbers` in ascending order:
```js
let compare = (a, b) => {
    return a - b;
}
let numbers = [40, 100, 1, 5, 29, 10, 2907];
numbers.sort(compare);
console.log(numbers); // [1, 5, 10, 29, 40, 100, 2907]
```
In the above code, the compare function returns a negative value when `a` is less than `b`, zero when `a` is equal to `b`, and a positive value when `a` is greater than `b`. The `sort()` method sorts the elements by calling the compare function repeatedly.

## reverse()
The `reverse()` method reverses the order of the elements in an array. For example, the following code reverses the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
fruits.reverse();
console.log(fruits); // ["Banana", "Orange", "Apple"]
```
lets take a look at another example:
```js
let numbers = [40, 100, 1, 5, 29, 10, 2907];
numbers.reverse();
console.log(numbers); // [2907, 10, 29, 5, 1, 100, 40]
```

The `reverse()` method modifies the original array and does not create a new array.

## slice()
The `slice()` method returns a shallow copy of a portion of an array into a new array object. The original array will not be modified. For example, the following code returns a shallow copy of the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
let copy = fruits.slice();
console.log(copy); // ["Apple", "Orange", "Banana"]
```
The `slice()` method can also be used to return a shallow copy of a portion of an array into a new array object. For example, the following code returns a shallow copy of the first two elements of the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
let copy = fruits.slice(0, 2);
console.log(copy); // ["Apple", "Orange"]
```
The `slice()` method takes two arguments: the index at which to begin extraction, and the index at which to end extraction (excluded). If the second argument is omitted, the `slice()` method will extract all elements from the start index to the end of the array. If the first argument is omitted, the `slice()` method will extract all elements from the beginning of the array to the end index.

## splice()
The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified. For example, the following code removes the first element of the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
fruits.splice(0, 1);
console.log(fruits); // ["Orange", "Banana"]
```
The `splice()` method takes three arguments: the index at which to begin changing the array, the number of elements to remove, and the elements to add to the array. If the second argument is omitted, the `splice()` method will remove all elements from the start index to the end of the array. If the third argument is omitted, the `splice()` method will only remove elements from the array.

## indexOf()
The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present. For example, the following code returns the index of the element "Banana" in the array `fruits`:
```js
let fruits = ["Apple", "Orange", "Banana"];
let index = fruits.indexOf("Banana");
console.log(index); // 2
```

This was a quick overview of the most commonly used array methods. There are many more array methods that you can use to manipulate arrays. You can find a complete list of array methods in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). 

Remember, you don't have to memorize these, just understand the concepts. Everything is just a google search away!