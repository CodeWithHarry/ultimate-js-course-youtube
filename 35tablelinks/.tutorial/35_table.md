# Table Navigation
In this lesson, we will learn how to use table navigation to access the table element and its child nodes. We will also learn how to use table navigation to access the table rows and cells.

## Bootstrap
Before we start, let's talk about [Bootstrap](https://getbootstrap.com). Bootstrap is a popular front-end framework that provides pre-designed components and styles for building responsive web pages quickly. 

## Adding a bootstrap table
Instead of manually writing a table, we will use Bootstrap's pre-designed table. Let's copy the table from [here](https://getbootstrap.com/docs/5.3/content/tables/) and paste it into a container div of our HTML page. We will also add Bootstrap's CSS and JS to our web page (which we can copy from [here](https://getbootstrap.com/docs/5.3/getting-started/introduction/)) so that our table looks better. Our HTML code will look something like this at the end:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Table Navigation</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>
<body>

   <div class="container">
    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
   </div>
    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

</body>
</html>
```
Refresh your web page, and you will see how the table looks like. We didnt write our own CSS but used Bootstrap's CSS to style our table and it looks pretty good.

## Table Links
Certain DOM elements may provide additional properties specific to their type for convenience. The `table` element supports the following properties:
* **table.rows**: Returns a live HTMLCollection of all the **rows** in the table.
* **table.caption**: Returns the **caption** element of the table.
* **table.tHead**: Returns the **thead** element of the table.
* **table.tFoot**: Returns the **tfoot** element of the table.
* **table.tBodies**: Returns a live HTMLCollection of all the **tbody** elements in the table.

Similarly, the `tr` element supports the following properties:
* **tr.cells**: Returns a live HTMLCollection of all the **cells** in the row.
* **tr.sectionRowIndex**: Returns the index of the row in the current section (thead, tbody, or tfoot).
* **tr.rowIndex**: Returns the index of the row in the table.

the `td` element also support the some properties inlcluding:
* **td.cellIndex**: Returns the index of the cell in the row.

You can also combine multiple of these like `t.tBodies[0].rows` or `t.tHead.firstElementChild` or `t.rows[0].rowIndex`, where t is:
```js
let t = document.body.firstElementChild.firstElementChild; // the first element child of the body is container div, and its own first child is the table
```
To see these properties in action, you can run the following code snippet in your browser console:
```js
let t = document.body.firstElementChild.firstElementChild;
for (let i = 0; i < t.rows.length; i++) {
    let row = t.rows[i];
    console.log(row)
}
```
This will print all the rows in the table. You can also try to print the cells in the first row by running the following code snippet:
```js
let t = document.body.firstElementChild.firstElementChild;
let row = t.rows[0];
for (let i = 0; i < row.cells.length; i++) {
    let cell = row.cells[i];
    console.log(cell)
}
```

## Conclusion
In this lesson, we learned how to use Bootstrap to quickly add a pre-designed table to our HTML page, and how to navigate through the table using JavaScript. We also learned how to use table navigation to access the table rows and cells. Remember that you dont have to memorize all the properties and methods of the DOM elements. You can always use the browser console to explore the DOM elements and their properties and methods. Just know that these properties and methods exist and you can use them when you need them!