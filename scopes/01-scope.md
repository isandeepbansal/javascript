# Scope

Scoping is a concept in programming langauge that refers where to look for things (identifiers) at execution time. Mainly there are two types of scoping:

- Lexical scoping (static scoping)
- Dynamic scoping

JavaScript use **Lexical scoping** to resolve the identifiers in program. JavaScript's scope is determined at complied time.

👉 JavaScript creates scope for **functions** and **blocks** (only in case of let and const). Scopes can be nested as well.

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
// These are are the coloured bucket (functions & blocks)
🔴 Global scope
    🔵 Function scope `otherClass`
        🟢 Function scope `ask`
            🟡 block scope
```

# Dynamic global variables

**Dynamic global variables are created at run-time** not at compiled time.

```js
🔴 var teacher = "Kyle";

🔴 function otherClass() {
    🔴 teacher = "Suzy";
    topic = "React"; // dynamic global variable crated at global scope: RED
    console.log("Welcome!");
}

🔴 otherClass();

teacher; // Suzy
topic; // React
```

# Strict mode

Strict mode throws an error which were silent in sloppy mode.

- Dynamic global variable throws an error in strict mode.
- Writing read-only properties are not allowed.
- Cannot delete variable using delete operator.

```js
var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy";
  topic = "React"; // ReferenceError
  console.log("Welcome!");
}

otherClass();
```

# Undefined vs undeclared

**Undefined** means a variable exists but at the moment it has no value. **Undeclared** means a variable doesn't exists in any of the scope that we have access to.

# Lexical elevator