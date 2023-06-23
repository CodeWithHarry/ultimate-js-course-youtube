# HTML Insertion Methods
In HTML, there are several ways to insert new content or modify existing content dynamically using JavaScript. These are known as HTML insertion methods.

Consider the following HTML:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Lesson 43</title>
</head>
<body>
	<div class="container">
        <div id="first">I am first element</div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
## Classic Way to Insert HTML
A classical way to insert HTML is by using the `innerHTML` property. For example, let's say we want to add an `h1` element with the text "Hello World" inside the first `div`. We can do this using the following code:
```js
let a = document.getElementsByTagName('div')[0];
a.innerHTML = '<h1>Hello World</h1>';
```
We could also append new HTML to the existing HTML inside the `div` element. For example:
```js
let a = document.getElementsByTagName('div')[0];
a.innerHTML = a.innerHTML + '<h1>Hello World</h1>';
```
This will retain the old content and add a new `h1` element.
## Using createElement to Insert HTML
Another way to insert HTML is by creating an element using `createElement` method and then appending it to the target element using `appendChild`. For example, let's say we want to add an `h1` element with the text "Hello World" inside the first `div`. We can do this using the following code:
```js
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World</h1>';
a.appendChild(div);
```
This will create a new `div` element and add an `h1` element with the text "Hello World" inside it as a child element of the first `div`.

# Other HTML Insertion Methods
Let's modify the previous HTML code to the following:
```html
<html>
<head>
	<title>Lesson 43</title>
</head>
<body>
I am outside div (start)
<div class="container">
	I am start of this container
        <div id="first">I am first element</div>
	I am  end of this container
</div>
I am outside div(end)
    <script src="script.js"></script>
</body>
</html>
```
* `a.append(div)`: This will append the div element as the last child of the a element. In our case, it will add the div element as a child of the first div.
* `a.prepend(div)`: This will add the div element as the first child of the a element. In our case, it will add the div element as the first child of the first div.
* `a.before(div)`: This will add the div element before the a element. In our case, it will add the div element before the first div.
* `a.after(div)`: This will add the div element after the a element. In our case, it will add the div element after the first div.
* `a.replaceWith(div)`: This will replace the a element with the div element. In our case, it will replace the first div with the div element.

All of these methods can be used to modify the HTML content dynamically using JavaScript. Here is the complete code, **comment out the code you don't want to run** and test the results:
```js
// Using innerHTML
let a = document.getElementsByTagName('div')[0];
a.innerHTML = '<h1>Hello World</h1>';

// Using createElement and appendChild
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (append)</h1>';
a.appendChild(div);

// Using prepend
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (prepend)</h1>';
a.prepend(div);

// Using before
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (before)</h1>';
a.before(div);

// Using after
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (aftwe)</h1>';
a.after(div);

// Using replaceWith
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (replaced)</h1>';
a.replaceWith(div);
```

# Summary
HTML insertion methods allow us to add, remove or replace HTML elements and content dynamically using JavaScript. These methods include `innerHTML`, `createElement`, `appendChild`, `prepend`, `before`, `after`, and `replaceWith`. We can choose the appropriate method depending on our specific use case and requirements.