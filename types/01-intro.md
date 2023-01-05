# Types in JavaScript

JavaScript types can be divided into two categories

1. primitive (value types)
2. non-primitive (reference types)

## Primitive types

- `undefined`
- `string`
- `number`
- `boolean`
- `null`
- `symbol`
- `bigint`

## Non Primitive

- `object` (arrays, functions and etc.)

👉 **In JavaScript, variables don't have types values do.**

## `typeof` operator

`typeof` operator is used to determine the type of a value, **`typeof` operator always returns string**. `typeof` operator is the only operator in JavaScript that can reference a variable which doesn't exist without throwing an error.

| Primitive Types | `typeof` return value            | Object wrapper |
| --------------- | -------------------------------- | -------------- |
| `null`          | `typeof null` "object"           | N/A            |
| `undefined`     | `typeof v` "undefined"           | N/A            |
| `boolean`       | `typeof true` "boolean"          | `Boolean`      |
| `number`        | `typeof 10` "number"             | `Number`       |
| `bigint`        | `typeof 10n` "bigint"            | `BigInt`       |
| `string`        | `typeof 'Hello World!'` "string" | `String`       |
| `symbol`        | `typeof Symbol()` "symbol"       | `Symbol`       |

### Edge cases with `typeof` operator

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
