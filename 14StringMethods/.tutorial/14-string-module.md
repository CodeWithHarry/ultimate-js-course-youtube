# String Methods
In the last lesson, we discussed what strings are, how to make and use them. Now we will be having a look at some methods of strings by using which you can easily manipulate the strings. Maybe you want to convert your sentence into uppercase, maybe you want to replace a particular word in a sentence, etc. You can do all of this easily with string methods.

## String Length
The `length` property of a string returns the number of characters in the string.
```js
let name = "Harry";
console.log(name.length); // Output: 5
```
Note that the `length` property is not a method. It is a property of the string object. You do not need to use parentheses to access it. Here is a table displaying the difference between a method and a property:
| **Property**                                                                                                                          | **Method**                                                                                                                                                                        |
|:-------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| A property is a value that belongs to an object, such as a string's length or a number's value.                                       | A method is a function that belongs to an object, such as a string's `toUpperCase()` or an array's `push()` method.                                                                    |
| You can access a property using dot notation, without using parentheses. For example, `string.length` returns the length of the string. | You call a method using parentheses, which may or may not take arguments. For example, `string.toUpperCase()` returns a new string with all characters in uppercase.                 |
| Properties cannot be called like a function, they just return a value. For example, `string.length()` is not valid.                     | Methods can be called like a function, and they perform an action on the object they belong to. For example, `string.toUpperCase()` is valid and returns a new string in uppercase.  |
| Properties are used to get information about an object.                                                                               | Methods are used to perform an action on an object.                                                                                                                                |


## toUpperCase() and toLowerCase()
The `toUpperCase()` method converts all characters in a string to uppercase, while the `toLowerCase()` method converts all characters to lowercase.
Note: If a string is already in uppercase or lowercase, these methods do nothing and return the original string.
```js
let name = "Harry";
console.log(name.toUpperCase()); // Output: HARRY
console.log(name.toLowerCase()); // Output: harry
```
## slice()
The `slice()` method returns a section of a string. You can provide two arguments to the method: the starting index and the ending index (not inclusive) of the substring you want to extract.
```js
let name = "Harry";
console.log(name.slice(2, 4)); // Output: rr
console.log(name.slice(1, 3)); // Output: ar
console.log(name.slice(2)); // Output: rry
```
If you omit the second argument, `slice()` will return the remainder of the string starting from the provided index:
```js
console.log(name.slice(2)); // Output: rry
```
## replace()
The `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement string.
```js
let name = "Harry";
console.log(name.replace("ry", "is")); // Output: Hais
console.log(name.replace("Ry", "is")); // This will not work because "Ry" is not present in the string
```
Note that `replace()` is case-sensitive.

## trim()
The `trim()` method removes whitespace from both ends of a string.
```js
let spacedName = "       Harry        ";
console.log(spacedName.trim()); // Output: Harry
```
## indexOf()
The `indexOf()` method returns the index of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs.
```js
let name = "Harry";
console.log(name.indexOf("r")); // Output: 2
console.log(name.indexOf("R")); // This will give -1 because "R" is not present in the string
```
Note that `indexOf()` is case-sensitive.

## Indexing
You can access individual characters in a string using indexing. In JavaScript, indexing starts at 0.
```js
let name = "Harry";
console.log(name); // Output: Harry
console.log(name[0]); // Output: H
console.log(name[1]); // Output: a
console.log(name[2]); // Output: r
console.log(name[3]); // Output: r
console.log(name[4]); // Output: y
```
</br>
It's important to remember that all string methods return a new string, leaving the original string unchanged. If you want to make changes to a string, you'll need to store the result of the method call in a new variable.

```js
let name = "Harry";
let upperCaseName = name.toUpperCase();
console.log(upperCaseName); // Output: HARRY
console.log(name); // Output: Harry (original string is unchanged)
```
These are some of the most important string methods, but there are many others that you can learn and use in your code. Remember that you don't have to memorize all of these methods; instead, focus on understanding how they work and practice using them in your code.