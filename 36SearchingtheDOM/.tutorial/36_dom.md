# Searching the DOM
In previous lessons, we learned how to select elements relative to other elements like the parent, the child, or the sibling. In this lesson, we will learn how to search the DOM for elements that match a certain criteria.

When working with the Document Object Model (DOM), we often need to search for elements within the document. The DOM provides several methods for searching the document, including `getElementById`, `querySelectorAll`, `querySelector`, `getElementsByTagName`, `getElementsByClassName`, and `getElementsByName`. In this lesson, we will go through each of these methods and provide examples of how they can be used.

Consider the following HTML code:
```html
<!DOCTYPE html>
<html>
<head>
	<title>DOM Search</title>
</head>
<body>
	<header>
		<h1>DOM Search</h1>
	</header>
	<nav>
		<ul>
			<li><a href="#home">Home</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#services">Services</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
	</nav>
	<main>
		<section id="home">
			<h2>Home</h2>
			<p>Welcome to our website!</p>
		</section>
		<section id="about">
			<h2>About</h2>
			<p>Learn more about us.</p>
		</section>
		<section id="services">
			<h2>Services</h2>
			<ul>
				<li>Web design</li>
				<li>Web development</li>
				<li>SEO</li>
			</ul>
		</section>
		<section id="contact">
			<h2>Contact</h2>
			<form>
				<label>Name:</label>
				<input type="text" name="name"><br>
				<label>Email:</label>
				<input type="email" name="email"><br>
				<label>Message:</label>
				<textarea name="message"></textarea><br>
				<input type="submit" value="Send">
			</form>
		</section>
	</main>
</body>
</html>
```
We will use this HTML code to demonstrate how to search the DOM.

## getElementById
* Returns the element with the specified ID attribute.
* If an element with the specified ID is not found, the method will return `null.`
```javascript
const home = document.getElementById('home');
console.log(home); // <section id="home">...</section>
```
The `getElementById` method is useful when we know the ID of the element we want to select. In the example above, we know that the `home` section has an ID of `home`, so we can use the `getElementById` method to select it.

## querySelectorAll
* Returns a static NodeList of all elements that match the specified CSS selector.
* The returned NodeList is static, which means it does not update automatically when the document changes.
```javascript
const sections = document.querySelectorAll('section');
console.log(sections); // NodeList(4) [section#home, section#about, section#services, section#contact]
```
The `querySelectorAll` method is useful when we want to select multiple elements that match a certain criteria. In the example above, we want to select all the `section` elements in the document, so we can use the `querySelectorAll` method to select them.

## querySelector
* Returns the first element that matches the specified CSS selector.
*  If no elements match the specified selector, the method will return `null`.
```javascript
const home = document.querySelector('#home');
console.log(home); // <section id="home">...</section>
```
The `querySelector` method is useful when we want to select the first element that matches a certain criteria. It is similar to the `querySelectorAll` method, but it only returns the first element that matches the criteria. Which is equivalent to `document.querySelectorAll('section')[0]`.

## getElementsByTagName
* Returns a list of HTML collection of elements with the specified tag name.
* The HTML collection is ordered and can be accessed by index numbers.
```javascript
const sections = document.getElementsByTagName('section');
console.log(sections); // HTMLCollection(4) [section#home, section#about, section#services, section#contact]
```
The `getElementsByTagName` method is useful when we want to select multiple elements that have the same tag name. In the example above, we want to select all the `section` elements in the document, so we can use the `getElementsByTagName` method to select them.

## getElementsByClassName
* Returns a list of HTML collection of elements with the specified  name.
*  The HTML collection is ordered and can be accessed by index numbers.
```javascript
const elements = document.getElementsByClassName('some-class-name-from-your-HTML');
console.log(elements); 
```
The `getElementsByClassName` method is useful when we want to select multiple elements that have the same  name.

## getElementsByName
* Returns a list of HTML collection of elements with the specified name attribute.
*  The HTML collection is ordered and can be accessed by index numbers.
```javascript
const items = document.getElementsByName('some-name-attribute-from-your-HTML');
console.log(items);
```
The `getElementsByName` method is useful when we want to select multiple elements that have the same name attribute.

These concepts are important to understand because they are used in many different situations. For example, when we want to select all the `section` elements in the document, we can use the `querySelectorAll` method or the `getElementsByTagName` method. Both methods will return the same result, but the `querySelectorAll` method is more flexible because it can select elements that match any CSS selector, while the `getElementsByTagName` method can only select elements that have the same tag name.

# Practice

let us practice more on this topic and just to add some fun, instead of console.logging we will change some css properties of the elements we select. Also we won't be referring to HTML code above, we will be creating new HTML code and selecting elements from it.

## document.getElementById()
```html
<div id="myDiv">Hello World!</div>

<script>
  const myDiv = document.getElementById('myDiv');
  myDiv.style.backgroundColor = 'red';
</script>
```

## document.querySelector()
```html
<div class="myClass">Hello World!</div>

<script>
  const myElement = document.querySelector('.myClass');
  myElement.style.backgroundColor = 'red';
</script>
```

## document.querySelectorAll()
```html
<div class="myClass">Hello World!</div>
<div class="myClass">Hello Again!</div>

<script>
  const myElements = document.querySelectorAll('.myClass');
  myElements.forEach(element => {
    element.style.backgroundColor = 'red';
  });
</script>
```

## document.getElementsByTagName()
```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>

<script>
  const paragraphs = document.getElementsByTagName('p');
  paragraphs[0].style.backgroundColor = 'red';
</script>
```

## document.getElementsByClassName()
```html
<div class="myClass">Hello World!</div>
<div class="myClass">Hello Again!</div>

<script>
  const myElements = document.getElementsByClassName('myClass');
  myElements[0].style.backgroundColor = 'red';
</script>
```

## document.getElementsByName()
```html
<form>
  <label for="nameInput">Name:</label>
  <input type="text" id="nameInput" name="fullName">
  <input type="submit" value="Submit">
</form>

<script>
  const fullNameInputs = document.getElementsByName('fullName');
  fullNameInputs[0].style.backgroundColor = 'red';
</script>
```

# Summary
In this lesson, we learned about various methods to search for elements in the DOM using JavaScript. We also saw how we can change the CSS of the selected elements using JavaScript. These methods are powerful tools for manipulating the contents of a web page dynamically. Please practice more on this topic and try to understand the concepts behind it.

