# Scope

Scoping is a concept in programming langauge that refers where to look for things (identifiers) at execution time. Mainly there are two types of scoping:

- Lexical scoping (static scoping)
- Dynamic scoping

JavaScript uses **Lexical scoping** to resolve the identifiers in program. The scope is determined when the code is compiled.

## Compilation & Scope phase

```js
🔴 var teacher = "kyle";

🔴 function otherClass() {
   🟢 var teacher = "Suzy";
    console.log("Welcome");
}

🔴 function ask() {
    🟡 var question = "Why?";
    console.log(question);
}

otherClass();
ask();
```

```
🔴 Global scope
    🟢 Local scope `otherClass`
    🟡 Local scope `ask`
```

## Execution phase

**An identifier can have only in two roles target (receiving a value) or source (giving up a value)**
