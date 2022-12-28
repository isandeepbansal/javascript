## Modules

Modules encapsulate data and behavior (methods) together. The state (data) of a module is held by its methods via closure.

## Classic/Revealing module pattern

This is a example of module pattern using IIFE where only ask method is available outside. This can also be considered as singleton pattern. This is a using closure.

```js
var workshop = (function Module(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question);
  }
})("Kyle");

workshop.ask("It's a module, right?");
// Kyle It's a module, right?
```

## Module Factory

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
