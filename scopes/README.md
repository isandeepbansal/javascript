# Scope

JavaScript is not a interpreted language rather we should think about JavaScript is a two pass processing. In first pass JavaScript creates a plan for scope all the identifiers are arranged in scope during this phase and JavaScript use this plan during second phase (execution).

Scoping is a concept in programming langauge that refers where to look for things (identifiers) at execution time. Mainly there are two types of scoping:

- Lexical scoping (static scoping)
- Dynamic scoping

JavaScript uses **Lexical scoping** to resolve the identifiers in program. The scope is determined when the code is compiled.

👉 JavaScript manages scope for `functions` and `block`

## Compilation & Scope phase

```js
🔴 var teacher = "kyle";

🔴 function otherClass() {
    🔵 var teacher = "Suzy";
    console.log("Welcome");
}

🔴 function ask() {
    🟢 var question = "Why?";
    console.log(question);
}

otherClass(); // Welcome!
ask(); // Why?
```

```js
here `otherClass` and `ask` scope is nested inside the Global scope
🔴 Global scope
    🔵 Local scope `otherClass`
    🟢 Local scope `ask`
```

# Dynamic global variables

Below code have a `topic` which is not a formal declaration so `topic` identifier will not be a part of scoping phase it will generated at run-time which is called **dynmaic global variable**.

```js
🔴 var teacher = "Kyle";

🔴 function otherClass() {
    🔴 teacher = "Suzy";
    topic = "React";
    console.log("Welcome!");
}

🔴 otherClass();

teacher; // Suzy
topic; // React
```

👉 **Dynamic global variables are not allowed in strict mode**. in strict mode `topic` will be a ReferenceError.
