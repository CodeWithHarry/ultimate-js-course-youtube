# Practice Set 7
Now that we've learned about DOM manipulation, let's put our skills to the test with a practice set! As usual, therre are 5 questions in this practice set.

## Question 1
Create a navbar and change the color of its first element to red.

<details><summary>Answer</summary>

```html
<!DOCTYPE html>
<html>
<head>
    <title>Question 1</title>
</head>
<body>
    <nav>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
    </nav>
</body>
</html>
```
```js
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
```
This solution selects the `nav` element using `getElementsByTagName`, then selects its first child element using `firstElementChild`. Finally, it applies the `style.color` property to change the text color to red.

Note that there are other ways to achieve this task as well. For example, you could use `querySelector` to select the first `li` element inside the `nav`:
```js
document.querySelector("nav li:first-child").style.color = "red";
```
There are more ways to do this, but this is just one example. Feel free to experiment with other solutions and see what works best for you!
</details> </br>

## Question 2
Create a table without `tbody`, then use the "View Page Source" (**Ctrl+U** shortcut on Chrome) button to check whether it has a `tbody` or not.

<details><summary>Answer</summary>

```html
<!DOCTYPE html>
<html>
<head>
    <title>Question 2</title>
</head>
<body>
    <table>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
        <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
        </tr>
    </table>
</body>
</html>
```
`No` -  the page source does not show a `tbody` element because it is automatically added by the browser. If you inspect the element using your browser's developer tools, you will see that the `tbody` element is present in the DOM. The reason for this behavior is that `tbody` is a required element in a `table` according to the HTML specification, so browsers will automatically insert it if it is missing.

the page source shows raw HTML, without any addition or correction which is why it doesn't show the `tbody` element.

</details> </br>

## Question 3
Create an element with three children and change the color of first and last children to green.

<details><summary>Answer</summary>

```html
<!DOCTYPE html>
<html>
<head>
	<title>Question 3</title>
</head>
<body>
	<div>
		<p>First child</p>
		<p>Second child</p>
		<p>Last child</p>
	</div>
</body>
</html>
```
```js
document.querySelector("div").firstElementChild.style.color = "green";
document.querySelector("div").lastElementChild.style.color = "green";
```
### Explanation
* The HTML code creates a `div` element with three `p` elements as children.
* The JavaScript code uses `document.querySelector` to select the `div` element and its first and last children using the `firstElementChild` and `lastElementChild` properties, respectively.
* The `style.color` property is used to change the color of the selected elements to green.
Note: There are other ways to achieve this task as well. For example, you could use getElementsByTagName to select the first and last p elements inside the div:
```js
document.getElementsByTagName("div")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("div")[0].lastElementChild.style.color = "green";
```
</details> </br>

## Question 4
Write a JavaScript code to change the background of all li tags to cyan.

<details><summary>Answer</summary>

```html
<!DOCTYPE html>
<html>
<head>
	<title>Question 4</title>
</head>
<body>
	<ul>
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
		<li>Item 4</li>
	</ul>
</body>
</html>
```
```js
Array.from(document.getElementsByTagName("li")).forEach((element) => {
	element.style.background = "cyan";
});
```
### Explanation
* The HTML code creates an unordered list (`ul`) with four list items (`li`).
* The JavaScript code uses `document.getElementsByTagName` to select all `li` elements and `Array.from` to convert the resulting NodeList into an array.
* The `forEach` method is used to iterate over the array and change the `background` style of each element to cyan.

Note: There are other ways to achieve this task as well. For example, you could use querySelectorAll to select all li elements:
```js
document.querySelectorAll("li").forEach((element) => {
    element.style.background = "cyan";
});
```
</details> </br>

## Question 5
Which of the followings is used to look for the farthest ancestor that matches a given CSS selector?

a) matches
b) closest
c) contains
d) none of these

<details><summary>Answer</summary>

The correct answer is **d) none of these**.

While matches is used to check if an element matches a given CSS selector, closest is used to find the closest ancestor element that matches a given selector. However, neither of them is used to look for the farthest ancestor that matches a given CSS selector.

</details> </br>

Alright, that's it for this practice set! We hope you enjoyed it and learned something new. See you in the next practice set!