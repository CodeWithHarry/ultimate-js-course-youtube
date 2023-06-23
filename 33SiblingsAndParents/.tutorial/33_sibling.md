# Parents and Siblings of an Elemen
In previous lesson, we disussed children of an element and also touched upon the concept of siblings and parents. In this lesson, we will discuss these concepts in detail.

## Siblings
Siblings are the elements that are on the same level of the DOM tree. For example, in the following HTML code, the two `<p>` elements are siblings of each other.
```html
<p>First paragraph</p>
<p>Second paragraph</p>
```
In the following HTML code, the `<p>` and `<div>` elements are siblings of each other.
```html
<p>First paragraph</p>
<div>Some content</div>
```

## Parents
Parents are the elements that are above the current element in the DOM tree. For example, in the following HTML code, the `<div>` element is the parent of the `<p>` element.
```html
<div>
  <p>First paragraph</p>
</div>
```
In the following HTML code, the `<body>` element is the parent of the `<div>` element.
```html
<body>
  <div>
    <p>First paragraph</p>
  </div>
</body>
```

## Next/Right and Previous/Left Siblings
In the DOM tree, the siblings of an element are arranged in a linear fashion. The element that is to the right of the current element is called the next sibling and the element that is to the left of the current element is called the previous sibling. In the following HTML code, the `<p>` element is the next sibling of the `<div>` element and the `<div>` element is the previous sibling of the `<p>` element.
```html
<div>Some content</div>
<p>Some text</p>
```

## .nextElementSibling and .previousElementSibling
Consider the following HTML code.
```html
<html>
<head>
    <title>My Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <div class="first">first</div>
        <div class="second">second</div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
In the above code, the `<div>` element with class `first` is the previous sibling of the `<div>` element with class `second`. We can access the previous sibling of an element using the `.previousElementSibling` property. Similarly, we can access the next sibling of an element using the `.nextElementSibling` property. Consider the following JavaScript code.
```javascript
console.log(document.body.firstElementChild.nextElementSibling); // <div class="second">second</div>
```

## .parentElement and .parentNode
Both `parentNode` and `parentElement` properties return the parent node of an element. The only difference between them is that parentElement returns `null` if the parent node is not an element node, while parentNode returns the parent node regardless of its node type.

For example, consider the following HTML code:
```html
<div>
    <p>Some text</p>
</div>
```
If we select the `<p>` element and use `parentNode`, it will return the `<div>` element, which is the direct parent of `<p>`
```js
let p = document.querySelector('p');
console.log(p.parentNode); // returns <div> element
```
However, if we use `parentElement` instead, it will also return the `<div>` element:
```js
let p = document.querySelector('p');
console.log(p.parentElement); // returns <div> element
```
In this case, both `parentNode` and `parentElement` return the same result, **because the parent of <p> is an element.**

Now, let's consider another example:
```html
<p>Some text</p>
```
If we select the `<p>` element and use `parentNode`, it will return the `<body>` element, which is the direct parent of `<p>`:
```js
let p = document.querySelector('p');
console.log(p.parentNode); // returns <body> element
```
However, if we use `parentElement` instead, it will return `null`, because the parent of `<p>` is not an element, but the root node of the document:
```js
let p = document.querySelector('p');
console.log(p.parentElement); // returns null
```
In this case, `parentNode` returns the correct result, while `parentElement` returns `null`.

## conclusion
In this lesson, we discussed the concept of siblings and parents. We also discussed the `.nextElementSibling`, `.previousElementSibling`, `.parentElement` and `.parentNode` properties. We also discussed the difference between `.parentElement` and `.parentNode`. 