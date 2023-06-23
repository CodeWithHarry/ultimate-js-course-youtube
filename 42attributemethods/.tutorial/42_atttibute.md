# HTML Attributes and their methods
In this lesson, we will be learning about HTML attributes and their methods. HTML attributes provide additional information about HTML elements, and they can be accessed and manipulated using JavaScript.

Consider the following HTML code:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Lesson 41</title>
</head>
<body>
	<div id="first" class="hey">
        Hey, I am the first div
    </div>

    <script src="script.js"></script>
</body>
</html>
```
To access the attributes of an element in JavaScript, we can use the `getAttribute()` method. For example:
```js
let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a); // it will print "hey" 
```
We can also check if an element has a specific attribute using the `hasAttribute()` method. For example:
```js
console.log(first.hasAttribute("class")); // true
console.log(first.hasAttribute("style")); // false
```
Now, to add or modify an attribute, we can use the `setAttribute()` method. For example:
```js
first.setAttribute("hidden", "true"); // reload the page to see the changes, it will hide the div
```
This will add a `hidden` attribute to the `first` element. We can also remove an attribute using the `removeAttribute()` method. For example:
```js
first.removeAttribute("hidden"); // reload the page to see the changes, it will show the div because we removed the hidden attribute
```
We can also modify an existing attribute using this method. For example:
```js
first.setAttribute("class", "true forReal");
```
This will change the "class" attribute value to "true forReal" You can use Inspect Element to see the changes.

We can also remove an attribute using the `removeAttribute()` method. For example:
```js
first.removeAttribute("class");
```
his will remove the "class" attribute from the "first" div element. We can also get a list of all attributes of an element using the attributes property. For example:
```js
console.log(first.attributes);
```
This will log a NamedNodeMap object of all attributes of the "first" div element.

In HTML5, we can also create custom attributes. However, to avoid naming conflicts with future updates of HTML or JavaScript, it is recommended to prefix custom attributes with "data-". For example:
```html
<div id="first" class="hey" data-game="mario" data-player="Harry">
    Hey, I am the first div
</div>
```
To access custom attributes in JavaScript, we can use the dataset property. For example:
```js
console.log(first.dataset);
```
This will log a DOMStringMap object containing all the custom attributes of the "first" div element. We can also access a specific custom attribute using its name. For example:
```js
console.log(first.dataset.game);
```
This will log the value of the "game" custom attribute, which is "mario" in this case.

## Summary
In summary, HTML attributes provide additional information about HTML elements, and they can be accessed and manipulated using JavaScript. We can use methods such as `getAttribute()`, `setAttribute()`, `removeAttribute()`, and `hasAttribute()` to work with HTML attributes. We can also create custom attributes and access them using the dataset property. It is recommended to prefix custom attributes with "data-" to avoid naming conflicts with future updates of HTML or JavaScript.