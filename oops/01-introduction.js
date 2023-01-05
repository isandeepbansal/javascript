/**
 * Object creation
 * ----------------
 * 1. "Object Literal"
 * 2. "Factory Function"
 * 3. "Constructor Function"
 */

// 01 Object Literals
var circleLiteral = {
  radius: 1,
  draw: function () {
    console.log("Draw..");
  },
};

// 02 Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Draw..");
    },
  };
}

var factoryCircle = createCircle(5);

// 03 Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw..");
  };
}

var circle = new Circle(10);

/**
 * Constructor Property
 * --------------------
 * Every object has a "constructor" property which references to the function
 * that was used to create that object.
 */
console.log(circleLiteral.constructor); // ƒ Object() { [native code] }
console.log(factoryCircle.constructor); // ƒ Object() { [native code] }
console.log(circle.constructor); // ƒ Circle(radius) { }

/**
 * Functions are also Objects
 * --------------------------
 * In JavaScript functions are also objects.
 */
console.log(createCircle.constructor); // ƒ Function() { [native code] }
console.log(createCircle.name); // createCircle
console.log(createCircle.length); // length of arguments

/**
 * Value vs Reference types
 * ------------------------
 * Objects are reference types and primitive types are value types
 */

var valueType = 10;
var referenceType = { value: 10 };
var tempValueType = valueType;
var tempReferenceType = referenceType;

tempValueType = 20;
tempReferenceType.value = 20;

console.log(valueType, tempValueType);
console.log(referenceType, tempReferenceType);

/**
 * Enumerating properties
 * ----------------------
 * For in loop
 */

for (let key in circle) {
  console.log("Enumerating properties:", circle[key]);
}
