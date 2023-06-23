# Primitives and Objects
In JavaScript, there are 7 primitive data types. The primitive data types are fundamental data types that are built into JavaScript. A good trick to remember these 7 data types is `"NNSSBBU"`:
- N - null
- N - number
- S - symbol
- S - string
- B - boolean
- B - bigint
- U - undefined

These data types are used to define the type of variables and the type of content that can be stored in them. For example:

```js
let nullVar = null;
let numVar = 29;
let boolVar = true;
let bigIntVar = BigInt("567");
let strVar = "harry";
let symbolVar = Symbol("I'm a nice symbol");
let undefinedVar = undefined;
```
It's important to use descriptive variable names instead of generic ones like a, b, c, etc.

## null vs undefined
The null data type represents the intentional absence of any object value, whereas the undefined data type indicates the absence of a defined value. For example:

```js
let nullVar = null; // value is intentionally nothing
let undefinedVar; // value is undefined or not defined
```
## Using `typeof`
We can use the `typeof` operator to determine the data type of a variable. For example:

```js
console.log(typeof numVar); // Output: number
console.log(typeof strVar); // Output: string
```
# Objects
Other than the 7 primitive data types, the non-primitive data type in JavaScript is the object. Objects are key-value pairs, used to map keys to values. We can create an object like this:

```js
const bioData = {
	name: "Harry",
	age: 29,
	likesJS: true,
	secret: undefined,
};
```
We can access an object's values in two ways: by using square brackets [] or by using dot notation . For example:

```js
console.log(bioData["name"]); // Output: Harry
console.log(bioData.age); // Output: 29
console.log(bioData["pet"]); // Output: undefined
```
**Note:** see how ["pet"] says undefined, this is because the key "pet" doesn't exist in the object bioData.

# Conclusion
Remember that variables are like containers, and data types define what type of content can be stored in them. Just like we wouldn't store our cookies in a container meant for pesticides, it's important to use the correct data types in JavaScript.

Another key point to remember is that objects are used to map keys to values and can be accessed using square brackets [] or dot notation .

```js
const harryMarks = {
	english: 100,
	maths: 80,
	chemistry: 40,
};

const shubhMarks = {
	english: 70,
	maths: 100,
	chemistry: 60,
};
```
In conclusion, understanding primitive data types and objects is important for writing effective JavaScript code. By using the correct data types, we can improve the efficiency and readability of our code.

