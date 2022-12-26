**Principle of least privilege**: By default everything should be private, and only exposing minimal neccessary.

Scopes are great way to hide things that doesn't need to be exposed. By wrapping things inside the scope also solves the problem of name collision.

In JavaScript scopes can be created by using **function** and **block**.

## IIFE (Immediately invoked function expression)

```js
var teacher = "Kyle";

// IIFE not polluting global naming scpace
(function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher); // Suzy
})();

console.log(teacher); // Kyle
```

## Block scoping

Variables declared with `let` and `const` can have block scope. They can only be accessed in the block in which they are defined.

```js
var teacher = "Kyle";

{
  let teacher = "Suzy";
  console.log(teacher); // Suzy
}

console.log(teacher); // Kyle
```

👉 Because IIFE is an expression and block is a statement IIFE has one advantage that it can be used in statement as well.

```js
var teacher = (function getTeacherName() {
  return "Kyle";
})();
```

## `let` or `var` (`let` is not a new `var`)

If variable is belongs to the entire scope of a function, the correct semantic way to signal that to your reader is `var`. If variable is belongs to the block like (for, if and etc.) use `let`. Unlike `let` `var` can be used reused multiple times in a scope.

👉 Both have semantic and behavioral reasons attached to them and you should use either of them accordingly, instead of using `let` everywhere.

## Explicit let block

If you want to use `let` you can wrap them inside a block which makes it very obvious to the reader of code that these variables are only exist for this particular block.

```js
function formatStr(str) {
  {
    let prefix, res;
    prefix = str.slice(0, 3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }

  if (/^FOO:/.test(str)) {
    return str;
  }

  return str.slice(4);
}
```

## const keyword

Variable declared with `const` keyword cannot be redeclared or reassgin it but you can change or mutate the non primitive type values.

```js
// Primitive values with const
const PI = 3.14;
PI = 3.145; // TypeError: Assignment to constant variable

// Non primitive values with const
const fruits = ["apple", "grapes"];
fruits.push("oranges");

const otherClass = { teacher: "Kyle" };
otherClass.teacher = "Suzy";

fruits = "apple, grapes"; // TypeError: Assignment to constant variable
otherClass = "Suzy"; // TypeError: Assignment to constant variable
```

## What is hoisting?

JavaScript is a **lexical scoped langauge** which means during first pass (parsing) it setup a scope for all identifiers in program with some placeholder (undefined) and when it start executing the code variables are already known at that time.

## variable (with var) hoisting

Variables declared with `var` intially initialized with undefined.

```js
student; // undefined
teacher; // undefined

var student = "you";
var teacher = "Kyle";
```

## Function declaration & expression hoisting

Function declaration intially initialized with its definition or function body.

```js
teacher(); // Kyle
otherTeacher(); // TypeError

// teacher stores with function body
function teacher() {
  console.log("Kyle");
}

// otherTeacher set to undefined during first pass
var otherTeacher = function () {
  console.log("Suzy");
};
```

## `let` and `const` hoisting

Variables declare with `let` and `const` keyword do not get initialized during first pass it is in uninitialized state and it doesn't get initialized until it run accross the let or const declaration.

Accessing variable before initialization throws an error TDZ (temporal dead zone).

```js
teacher; // ReferenceError (TDZ): Cannot access 'teacher' before initialization
let teacher = "Kyle";

{
  otherTeacher; // ReferenceError (TDZ): Cannot access 'otherTeacher' before initialization
  let otherTeacher = "Suzy";
}
```

```js
otherTeacher(); // ReferenceError (TDZ): Cannot access 'otherTeacher' before initialization

let otherTeacher = function () {
  console.log("Suzy");
};
```

👉 You can take advantage of hoisting for function declaration by putting all function executable code at the top of each scope. While variable hoisting is not recommended you should declare all variables at the top of the each scope.

## Key points to remember

- Scopes are great way to hide things by using IIFE and block scope.
- Block scope is only created when `let` or `var` used in it.
- `let` is not a replacement of `var`.
