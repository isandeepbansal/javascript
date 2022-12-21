# Scope & function expressions

If the word `function` is literally the first thing in the statement its a function declaration and if it's not the first thing in the statement its a function expression.

**Function delaration add their identifier to the enclosing scope whereas function expressions will add their indentifier to their own scope and also they are read only you cannot reassign to another value**.

```js
🔴 function teacher () {...}

🔴 var myTeacher = 🔵 function anotherTeacher() {
    console.log(🔵 anotherTeacher);
}

console.log(teacher);
console.log(myTeacher);
console.log(anotherTeacher); // ReferenceError
```

Function expression can be:

- Named function expression
- Anonymous function expression

👉 You should always, always use named function expressions because of the following reasons.

- Reliable function self-reference (recursion, etc): named function expression are more reliable self reference first its only accessible in their own scope and its a ready only.

- More debuggable stack traces: naming function can make debugging process easy by showing up function name in stack trace instead of anonymous function.

- Named functions are more self documenting code compared to anonymous function.

👉 **Every single function has purpose and if every function has a purpose, it means every function has a name**.

## Arrow function expressionss

Arrow function expression has a shorter syntax for declaring traditional function expression added in ES6 it can be also be named as well as anonymous.

- Arrow function can be useful when you need lexical `this` behaviour.
- Arrow function don't have `arguments` or `super`.
- Arrow funcion cannot be used as constructor calling them with `new` operator throws a TypeError.
- Arrow functions cannot use `yield` within their body and cannot be created as generator functions.

# Function types hierarchy

**(Named) function declaration > named function expression > anonymous function expression**
