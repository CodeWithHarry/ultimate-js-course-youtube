# Operators and Expressions
In JavaScript, an expression is a combination of values, variables, and operators that can be evaluated to produce a result. An expression can be as simple as a single variable, or it can be complex, involving many different parts. For example, the expression `29` is a valid JavaScript expression, as is `a + b * 3`, which involves two variables (`a`and `b`), a constant (`3`), and two operators (`+` and `*`).

In programming, we often use operators in our computations. An operator is a symbol that tells JavaScript to perform a certain mathematical or logical operation. For example, when we write `20 + 9`, `20` and `9` are our operands, and `+` is our operator, and `29` is our result. It's not always the case that we have one operator and two operands. For example, if we have `!true`, we have one operator (`!`), one operand (`true`), and `false` is our result.

# Arithmetic Operators
Arithmetic operators are used to perform mathematical calculations. Here are the most common arithmetic operators in JavaScript:

| **Operator** | **Description** | **Example**           |
|:--------------:|:-----------------:|:------------------------:|
| `+`            | Addition        | `3 + 5` evaluates to `8`   |
| `-`            | Subtraction     | `7 - 2` evaluates to `5`  |
| `*`            | Multiplication  | `4 * 6` evaluates to `24`  |
| `/`            | Division        | `12 / 4` evaluates to `3`  |
| `%`            | Modulus         | `10 % 3` evaluates to `1`  |
| `**`           | Exponentiation  | `2 ** 3` evaluates to `8`  | 

In the above table, the first column represents the operator symbol, the second column describes what it does, and the third column provides an example of its usage. Here are some examples of arithmetic operators in action:

```js
let a = 5;
let b = 3;

// Addition
let c = a + b; // c is now 8

// Subtraction
let d = a - b; // d is now 2

// Multiplication
let e = a * b; // e is now 15

// Division
let f = a / b; // f is now 1.6666666666666667

// Modulus
let g = a % b; // g is now 2

// Exponentiation
let h = a ** b; // h is now 125
```


In the case of the **modulus** operator (`%`), it returns the remainder after division. For example, `10 % 3` evaluates to `1`, since `10` divided by `3` leaves a remainder of `1`.

The **exponential** operator (`**`) raises the first operand to the power of the second operand. For example, `2 ** 3` evaluates to `8`, since `2` raised to the power of `3` is `8`.

In addition to the basic arithmetic operators, JavaScript also has some shorthand operators that combine arithmetic with assignment. Here are some examples:


| **Operator** | **Description**               | **Example**               |
|:--------:|:-------------------------:|:--------------------------------:|
| `+=`       | Addition assignment       | `a += b` is the same as `a = a + b`  |
| `-=`       | Subtraction assignment    | `a -= b` is the same as `a = a - b`  |
| `*=`       | Multiplication assignment | `a *= b` is the same as `a = a * b`  |
| `/=`       | Division assignment       | `a /= b` is the same as `a = a / b`  |
| `%=`       | Modulus assignment        | `a %= b` is the same as `a = a % b`  |
```js
let x = 5;

// Addition assignment
x += 3; // equivalent to x = x + 3
console.log(x); // Output: 8

// Subtraction assignment
x -= 2; // equivalent to x = x - 2
console.log(x); // Output: 6

// Multiplication assignment
x *= 4; // equivalent to x = x * 4
console.log(x); // Output: 24

// Division assignment
x /= 3; // equivalent to x = x / 3
console.log(x); // Output: 8

// Modulus assignment
x %= 5; // equivalent to x = x % 5
console.log(x); // Output: 3
```

before we study comparison operators, heres an importanf concept to understand, **Post increment and Pre increment**. Have a look at the following code sample:
```js
let a = 5;

// Post-increment: returns the value of a, then increments it
console.log(a++); // output: 5
console.log(a);   // output: 6

// Pre-increment: increments the value of a, then returns it
console.log(++a); // output: 7

// Post-decrement: returns the value of a, then decrements it
console.log(a--); // output: 7
console.log(a);   // output: 6

// Pre-decrement: decrements the value of a, then returns it
console.log(--a); // output: 5
```
In the code above, we first initialize the variable `a` with the value `5`. Then we use the post-increment operator (`a++`) to return the value of `a` (which is `5`), and then increment it to `6`. We log the value of `a++` to the console and get the output `5`, and then log the value of a to the console and get the output `6`.

Next, we use the pre-increment operator (`++a`) to increment the value of `a` to `7`, and then return its new value. We log the value of `++a` to the console and get the output `7`.

Then, we use the post-decrement operator (`a--`) to return the value of `a` (which is `7`), and then decrement it to `6`. We log the value of `a--` to the console and get the output `7`, and then log the value of `a` to the console and get the output `6`.

Finally, we use the pre-decrement operator (`--a`) to decrement the value of `a` to `5`, and then return its new value. We log the value of `--a` to the console and get the output `5`.

# Comparison Operators
Comparison operators are used to compare two values and return a Boolean value (`true` or `false`) depending on whether the comparison is true or false. Here are the most common comparison operators in JavaScript:

| **Operator** | **Description**          | **Example**                  |
|:------------:|:------------------------:|:-----------------------------:|
| `==`           | Equal to                 | `5 == 5` evaluates to `true`      |
| `===`          | Strict equal to          | `5 === "5"` evaluates to `false`  |
| `!= `          | Not equal to             | `5 != 4` evaluates to `true`      |
| `!==`          | Strict not equal to      | `5 !== "5"` evaluates to `true`   |
| `>`            | Greater than             | `6 > 4` evaluates to `true`       |
| `<`            | Less than                | `6 < 4` evaluates to `false`      |
| `>=`           | Greater than or equal to | `6 >= 6` evaluates to `true`      |
| `<=`           | Less than or equal to    | `6 <= 4` evaluates to `false`     |

The first four operators in the table above compare two values for equality. The double equal sign (`==`) checks if two values are equal to each other, while the triple equal sign (`===`) checks if they are strictly equal to each other. The difference between the two is that the double equal sign performs type coercion, meaning that it will convert one value to match the other's type before making the comparison, while the triple equal sign requires both values to be of the same type.

The not equal to operator (`!=`) returns true if the values being compared are not equal, while the strictly not equal to operator (`!==`) returns true if the values are not only different, but also of a different type.

The last four operators in the table above compare two values to see which is greater, less than, or equal to the other. These operators work on both numbers and strings. When comparing strings, JavaScript compares the characters in the strings based on their Unicode code points.

Here are some examples of comparison operators in action:

```js
console.log(5 > 2); // true
console.log(5 == "5"); // true (type coercion is performed)
console.log(5 === "5"); // false (different types)
console.log(5 != "6"); // true
console.log(5 !== "5"); // true (different types)
```

In the above examples, the first comparison returns `true` because `5` is greater than `2`. The second comparison returns `true` because the double equal sign performs type coercion, and `5` and `"5"` are considered equal. The third comparison returns `false` because the triple equal sign requires both values to be of the same type, and `5` and `"5"` are not of the same type. The fourth comparison returns `true` because `5` is not equal to `6`. The fifth comparison returns `true` because `5` and `"5"` are not only different, but also of different types.



# Logical Operators

| **Operator** | **Description** | **Example** |
|:------------:|:----------------:|:------------:|
| `&&`           | Logical AND.  Returns true if both operands are true, otherwise false.     | `true && true` evaluates to `true` |
| `\|\|`         | Logical OR. Returns true if at least one of the operands is true, otherwise false.      | `true \|\| false` evaluates to `true` |
| `!`            | Logical NOT. Returns the opposite of the operand. If it's true, it returns false. If it's false, it returns true.      | `!true` evaluates to `false` |

In JavaScript, there are three logical operators: `&&` (logical AND), `||` (logical OR), and `!` (logical NOT).

The && operator returns true if both operands are truthy, and false otherwise. Here's an example:
```js
const a = 10;
const b = 20;
const c = 30;

console.log(a < b && b < c); // true
console.log(a < b && b > c); // false
```

In the first console.log() statement, both `a < b` and `b < c` are `true`, so the overall expression evaluates to `true`. In the second console.log() statement, `b > c` is `false`, so the overall expression evaluates to false.

The `||` operator returns `true` if at least one of the operands is truthy, and `false` otherwise. Here's an example:

```js
const x = 5;
const y = 10;

console.log(x > 3 || y < 5); // true
console.log(x < 3 || y < 5); // false
```
In the first console.log() statement, `x > 3` is `true`, so the overall expression evaluates to `true`. In the second console.log() statement, both `x < 3` and `y < 5` are `false`, so the overall expression evaluates to `false`.

The `!` operator returns the opposite of the operand's truthiness. If the operand is truthy, `!` returns `false`. If the operand is falsy, `!` returns `true`. Here's an example:
```js
const z = 10;

console.log(!(z > 5)); // false
console.log(!(z < 5)); // true
```
In the first console.log() statement, `z > 5` is `true`, so `!(z > 5)` evaluates to `false`. In the second console.log() statement, `z < 5` is `false`, so `!(z <br 5)` evaluates to `true`.
</br>
</br>
Phew that was a lot to grasp, if you dindt understand anything, sit back, relax for a while and try to understand it again. we gotta keep our foundations strong.