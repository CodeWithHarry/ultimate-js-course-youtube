# Strings
A string is a collection of characters enclosed in quotes. In JavaScript, you can use either single quotes or double quotes to create a string. However, it's important to remember that once you choose a quote type to start your string, you must use the same type to close it. For example, 
```js
let name = "Harry";         //correct
let friend = 'Prakash'      //correct
let wrong = 'Harry";        //wrong, never do this!
```

Even a number enclosed in quotes is considered a string, like `"29"`. You can convert a number to a string using the `toString()` method. For example:
```js
let age = 29;
let ageAsString = age.toString();
console.log(typeof ageAsString); //string
```
By converting a number to a string, you can no longer perform mathematical operations on it. But you will be able to perform operations on it like concatenation.

# Template Literals
You can also use backticks \` (it is the button under your escape key) to create a string, called a template literal. This is useful when you need to embed variables within a string. Without template literals, you would need to concatenate strings and variables using the `+` operator. Here's an example:
```js
const name = "Rayyan";
const favorite = "Pepsi";
const sentence = name + " loves " + favorite;
console.log(sentence); // Output: "Rayyan loves Pepsi"
```
With template literals, you can embed variables within a string without using the `+` operator. We use the `${variable}` syntax to embed a variable within a string. Here's an example:
```js
const sentence = `${name} loves ${favorite}`;
console.log(sentence); // Output: "Rayyan loves Pepsi"
```
Notice how the variables are enclosed in `${}` within the backticks, and the string is automatically formatted with the values of the variables. This is called string interpolation.

# Escape Sequences
Sometimes, you may want to use a character that is already used in JavaScript. For example, you may want to use a single quote within a string. In this case, you can use an escape sequence. An escape sequence is a backslash `\` followed by a character that tells the JavaScript interpreter to interpret the following character in a special way. Here are some examples:
```js
let sentence = 'She said, "Hello!"';
console.log(sentence);                  // Output: She said, "Hello!"

sentence = "She said, \"Hello!\"";
console.log(sentence);                  // Output: She said, "Hello!"

sentence = "She said, \"Hello!\"";      // Output: She said, "Hello!"
```
* The first example uses a single quote to start the string and a single quote to end the string. Since the string contains a single quote, we can use a double quote without escaping it. 
* The second example uses a double quote to start the string and a double quote to end the string. Since the string contains a double quote, we can use a single quote without escaping it. 
* The third example uses a single quote to start the string and a single quote to end the string. Since the string contains a single quote, we use a backslash followed by a double quote to escape it.

Escape sequences can also be used to include special characters within a string. For example, \n represents a new line, and \t represents a tab. Here's an example:
```js
let sentence = "Hello\nWorld";
console.log(sentence); // Output:   Hello
                         //         World
```
In the above example, the `\n` escape sequence creates a new line after the word "Hello".

```js
let sentence = "Hello\tWorld";
console.log(sentence); // Output: Hello   World
```
In the above example, the `\t` escape sequence creates a tab after the word "Hello".

We can also use escape sequences together here's an example:
```js
let sentence = "Hello\n\tWorld";
console.log(sentence); // Output: Hello
                         //         World
```
In the above example, the `\n` escape sequence creates a new line after the word "Hello", and the `\t` escape sequence creates a tab after the word "Hello".

It's important to note that escape sequence characters are not treated as characters of the string. For example, `"apple\".length` will return 6, not 7, because the `\` is treated as an escape character, not a regular character.

# Conclusion
In this lesson, we learned about strings and how to create them. We also learned about template literals and escape sequences. Don't forget to practice what you've learned so far!