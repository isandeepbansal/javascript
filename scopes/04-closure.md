## Closure

Closure is when a function **remembers** its lexical scope even when the function is executed outside that lexical scope. Lexical scope means that a function can reference a variable outside of its scope and it just goes up the scope chain to find it.

```js
function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask("What is closure?");
```

```js
function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

var myQuestion = ask("What is closure?");
myQuestion(); // What is closure?
```

## Closing over variables

This is the classic example of closure there is a `setTimeout` inside a for-loop which will run function after some time and when it start executing the function, for-loop has done with its iteration and the value of `i` would be 4 at that time so because in JavaScript function remembers its lexical scope even when they are executing out of its original scope, as a result of it will print 4 three times.

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(`i: ${i}`);
  }, i * 1000);
}
```

**Because each function is closing over `i` variable they all are pointing the same variable to solve this issue we need different variable for each iteration so that each function can close over different variable instead of one**.

```js
// let is block scope type so for each iteration there will be a different i everytime
for (var i = 1; i <= 3; i++) {
  let j = i;
  setTimeout(function () {
    console.log(`j: ${j}`);
  }, i * 1000);
}

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(`i: ${i}`);
  }, i * 1000);
}
```

👉 It is inevitable for a language like JavaScript don't have closures feature in it, because JavaScript is a lexical scoped language with first class functions and it would be very weird when a function is return and it looses its original lexical scope.
