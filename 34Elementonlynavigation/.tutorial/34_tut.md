# Element only navigation
Uptil now, we have learned several DOM manipulation methods to access sibling, parent, and child nodes of an element. However, while accessing child nodes, we often get non-element nodes such as comments or text nodes. To overcome this problem, we need to access only element nodes. This can be done by using the following methods:

  * `firstElementChild` - Returns the first child element of the specified element.
  * `lastElementChild` - Returns the last child element of the specified element.
  * `previousElementSibling` - Returns the previous sibling element of the specified element.
  * `nextElementSibling` - Returns the next sibling element of the specified element.
  
Lets see this in action, we will use the following HTML code:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <nav>
    <ul>
        <li>Home</li>
        <li>About me</li>
        <li>Hire me</li>
    </ul>
   </nav>

   <div class="container">
    <p>Hey, this is a simple test website</p>
   </div>
    <script src="script.js"></script>
</body>
</html>
```
Let's see how we can use element-only navigation to access the first child node of the body and its first element child node:
```javascript
// Accessing the first child node of the body
let firstChild = document.body.firstChild;
console.log(firstChild); // #text

// Accessing the first element child node of the body
let firstElementChild = document.body.firstElementChild;
console.log(firstElementChild); // <nav>
```
As you can see, the first child node of the body is a text node, while the first element child node is the nav element. Similarly, we can use the `lastElementChild` property to access the last element child node of the body:
```javascript
// Accessing the last element child node of the body
let lastElementChild = document.body.lastElementChild;
console.log(lastElementChild); // <script>
```
 Now, let's see how we can use this to change the style of our page. For example, to change the background color of the nav bar to red, we can define the following function:
```javascript
const changeBgRed= () => {
    document.body.firstElementChild.style.background = "red";
}
```
Then, reload your web page, and you will see the style has been changed for the nav bar (which is the first child of the body).

Of course, this doesnt make our website look amazing just yet, but our goal is to learn how to use element-only navigation. If you want to make your website look better, you can use CSS to style your website. for example, something like this:
```css
html, body{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #333;
    background-color: #f5f5f5;
}

ul{
    text-align: center;;
    background-color: #333;
    color: #f5f5f5;
    margin: 0;
    padding: 29;
    list-style: none;
}

ul li{
    display: inline-block;
    margin: 0 10px;
}
```
But for now, let's focus on element-only navigation. Since HTML and CSS are not the main focus of this course, we will not go into detail about them. If you want to learn more about HTML and CSS, you can check out the following resources:

  * [HTML](https://www.w3schools.com/html/)
  * [CSS](https://www.w3schools.com/css/)

## Conclusion
In conclusion, by using element-only navigation in JavaScript, we can access and manipulate only the element nodes we need, which helps to avoid unnecessary text or comment nodes. This makes our code more efficient and effective.
