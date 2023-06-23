# InnerHTML, OuterHTML and other properties
In this lesson, we will learn about events and some important DOM properties that you should know.

## console.dir()
`console.dir()` is a method that is used to display an interactive list of the properties of a specified JavaScript object. When we use `console.dir()` on a DOM element, it shows us all the properties and methods available for that element.

Consider the following HTML code:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Lesson 41</title>
</head>
<body>
	Hello World
    <span>Hey I am span</span>

    <script src="script.js"></script>
</body>
</html>
```
If we log the span element using console.log(), like this:
```js
console.log(document.getElementsByTagName('span')[0]);
```
We get the following output:
```js
<span>Hey I am span</span>
```
However, if we use `console.dir()` instead of `console.log()`, like this:
```js
console.dir(document.getElementsByTagName('span')[0]);
```
It will show the output as an object and we can easily see all the attributes and functions available for that element. Try it out and see the difference!

## tagName and nodeName
`tagName` and `nodeName` are both properties of a DOM node. `tagName` exists only for element nodes, while `nodeName` is defined for all nodes (including element nodes, text nodes, and comment nodes).

## innerHTML and outerHTML
`innerHTML` is a property of a DOM element that is used to get or set the HTML content inside an element as a string. For example, if we log `first.innerHTML`, where `first` is a reference to the span element in the previous example, it will show the output as:
```js
console.log(first.innerHTML); // output: Hey I am span
```
We can also change the inner HTML of an element, like this:
```js
first.innerHTML = "Hey I am changed"; // reload the page to see the change
```


`outerHTML`, on the other hand, is a property of a DOM element that is used to get or set the HTML content of an element as a string, including the original element itself. For example, if we log `first.outerHTML`, where `first` is a reference to the span element in the previous example, it will show the output as:
```js
console.log(first.outerHTML); // output: <span>Hey I am span</span>
```
We can also change the outer HTML of an element, like this:
```js
first.outerHTML = "<h1>Hey I am changed</h1>"; // reload the page to see the change
```
It's important to note that `innerHTML` is only valid for element nodes. For other node types (such as text and comment nodes), we can use `nodeValue` or `data`. For example:
```js
first.outerHTML = "<div>Hey</div>";
console.log(document.body.firstChild); // " Hello World "
```
Here, the `firstChild` of the `body` element is a text node that contains the original content "Hello World". But if we log `document.body.firstChild.data`, it will show the output as:
```"\n  Hello world\n"```
The `nodeValue` property will also give the same result:
```js
console.log(document.body.firstChild.nodeValue); // "\n  Hello world\n"
```
## textContent
`textContent` is a property of a DOM element that is used to get or set the text content of an element as a string. For example, if we log `first.textContent`, where `first` is a reference to the span element in the previous example, it will show the output as:
```js
console.log(first.textContent); // output: Hey I am span
```
We can also change the text content of an element, like this:
```js
first.textContent = "Hey I am changed"; // reload the page to see the change
```

## hidden
`hidden` is a property of a DOM element that is used to get or set the visibility of an element. It is a boolean property, so it can be either `true` or `false`. In the above HTML code that we used, we can set the `hidden` property of the `span` element to `true`, like this:
```js
document.getElementsByTagName('span')[0].hidden = true;
```
Now, if we reload the page, we will see that the `span` element is no longer visible. We can also set the `hidden` property to `false` to make the element visible again.

## Summary
In this lesson, we learned about some important DOM properties that you should know. We learned about `console.dir()`, `tagName`, `nodeName`, `innerHTML`, `outerHTML`, `textContent` and `hidden`. We also learned how to use these properties to get or set the content of an element.