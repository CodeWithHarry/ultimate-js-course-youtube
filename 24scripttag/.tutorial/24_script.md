# JavaScript Script Tag
This will be a relatively short lesson. We will be discussing the `<script>` tag and how to use it to run JavaScript code in the browser. But these concepts are essential for understanding how to use JavaScript in the browser, so its best to learn them now.

The `<script>` tag is used in HTML to include JavaScript code in a webpage. There are two ways of using it:

1. **Inline**: You can write JavaScript code directly inside the `<script>` tag like this:
```js
<script>
    // JavaScript code goes here
</script>
```
1. **External**: You can use the src attribute of the `<script>` tag to reference an external JavaScript file like this:
```js
<script src="path/to/your/script.js"></script>
```

## Advantages of inline scripts
1. **Quickly add logic:** You can quickly add JavaScript logic to your web page by writing code directly inside the script tag. This can be useful for small scripts that don't require a separate file.

1. **No need for additional file:** By writing code inside the script tag, you don't need to create an additional file, which can make your project easier to manage.

1. **Inline scripts are executed immediately:** When the browser encounters an inline script, it will execute it immediately. This can be useful for scripts that need to be executed before the rest of the page is loaded.

## Advantages of external scripts
1. **Separation of concerns:** By referencing an external source file, you can separate your JavaScript logic from your HTML markup. This makes it easier to maintain and update your code.

1. **Caching:** When a user visits your website, the browser will cache any external JavaScript files that are referenced. This means that if the user visits your website again, the files won't need to be downloaded again, which can improve the page load time.

1. **Code reuse:** By referencing an external source file, you can reuse your JavaScript code across multiple pages of your website. This can save time and reduce the amount of code you need to write.

Get ready, because in the next lessons, we will be diving deeper into JavaScript and learning more advanced concepts. Therefore, it's important to understand these basic concepts of how JavaScript is included in a webpage using the script tag.