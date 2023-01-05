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
Number.isNaN("hello world"); // false
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
