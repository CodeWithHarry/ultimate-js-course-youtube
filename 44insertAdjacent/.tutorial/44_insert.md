# insertAdjacentHTML, insertAdjacentElement and insertAdjacentText
in last lesson we learned about HTML insertion methods. In this lesson we will learn about the `insertAdjacentHTML`, `insertAdjacentElement` and `insertAdjacentText` methods.

before we begin, consider the following HTML:
```html
<html>
<head>
	<title>Lesson 44</title>
</head>
<body>
    <div id="first">
        I am first element
    </div>
    <script src="script.js"></script>
</body>
</html>
```
## insertAdjacentHTML
The `insertAdjacentHTML` method inserts a string of text as HTML into a specified position relative to the element. The following code shows how to use the `insertAdjacentHTML` method:
```js
let a = document.getElementById('first');
a.insertAdjacentHTML('beforebegin', '<div classs="test">beforebegin</div>');
```
The first parameter is the position where the HTML string will be inserted. The following are the possible values:
* `beforebegin`: Before the element itself.
* `beforeend`: Just inside the element, after its last child.
* `afterbegin`: Just inside the element, before its first child.
* `afterend`: After the element itself.

here is the result of the above code:
```html
<html>
<head>
    <title>Lesson 44</title>
</head>
<body>
    <div classs="test">beforebegin</div>
    <div id="first">
        I am first element
    </div>
    <script src="script.js"></script>
</body>
</html>
```
if we want to see the result of all the positions, we can use the following code:
```js
let a = document.getElementById('first');
a.insertAdjacentHTML('beforebegin', '<div classs="test">beforebegin</div>');
a.insertAdjacentHTML('afterbegin', '<div classs="test">afterbegin</div>');
a.insertAdjacentHTML('beforeend', '<div classs="test">beforeend</div>');
a.insertAdjacentHTML('afterend', '<div classs="test">afterend</div>');
```
and here is the result:
```html
<html>
<head>
    <title>Lesson 44</title>
</head>
<body>
    <div classs="test">beforebegin</div>
    <div id="first">
        <div classs="test">afterbegin</div>
        I am first element
        <div classs="test">beforeend</div>
    </div>
    <div classs="test">afterend</div>
    <script src="script.js"></script>
</body>
</html>
```
try it out and see in your browser.

## Node removal
The `remove` method removes the element from the DOM. The following code shows how to use the `remove` method:
```js
let a = document.getElementById('first');
a.remove();
```
here is the result:
```html
<html>
<head>
    <title>Lesson 44</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```
If you open inspect element and reload the page, you will see that `first` div appeas for a second and then suddenly disappears as the js is executed.

we hope you enjoyed this lesson. see you in the next one!