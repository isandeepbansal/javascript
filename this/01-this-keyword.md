## This keyword

A function's `this` references the execution context for that call. **determined entirely by how the function was called**. A `this` aware function can thus have a different context each time it's called, which makes it more flexible & reusable.

- `this` keyword exists so that we can invoke a function with different context.

In JavaScript there are four different ways to invoke a function so, each one of them answer the question what is the `this` keyword references.

## 1. Implicit binding

With the help implicit binding it is very easy to share method across different object.

```js
function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
  ask,
};

var workshop2 = {
  teacher: "Suzy",
  ask,
};

workshop1.ask("What is implicit binding?"); // Kyle What is implicit binding?
workshop2.ask("What is implicit binding?"); // Suzy What is implicit binding?
```

## 2. Explicit binding (call & apply) and hard binding (bind)

`call` and `apply` can be used to explicitly tell JavaScript to invoke a function for particular a context. `apply` is same as `call` it just takes array of arguments.

```js
function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
  ask,
};

var workshop2 = {
  teacher: "Suzy",
  ask,
};

ask.call(workshop1, "What is implicit binding?");
// Kyle What is implicit binding?

ask.call(workshop2, "What is implicit binding?");
// Suzy What is implicit binding?
```

👉 When a function is not invoked in its original scope it loses `this` value. In that case `bind` can be used to hard bind `this` value. `setTimeout` is invoked later using `call` with `window` or `global` object's context.

```js
var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

setTimeout(workshop.ask, 10, "Lost this?");
// undefined Lost this?

setTimeout(workshop.ask.bind(workshop), 10, "Hard bound this?");
// Kyle Hard bound this?
```

## 3. constuctor call

- Create a brand new empty object.
- \*Link that object to another object.
- Call function with `this` set to the new object.
- If function does not return an object, assume return of `this`.

```js
function ask(question) {
  console.log(this.teacher, question);
}

var newEmptyObject = new ask("What is 'new' doing here?");
// undefined what is 'new' doing here?
```

## 4. Default binding

Default binding is the fallback when none of the three rules doesn't match in non-strict mode `this` refers to global object and in strict its undefined.

```js
var teacher = "Kyle";

function ask(question) {
  console.log(this.teacher, question);
}

function askAgain(question) {
  "use strict";
  console.log(this.teacher, question);
}

ask("What's the non-strict-mode default?");
// Kyle What's the non-strict-mode default?

askAgain("What's the strict-mode default?");
// TypeError
```

## Binding precedence

If more than one rule matches a call site, the order of precendence is:

1. Is the function called by `new`?
2. Is the function called by `call`, `apply` & `bind`?
3. Is the function called on a context object?
4. DEFAULT: global object (except strict mode)

```js
var workshop = {
  teacher: "Kyle",
  ask: function ask(question) {
    console.log(this.teacher, question);
  },
};

new (workshop.ask.bind(workshop))("What does this do?");
// undefined what does this do?
```
