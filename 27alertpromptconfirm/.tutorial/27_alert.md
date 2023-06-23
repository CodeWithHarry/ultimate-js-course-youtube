# Alert, Prompt and Confirm

In this lesson, we will learn how to use the `alert()`, `prompt()` and `confirm()` functions. These functions are used to display a message to the user, get input from the user and ask the user to confirm something.

## alert()
The `alert()` function displays a message to the user in a pop-up window. The message is displayed in a modal dialog box. The user has to click the OK button to close the dialog box. It can also be used in place of the `console.log()` function.

```javascript
alert("Your alert is working!"); // displays "Your alert is working!" in a pop-up window
```

## prompt()
`prompt()`  displays a message to the user in a pop-up window and waits for the user to enter a value. The value entered by the user is then saved in a variable.
```javascript
alert("You will be asked your name after you press OK.");
let name = prompt("What is your name?"); // user input will be stored in name variable
alert("Hello " + name + "!"); // displays "Hello [user input]!" in a pop-up window
```
You can also set a default value for the prompt using the second parameter. The default value will appear in the prompt as a pre-written text.
```javascript
let num = prompt("Enter a number", 29); // the default value is 29
alert("You entered " + num); // displays "You entered [user input]!" in a pop-up window
```
You can override the default value by entering a new value in the prompt.

## confirm()
`confirm()` displays a message to the user in a pop-up window and waits for the user to click either the OK or Cancel button. The function returns `true` if the user clicks OK and `false` if the user clicks Cancel. Based on the value returned by the function, you can perform different actions.
```javascript
let result = confirm("Do you want to continue?"); // displays a message to the user in a pop-up window
if (result) {
  alert("You clicked OK!"); // displays "You clicked OK!" in a pop-up window
} else {
  alert("You clicked Cancel!"); // displays "You clicked Cancel!" in a pop-up window
}
```

***Note:** You need to use these functions on a browser to see the results, refer to previous lessons to learn how to run JavaScript code on a browser.*

These functions are very useful for getting input from users and displaying messages to them. However, they are considered old-fashioned and are not commonly used in modern websites. Nonetheless, they are important concepts to know for basic JavaScript programming.

I hope you found this lesson helpful. See you in the next one!