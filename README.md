# javascript-es6-features
## constance (const)
- variables which cannot be re-assigned new content
- in case the content is an object, this means the object itself can still be altered
### Example:
```javascript
    const PI = 3.142;

    const student = {
        name: 'ajay',
        age: 20
    }
        student.age = 30; // can be changed
```

## Call by Value and Call by reference
### Call by Value
- primitive value( boolean, number, string etc ) are copied by value
- let age=5; Now the variable "age" stores 5 and has an address location where that primitive value sits in memory.
- when we copy the value of "age" in "newAge" by assignment ( age = newAge ). Now, "newAge" points to a new location in memory, containing the same data as variable "age".
### Features of call by value
- Function arguments are always passed by value.
- It copies the value of a variable passed in a function to a local variable.
- Both these variables occupy separate locations in memory. Thus, if changes are made in a particular variable it does not affect the other one.
### Example:
```javascript
// By value (primitives)
    let age = 5;
    let newAge;
    newAge = age;
    age = 3;
    console.log(age);
    console.log(newAge);
```
### Call by Reference
- non-primitive value( objects, functions, arrays ) are copied by reference
- we have an object stored in the variable "student"
- The variable stores the location or the address where the object lives
- Now we set newStudent = student. Now that new variable "newStudent" instead of pointing to a new location in the memory, points to the same location where "student" does.
- No new object is created, no copy is created. Both the variables point to the same object
### Features of By reference:
- In JavaScript, all objects interact by reference.
- If an object is stored in a variable and that variable is made equal to another variable then both of them occupy the same location in memory.
- Changes in one object variable affect the other object variable.
### Example
```javascript
// By reference (all objects (including functions))
    let student = {
        name: 'ajay',
        age: 20
    }
    let newStudent;
    newStudent = student;
    // Mutating the value of student
    student.name = 'vijay';
    console.log(student);
    console.log(newStudent);
```
### Mutable Values:
 which can be modified after creation
### Immutable Values:
which can not be modified after creation
## Shallow Copy
### Example:
```javascript
    let developer_1 = {
        name:"rohan",
        skills: {
            primary: "gaming tool",
            secondary: "js"
        }
    }

    let developer_2 = developer_1;

    developer_2.name = 'rahul';

    console.log("developer_1"+ JSON.stringify(developer_1)); // o/p: rahul
    console.log("developer_2"+ JSON.stringify(developer_2)); // o/p: rahul
```
## Deep Copy
### Example 1: using spred operrator
```javascript
    let developer_1 = {
        name:"rohan",
        skills: {
            primary: "gaming tool",
            secondary: "js"
        }
    }

    let developer_2 = { ... developer_1 };

    developer_2.name = 'rahul';

    console.log("developer_1"+ JSON.stringify(developer_1)); // o/p: rohan
    console.log("developer_2"+ JSON.stringify(developer_2)); // o/p: rahul
```
### Example 2: using object assing method
```javascript
    let developer_1 = {
        name:"rohan",
        skills: {
            primary: "gaming tool",
            secondary: "js"
        }
    }

    let developer_2 = Object.assign({}, developer_1);

    developer_2.name = 'rahul';

    console.log("developer_1"+ JSON.stringify(developer_1)); // o/p: rohan
    console.log("developer_2"+ JSON.stringify(developer_2)); // o/p: rahul
```
### Example 3: using JSON.parse
```javascript
    let developer_1 = {
        name:"rohan",
        skills: {
            primary: "gaming tool",
            secondary: "js"
        }
    }

    let developer_2 = JSON.parse(JSON.stringify(developer_1));

    developer_2.skills.secondary = 'java';

    console.log("developer_1"+ JSON.stringify(developer_1)); // o/p: js
    console.log("developer_2"+ JSON.stringify(developer_2)); // o/p: java
```
### Example 4: using lodash lib
```javascript
    const _lodash = require('lodash');
    let developer_1 = {
        name:"rohan",
        skills: {
            primary: "gaming tool",
            secondary: "js"
        },
        ageCalculator(){
            return new Date();
        },
        joiningDate: new Date()
    }

    let developer_2 = JSON.parse(JSON.stringify(developer_1));

    developer_2.skills.secondary = 'java';

    console.log("developer_1 "+ developer_1);
    console.log("developer_2 "+ developer_2);
```
## Object Static Methods
### Object.assign()
#### Example:
```javascript
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);

    console.log(target);
    // expected output: Object { a: 1, b: 4, c: 5 }

    console.log(returnedTarget);
    // expected output: Object { a: 1, b: 4, c: 5 }
```
### Object.seal()
#### Example:
```javascript
    const object1 = {
    property1: 42
    };

    Object.seal(object1);
    object1.property1 = 33;
    console.log(object1.property1);
    // expected output: 33

    delete object1.property1; // cannot delete when sealed
    console.log(object1.property1);
    // expected output: 33
```
### Object.freeze()
#### Example:
```javascript
    const obj = {
    prop: 42
    };

    Object.freeze(obj);

    obj.prop = 33;
    // Throws an error in strict mode

    console.log(obj.prop);
    // expected output: 42
```
