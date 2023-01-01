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
