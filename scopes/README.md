# Scope

Scoping is a concept in programming langauge that refers where to look for things (identifiers) at execution time. Mainly there are two types of scoping:

- Lexical scoping (static scoping)
- Dynamic scoping

JavaScript uses **Lexical scoping** to resolve the identifiers in program. JavaScript's scope is determined at complied time.

👉 JavaScript creates scope for **functions** and **blocks** (only in case let and const). Scopes can be nested as well.

```js
🔴 var teacher = "kyle";

🔴 function otherClass() {
    🔵 var teacher = "Suzy";

    🔵 function ask(question) {
        console.log(🔵 teacher, 🟢 question);
        {
            // Block scope (only in case let and const)
            🟡 let question = "What is block scope?";
            console.log(🟡 question);
        }
    }

    ask("Why?");
}

otherClass();
ask();
```

```js
🔴 Global scope
    🔵 Function scope `otherClass`
        🟢 Function scope `ask`
            🟡 block scope
```

# Dynamic global variables

**Dynamic global variables are created at run-time** not at compiled time. Depends upon the position of variable scope is decided.

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

# Strict mode

**Dynamic global variables are not allowed in strict mode**.

```js
var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy";
  topic = "React"; // ReferenceError
  console.log("Welcome!");
}

otherClass();
```
