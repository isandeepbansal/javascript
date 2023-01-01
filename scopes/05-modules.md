## Modules

Modules encapsulate data and behavior (methods) together. The state (data) of a module is held by its methods via closure.

## Classic/Revealing module pattern

This is a example of module pattern using IIFE where only ask method is available outside. This can also be considered as singleton pattern. This is using a closure.

```js
var workshop = (function Module(teacher) {
  // publicAPI object only exposing public methods but still those public
  // methods can access private variables because of closure.
  var publicAPI = { ask };
  return publicAPI;

  // ask function closed over variable `teacher`
  function ask(question) {
    console.log(teacher, question);
  }
})("Kyle");

workshop.ask("It's a module, right?");
// Kyle It's a module, right?
```

## Module Factory/Factory function

Unlike IIFE singleton module pattern module factory function can be called multiple times.

```js
function WorkshopModule(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question);
  }
}

var workshop = WorkshopModule("Kyle");
workshop.ask("It's a module, right?");
// Kyle It's a module, right?
```

## ES6 module pattern

ES6 module is file based modules, you can imagine that the file is wrapped in a function like in previous example of modules and by default everything is private. The way to make something public, is to use `export` keyword.

- It is important to note that **file based modules are singletons**, meaning even though they are imported many times into an application, they only run once.

```js
// workshop.mjs
var teacher = "Kyle";

export default function ask(question) {
  console.log(teacher, question);
}
```

**There are two major styles of importing and consuming modules in ES6**

```js
// default import syntax
import ask from "workshop.mjs";
ask("It;s a default import, right?");

// namespaced import syntax
import * as workshop from "workshop.mjs";
workshop.ask("It's a namespace import, right?");
```
