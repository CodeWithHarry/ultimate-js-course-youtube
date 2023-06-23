# What is the DOM?
The Document Object Model, or DOM for short, is a programming interface that represents web pages as a tree-like structure. This tree-like structure is called the DOM tree, and it consists of nodes that represent different parts of the web page, such as elements, attributes, and text.

# The DOM Tree
The DOM tree is a hierarchical structure of nodes that represent the elements and content of an HTML or XML document. The DOM tree starts with the root element, which is usually the <html> element, and branches out to include all the elements, attributes, and text nodes of the document. The tree structure helps developers to access and manipulate the content and structure of web pages using programming languages such as JavaScript.

# The Three Main Nodes of the DOM
There are three main types of nodes in the DOM tree: Text nodes, Element nodes, and Comment nodes.

* **Text nodes**: Text nodes represent the actual text content of an HTML element, such as the text inside a paragraph or heading. These nodes cannot have any child nodes, and they are always the last child of their parent element.
* **Element nodes**: Element nodes represent the HTML elements themselves, such as <div>, <p>, <h1>, etc. These nodes can have child nodes, including other elements, text nodes, and comment nodes.
* **Comment nodes**: Comment nodes represent comments inside an HTML document. They can be added to HTML to provide additional information or to hide code from browsers.

# Auto Correction
When an HTML page is not properly structured, the browser may attempt to auto-correct the code to make it valid. For example, if you accidentally close a <span> element with a </div> tag, the browser may ignore the </div> tag and auto-correct by writing the closing </span> tag on its own.

# Walking the DOM
The most basic structure of HTML page is:
```html
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    .
    .
    .
  </body>
</html>
```
There can be tons of elements inside these tags, but the basic structure is always the same. The DOM tree of most HTML pages would look like this:

![](https://www.w3schools.com/js/pic_htmltree.gif)

**Fact:** Text is always the last child (leaf node) of an element node, and it cannot have any child nodes.

To access and manipulate elements in the DOM, we can "walk" through the tree structure using JavaScript. In the example provided, we can access the <head>, <body>, and <html> elements using the following commands in the console:

* **document.head**: This selects the <head> element of the current HTML document.
* **document.body**: This selects the <body> element of the current HTML document.
* **document.documentElement**: This selects the <html> element of the current HTML document, which is the root of the DOM tree.

Once we have accessed an element, we can modify its attributes or properties using the console. For example, if we want to change the background color of the body element, we can type `document.body.style.backgroundColor = "red"` in the console, and the background color of the body will turn red.

It's important to note that any changes we make to the DOM using the console will only reflect on our client-side, and other users visiting the website will not see the changes we made.

By walking through the DOM tree and selecting different nodes, developers can access and manipulate the content and structure of web pages to create dynamic and interactive web applications.

for more information, visit [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

This was a more theoretical lesson, so let's practice what we learned in the upcoming lessons.