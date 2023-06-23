# Exercise 3
In this exercise, you will create a website that tells random jokes. To get started, you can copy some jokes from the internet and store them in an array as shown below:

```javascript
let jokesArray = ["joke1", "joke2", "joke3"];
```
To generate a random number, you can use the `Math.random()` method. Here's an example of how you can use it to get a random joke from the array:
```js
let randomIndex = Math.floor(Math.random() * jokesArray.length);
let randomJoke = jokesArray[randomIndex];
```
This code will generate a random index between 0 and the length of the array minus 1, and then use that index to extract a random joke from the array.

You can then display the random joke on your webpage using JavaScript.

**Optionally**, you can also use CSS to style your webpage and make it look better :)

You can find the solution to this exercise [here](lesson40'slink)