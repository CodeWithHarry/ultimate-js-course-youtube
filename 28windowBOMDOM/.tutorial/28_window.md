# DOM, BOM, and Window Object
In this lesson, we will learn about the 
* Document Object Model (DOM)
* Browser Object Model (BOM)
* Window Object in JavaScript.

```
        The Window Object
             /   |   \
           /     |     \
         /       |       \
       DOM      BOM    JS Core


```
## Window Object
The Window Object is a global object in the browser that represents the browser window. It is the top-level object in the browser's JavaScript hierarchy and everything in the browser window is a property of the Window object. You can access the Window object by typing `window` in the browser console.
```javascript
console.log(window); // prints the Window object
```
Since the Window object is global, you can also use it to access other global objects such as the console and the alert function.
```javascript
window.console.log("Hello World!"); // same as console.log("Hello World!");
window.alert("This is an alert!"); // same as alert("This is an alert!");
```

## Document Object Model (DOM)
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It creates a tree-like representation of the document, which allows developers to interact with it and modify its content and structure.

In JavaScript, the DOM is represented by the `document` object. You can access the `document` object by typing `document` in the browser console.
```javascript
console.log(document); // prints the DOM object
```
The `document` object represents the entire HTML document as a JavaScript object. You can use the `document` object to access and manipulate different parts of the HTML document, such as the document's title, body, and elements.
```javascript
console.log(document.title); // prints the document's title
console.log(document.body); // prints the document's body element
```
You can also use the document object to change the properties of HTML elements.
```javascript
document.body.style.backgroundColor = "red"; // sets the background color of the body element to red
```
But why do we use JavaScript to change the properties of HTML elements? Why not just use CSS? The answer is that JavaScript can be used to change the properties of HTML elements dynamically. For example, you can use JavaScript to change the background color of the body element when the user clicks a button. This is not possible with CSS.

## Browser Object Model (BOM)
The Browser Object Model (BOM) is a programming interface for web browsers. It provides access to browser-specific objects such as the browser history, the location bar, and the browser window.

The BOM is not a part of the official DOM specification and is specific to each browser. As a result, the objects and methods available in the BOM may vary between different browsers.

The Window object is a part of the BOM and provides access to many of the BOM objects and methods.
```javascript
console.log(window.location.href); // prints the current URL of the page
```
**Fun Fact:** The alert, prompt and confimrm functions that we discussed in last lesson are also part of the BOM.

# Conclusion
In this lesson, we learned about the Window Object, the Document Object Model (DOM), and the Browser Object Model (BOM) in JavaScript. We saw how the Window object is a global object that represents the browser window, and how the DOM creates a tree-like representation of the HTML document that can be interacted with and modified using the document object. We also saw how the BOM provides access to browser-specific objects and methods.

