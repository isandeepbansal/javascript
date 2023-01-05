## Emptiness in JavaScript

- **Undefined**: means there's definitely a variable and at the moment it has no value.

- **Undeclared**: means it's never been created in any scope that we have access to. `typeof` operator is the only operator that can reference a thing that doesn't exist without throwing an error.

- **Uninitialized** This is introduced with ES6 it is also known as TDZ (temporal dead zone). The idea is that certain variables like block scope ones don't get initialized, they never initially get set to undefined when something is uninitialized state, it is off-limits.
