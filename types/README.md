## Types in JavaScript

JavaScript types can be divided into two categories **primitive** and **non-primitive** or **objects**.

## Primitive types

- `undefined`
- `string`
- `number`
- `boolean`
- `null`
- `symbol`
- `bigint`

## Non Primitive

- `object`

👉 **In JavaScript, variables don't have types values do.**

## `typeof` operator

`typeof` operator is used to determine the type of a value, **`typeof` operator always returns string**. `typeof` operator is the only operator in JavaScript that can reference a variable which doesn't exist without throwing an error.

```js
var v;
typeof v; // "undefined"

v = "1";
typeof v; // "string"

v = 2;
typeof v; // "number"

v = true;
typeof v; // "boolean"

v = {};
typeof v; // "object"

v = Symbol();
typeof v; // "symbol"

v = 42n;
typeof v; // "bigint"
```

## Edge cases with `typeof` operator

```js
typeof doesNotExist; // "undefined"

v = null;
typeof v; // "object"

v = function fn() {};
typeof v; // "function"

v = [1, 2, 3];
typeof v; // "object"
```

👉 **Array.isArray() method determines whether the passed value is an array**.

## Emptiness in JavaScript

- **Undefined**: means there's definitely a variable and at the moment it has no value.

- **Undeclared**: means it's never been created in any scope that we have access to. `typeof` operator is the only operator that can reference a thing that doesn't exist without throwing an error.

- **Uninitialized** This is introduced with ES6 it is also known as TDZ (temporal dead zone). The idea is that certain variables like block scope ones don't get initialized, they never initially get set to undefined when something is uninitialized state, it is off-limits.

# Special values: `NaN` and Negative zero

Within primitive types JavaScript has some special values like **NaN** and **Negative zero**.

## NaN

**NaN** naming convention is little confusing its stands for **not-a-number** but actually its a number.

```js
typeof NaN; // "number"
```

so, the correct way to think about NaN is that its a invalid number. NaN can occur in program due to some wrong mathematical operation. Example:

```js
var result = "hello" - 10;
var wrongCoerce = Number("hello");
var v = 0 * Infinity;
```

👉 **NaN are not equal to each other**.

```js
NaN === NaN; // false
```

## How to check for NaN

JavaScript has two built in method to check for NaN

### 1. `isNaN`

The problem with `isNaN` method is that it always coerce the value to the number before it check for NaN. So when we pass something string like "hello world" which is definitely not a NaN it return true.

```js
isNaN(NaN); //  true
isNaN("hello world"); // true
```

### 2. `Number.isNaN`

`Number.isNaN` do not coerce the value to number so it is better choice to check something is NaN or not.

```js
Number.isNaN(NaN); // true
Number.isNaN("hello world"); // true
```

## Negative zero

Negative zero is another special value in JavaScript, operation on it can cause unexpected result like:

- **Negative zero is not equal to itself it means like NaN tripple equal check doesn't work with negative zero**.

- **It is nither greater than 0 or lesser than 0**.

- **In using toString() negative 0 sign bit gone**.

```js
var trendRate = -0;

trendRate === -0; // true
trendRate.toString(); // "0" where is - sign?
trendRate === 0; // true what -0 is equal to 0
trendRate < 0; // false
trendRate > 0; // false
```

### How to check for negative zero

ES6's Object.is() method can be used to determine negative zero. It can also be used to check something is NaN or not.

```js
Object.is(trendRate, -0); // true
Object.is(trendRate, 0); // false

Object.is(NaN, NaN); // true
Object.is(NaN, "hello world"); // false
```

### Application of negative zero in programming

Let's take an example of stock price current stock price for a company named ABC 10, now after five minutes it goes upto 12 so the changes in stock price for ABC is going be +20% but now after few minutes it goes back to 10 dollar so the changes in stock percentage now would be -0%.

## Fundamental Objects

In addition to primitive values, JavaScript also have a object representations for all those primitive values with similar behavior.

**If you need to construct an object of the following fundamental type use `new` keyword**

- Object()
- Array()
- Function()
- Date()
- RegExp()
- Error()

**Don't use `new` keyword with these fundamental type but use them to coerce the value**

- String()
- Number()
- Boolean()
