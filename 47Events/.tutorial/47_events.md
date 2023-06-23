# Introduction to Browser Events
An event is a signal that something has happened in a web page, such as a user clicking a button or submitting a form. In this lesson, we'll learn about some of the most common types of events and how to handle them in JavaScript.

Consider the following HTML code:
```html
<html>
<head>
	<title>Lesson 47</title>
</head>
<body>
    <div id="container">
        <button onclick="alert('hello')">Click me</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
As you can see, the `onclick` attribute is used to handle the button click event. In this case, when the button is clicked, an alert box with the message "hello" will appear.

Now, you might be wondering if you can write more complex JavaScript code in the `onclick` attribute. The answer is yes, but it's not practical to do so. For example, you could write:
```html
<button onclick="alert('hello'); let a=29; console.log(a+2878);">Click me</button>
```
However, this approach quickly becomes unwieldy and difficult to read. Instead, we can handle events in JavaScript code separate from our HTML markup.

Some important DOM events include:

* **Mouse events**: click (when a mouse button is clicked), contextmenu (when the right mouse button is clicked), mouseover/mouseout (when the mouse enters or leaves an element), mousedown/mouseup (when a mouse button is pressed or released), mousemove (when the mouse moves).
* **Keyboard events**: keydown and keyup.
* **Form element events**: submit, focus, blur, etc.
* **Document event**: DOMContentLoaded.

To explore some of these events, let's make some changes to the above HTML code. Replace the `div` element with the following code:
```html
<div id="container" onmouseenter="alert('you entered container')" onclick="console.log('clicked the div')">
```
Save the changes and reload the page in your browser. Now when you hover over the `div` element, an `alert` dialog will appear. If you click on the `div`, a message will be `logged` to the console.

Note that while it is possible to add event listeners using inline event handlers, it is generally considered better practice to add event listeners using JavaScript. Here's an example:
```js
let container = document.getElementById("container");
container.onclick = function() {
	console.log("Hey, this is logged from the JavaScript script!");
}
```
In the example above, we use the `getElementById` method to select the `div` element with the `id` attribute of "container". We then attach an event listener to this element using the `onclick` property.

It's important to note that if you add an event listener using JavaScript, any inline event handlers (such as the onclick attribute we used earlier) will be ignored.

## Conclusion
In this lesson, we've introduced the concept of browser events and explored some of the most common events that are available in the DOM. We've also looked at how to add event listeners to elements using both inline event handlers and JavaScript code. In the next lesson, we'll dive deeper into handling browser events using JavaScript.