## Arrow function with this keyword

**Arrow function is not hardbound function to the parent `this`**. Arrow function doesn't define `this` keyword at all. Which means if you put a `this` keyword inside an arrow function it's gonna behave like any other variable which means its going to lexically resolve to some enclosing scope that does define `this` keyword.

In this example arrow function doesn't have `this` and its enclosing scope that has `this` is `ask` method.

```js
var workshop = {
  teacher: "Kyle",
  ask(question) {
    setTimeout(() => {
      console.log(this.teacher, question);
    }, 100);
  },
};

workshop.ask("Is this lexical 'this'?");
// Kyle Is this lexical 'this'?
```

In this example the only enclosing scope to arrow function which has `this` is global.

```js
var workshop = {
  teacher: "Kyle",
  ask: (question) => {
    console.log(this.teacher, question);
  },
};

workshop.ask("What happened to 'this'?");
// undefined What happened to 'this'?

workshop.ask.call(workshop, "Still no 'this'?");
// undefined Still no 'this'?
```

👉 **Use arrow functions when you need lexical `this`**
