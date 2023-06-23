# Matches, Closest and Contains
When working with the Document Object Model (DOM) in JavaScript, you will often need to traverse the DOM tree to find specific elements or perform certain actions on them. The `matches()`, `closest()`, and `contains()` methods are commonly used in DOM manipulation to navigate the DOM tree and find specific elements.

## matches()
The `matches()` method checks if an element matches a specific CSS selector. It returns `true` if the element matches the selector, otherwise it returns `false`.
### Example 1: returns true
```html
<div class="container">
  <p class="message">Hello World!</p>
</div>
```
```js
const message = document.querySelector('.message');

if (message.matches('.message')) {
  console.log('The element matches the selector');
} else {
  console.log('The element does not match the selector');
}
```
In this example, the `matches()` method is used to check if the `message` element matches the `.message` selector. Since the `message` element has a class of `message`, the method returns `true`, and the console logs "**The element matches the selector**".
### Example 2: returns false
```html
<div class="container">
  <p class="message">Hello World!</p>
</div>
```
```js
const container = document.querySelector('.container');

if (container.matches('.message')) {
  console.log('The element matches the selector');
} else {
  console.log('The element does not match the selector');
}
```
In this example, the `matches()` method is used to check if the `container` element matches the `.message` selector. Since the `container` element does not have a class of `message`, the method returns `false`, and the console logs "**The element does not match the selector**".

## closest()
The `closest()` method searches up the DOM tree for the nearest ancestor element that matches a specified selector. It returns the matching element if found, otherwise it returns `null`.

### Example 1: returns matching element
```html
<div class="container">
  <p class="message">Hello World!</p>
</div>
```
```js
const message = document.querySelector('.message');

const container = message.closest('.container');

console.log(container); // returns <div class="container">
```
In this example, the `closest()` method is used to find the nearest ancestor element of `message` that matches the `.container` selector. Since the `container` element is the closest ancestor that matches the selector, it is returned and logged to the console.
### Example 2: returns null
```html
<div class="container">
  <p class="message">Hello World!</p>
</div>
```
```js
const container = document.querySelector('.container');

const message = container.closest('.message');

console.log(message); // returns null
```
In this example, the `closest()` method is used to find the nearest ancestor element of `container` that matches the `.message` selector. Since there is no ancestor element of `container` that matches the selector, the method returns `null`.

## contains()
The `contains()` method checks if a specific element is a descendant of another specified element. It returns `true` if the element is a descendant, otherwise it returns `false`.
### Example 1: returns true
```html
<div class="container">
  <p class="message">Hello World!</p>
</div>
```
```js
const container = document.querySelector('.container');
const message = document.querySelector('.message');

if (container.contains(message)) {
  console.log('The container element contains the message element');
} else {
  console.log('The container element does not contain the message element');
}
```
In this example, the `contains()` method is used to check if the `container` element contains the `message` element. Since `message` is a descendant of `container`, the method returns `true`, and the console logs "**The container element contains the message element**".
### Example 2: returns false
```html
<div class="container">
  <p class="message">Hello World!</p>
</div>
<div class="sidebar">
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```
```js
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');

if (container.contains(sidebar)) {
  console.log('The container element contains the sidebar element');
} else {
  console.log('The container element does not contain the sidebar element');
}
```
In this example, the `contains()` method is used to check if the `container` element contains the `sidebar` element. Since `sidebar` is not a descendant of `container`, the method returns `false`, and the console logs "**The container element does not contain the sidebar element**".

## Summary
* `matches()` method checks if an element matches a specified selector.
* `closest()` method gets the closest ancestor element that matches a specified selector.
* `contains()` method checks if an element contains another element.

These methods are useful for navigating and manipulating the DOM in JavaScript. 
