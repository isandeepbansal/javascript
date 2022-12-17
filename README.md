## What is JavaScript

- JavaScript is a **synchronous, single threaded language**.
- JavaScript is a **Dynamic typed language**.
- JavaScript has **first class function**.

👉 **First class function** means function is just like any other variable: can be passed as argument, return by another function and can be assign as a value to a variable.

## ECMAScript and JavaScript

ECMAScript is a specification, JavaScript is programming language that confirms to this specification. The first version of ECMAScript was released in 1997.

- ES6/ES2015 was released in 2015 it defines many new features.

## How to add JavaScript in HTML

There are two ways to add JavaScript in HTML file. You can add JavaScript using `script` tag inside `head` or `body`. But it is not recommended to place `script` inside `head` with few exceptions.

Placing `script` in the end of `body` section gives you few advantages.

- It doesn't block the HTML parsing.
- HTML elements are available to script because it already parsed.

## `<script>` vs `<script async>` vs `<script defer>`

**`<script>`** HTML file will be parsed until the `script` file is hit, at that point parsing will stop and a request will be made to fetch the file (if it's external). The script will then be executed before parsing is started.

![script](https://github.com/isandeepbansal/javascript/blob/main/assets/script.png)

**`<script async>`** async downloads the file during HTML parsing and will pause the HTML parser to execute it when it has finished downloading.

![script async](https://github.com/isandeepbansal/javascript/blob/main/assets/script-async.png)

**`<script defer>`** defer downloads the file during HTML parsing and will only execute it after the parser has completed. **defer scripts are also guarenteed to execute in the order that they appear in the document**.

![script defer](https://github.com/isandeepbansal/javascript/blob/main/assets/script-defer.png)

## Statement vs declaration vs expression
