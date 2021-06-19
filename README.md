# javascript-es6-features
constance (const)
    - variables which cannot be re-assigned new content
    -  in case the content is an object, this means the object itself can still be altered
Example:
    const PI = 3.142;
    const student = {
        name: 'ajay',
        age: 20
    }
    student.age = 30; // can be changed