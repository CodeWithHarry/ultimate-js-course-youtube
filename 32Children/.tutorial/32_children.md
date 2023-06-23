# Accessing Children of an Element
In the previous lesson, we learned about the Document Object Model (DOM) and how it represents an HTML document as a tree. Now, we will learn about the concept of children and how to access the children of any element.

## What are Children?
In the DOM tree, an element can have zero or more children. A child is an element that is directly inside another element. For example, in the following HTML code, the `body` element has three children: `h1`, `p`, and `script`.
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>I am Child of body</h1>
    <p>I am also child of body and h1 is my sibling</p>
    <script src="script.js"></script>
</body>
</html>
```
* In the above example, the `body` element has three children: `h1`, `p`, and `script`. 
* The `h1` and `p`  and `script` elements are children of the `body` element. 
* The `h1` and `p` and `script` elements are siblings because they are children of the same parent element

## Siblings, Parents, Ancestors, and Descendants

**Siblings**: Siblings are elements that share the same parent. In the given code, the `<h1>` and `<p>` elements are siblings because they share the same parent, which is the `<body>` element.

**Parents**: The parent element of any given element is the element that contains it. In the given code, the parent of the `<h1>` and `<p>` elements is the `<body>` element. Similarly, the parent of the `<body>` element is the `<html>` element.

**Ancestors**: Ancestors are elements that are above a given element in the DOM tree hierarchy. In the given code, the `<html>` element is the ancestor of the `<body>`, `<h1>`, and `<p>` elements.

**Descendants**: Descendants are elements that are below a given element in the DOM tree hierarchy. In the given code, the `<body>`, `<h1>`, and `<p>` elements are descendants of the `<html>` element.

By understanding these relationships, we can easily traverse the DOM tree and access elements based on their position relative to other elements.

For example, to access the `<link>` element in the given code, we can use the document.head property to get the `<head>` element, and then use the querySelector method to select the `<link>` element by its `rel` attribute:

```js
document.head.querySelector('link[rel="stylesheet"]'); //output: <link rel="stylesheet" href="style.css">
```
Dont worry if you dont understand the above code. We will learn about the querySelector method in the upcoming lessons.

## FirstChild, LastChild, and ChildNodes
We can access the children of an element using the `firstChild`, `lastChild`, and `childNodes` properties.
* **firstChild**: returns the first child of the element.
* **lastChild**: returns the last child of the element.
* **childNodes**: returns a list of all the child nodes of the element.

For example, to access the first child, last child, and all child nodes of the `body` element, we can use the following code:

```js
console.log(document.body.firstChild); // <h1>I am Child of body</h1>
console.log(document.body.lastChild); // <script src="script.js"></script>
console.log(document.body.childNodes); // NodeList [ #text, <h1>, #text, <p>, #text, <script> ]
```
Note that the `childNodes` property returns a `NodeList` object, which is not an actual array. To convert it into an array, we can use the `Array.from()` method.
```js
console.log(Array.from(document.body.childNodes));
```
It's also worth noting that the following statements are always true:
```js
element.childNodes[0] === element.firstChild;
element.childNodes[element.childNodes.length - 1] === element.lastChild;
```
## Conclusion
In this lesson, we learned about the concept of children and how to access the children of any element. We also learned about the `firstChild`, `lastChild`, and `childNodes` properties and how to use them to access the children of an element.