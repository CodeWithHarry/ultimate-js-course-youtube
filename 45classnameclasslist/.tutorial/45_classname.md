# Changing HTML Classes using JavaScript: className and classList
In HTML, we can use classes to group elements and apply the same styles to them using CSS. In JavaScript, we can manipulate classes to change the appearance or behavior of elements dynamically.

Consider the following HTML:
```html
<html>
<head>
    <title>Lesson 45</title>
</head>
<body>
    <div id="first">
        <span>Hello, this is a test text</span>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
and also add the following CSS:
```css
html, body {
    margin: 0;
    padding: 0;
}

.yellow {
    background-color: yellow;
    color: white;
}

.red {
    background-color: red;
    color: white;
}

.text-dark {
    color: black;
}
```
If we reload the web page we will see that no changes will be made because the CSS isn't added yet. But if we make changes in HTML to also include a CSS class we made, for example:
```html
<div id="first" class="red">
```
We will see the changes getting reflected. We can also add to see multiple classes:
```html
<div id="first" class="yellow text-dark">
```
**quick reminder:**

`Classes` are used to group similar elements together and apply styles or functionality to all of them at once. 

`ID`, on the other hand, is used to uniquely identify a specific element so that it can be targeted with JavaScript.

Now, let's reset the HTML to its original state with no classes and hop into `script.js`.

## className
We can use the `className` property to change the class of an element. let's try it out:
```js
first.className = "red text-dark";
```
If we reload the page, we will see that both classed i.e `red` and `text-dark` are applied to the element. But what if we want to add a class to the element without removing the previous ones? We can do that by using the `+=` operator:
```js
first.className += " yellow"; // it doesnt make sense with our example but it will add the class yellow to the element
```
## classList
The `classList` property is a read-only property that returns a live `DOMTokenList` collection of the class attributes of the element. In simple words, it returns an array of all the classes of the element.
```js
console.log(first.classList); // DOMTokenList(2) ["red", "text-dark", value: "red text-dark"]
```
classList has a few methods that we can use to manipulate the classes of the element. Let's try them out:

## classList.remove()
Now, what if we want to remove specifically the `text-dark` class only? For that, we have the `classList` method:
```js
first.classList.remove('text-dark');
```
This will get our task done.
## classList.add()
But wait, it looked better with that class! We can also add it back with:
```js
first.classList.add('text-dark');
```
## classList.toggle()
Now, if you forget whether to add or remove, you can simply use the `toggle` method. It will remove if already added or add if already removed. For example:
```js
first.classList.toggle('text-dark');
```
## classList.contains()
There is also a method used to check if a class is present or not called `contains`. It returns a boolean value. For example:
```js
console.log(first.classList.contains('text-dark')); // true
first.classList.toggle('text-dark');
console.log(first.classList.contains('text-dark')); // false
```

## Conclusion
Using JavaScript, we can easily change HTML classes on-the-fly using `className` and `classList`. classList provides us with additional methods such as `add()`, `remove()`, `toggle()`, and `contains()` that can make our task easier.