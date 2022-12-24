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

## Key points to remember

- Scopes are great way to hide things by using IIFE and block scope.
- Block scope is only created when `let` or `var` used in it.
- `let` is not a replacement of `var`.
