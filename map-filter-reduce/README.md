# Map, Filter, Reduce
## Filter
- it accepts callbacks and returns new array
- The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.
- Every element of the array is passed to the callback function. On each iteration, if the callback returns true, then that element will be added to the new array, otherwise, it is not added to the new array.

### Example
```javascript
    const numbers = [1, 2, 3, 4];
    const evens = numbers.filter(item => item % 2 === 0);
    console.log(evens); // [2, 4]
```
## Map
- Every element of the array is passed to the callback function and returns a new array with the same length.
- When to use map: If we want to perform the same operation/transformation on each element of the array and get back a new array of the same length with the transformed values.
### Example
```javascript
    let numbers= [1,2,3,4,5];
    let doubled  = numbers.map(n => n * 2);
    doubled; // [2,4,6,8,10]
```

## Reduce
- While using reduce, we need to declare the initial value of accumulator(final result). On each iteration, inside the callback we perform some operation and that will be added to the accumulator.
### Example
```javascript
    let numbers = [1,2,3,4,5];
    let result=numbers.reduce((accu, val) => val + accu , 0);
    console.log(result) // 15
```