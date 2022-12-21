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
var teacher = function getTeacherName() {
  return "Kyle";
};
```

# `let` or `var` (`let` is not a new `var`)

Whenever you want to access your variable throughout the whole scope `var` is a right choice as well more semantic.

Whenever you want to access your variable within particular block `let` is a right choice as well more semantic.
