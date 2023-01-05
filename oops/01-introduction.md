# Object oriented programming

A programming **paradigm** centered around **objects** rather than functions.

## Four pillars of object oriented programming

- Encapsulation (group related variables and functions together)
- Abstraction (hide compexity)
- Inheritance (eliminate redundant code)
- Polymorphism (many form)

## Object creation

There are three ways to create objects in JavaScript

### 1. Object Literals

```js
var circleLiteral = {
  radius: 1,
  draw: function () {
    console.log("Draw..");
  },
};
```

### 2. Factory Function

```js
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Draw..");
    },
  };
}

var factoryCircle = createCircle(5);
```

### 3. Constructor Function

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw..");
  };
}

var circle = new Circle(10);
```

## Constructor property

Every object in JavaScript has a property called `constructor` which refers to the function that was used to create that object.

```js
console.log(circleLiteral.constructor); // ƒ Object() { [native code] }
console.log(factoryCircle.constructor); // ƒ Object() { [native code] }
console.log(circle.constructor); // ƒ Circle(radius) { }
```

👉 **Functions & arrays are also objects in JavaScript**

## Value vs Reference types

Unlike primitive value which is value type Objects in JavaScript are of reference types.

```js
var valueType = 10;
var referenceType = { value: 10 };
var tempValueType = valueType;
var tempReferenceType = referenceType;

tempValueType = 20;
tempReferenceType.value = 20;

console.log(valueType, tempValueType); // 10 20
console.log(referenceType, tempReferenceType); // {value: 20} {value: 20}
```

## Enumerating properties

For-in statment can be used to iterate over object properties.

```js
for (let key in circle) {
  console.log("Enumerating properties:", circle[key]);
}
```

## `in` operator

The `in` operator returns true if the specified property is in the specified object or its **prototype chain**.

```js
console.log("radius" in circle); // true
```
