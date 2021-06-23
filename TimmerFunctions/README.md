# javascript-es6-features
## Timmer Functions in JS
- setTimeout
- setImmediate
- process.nextTick
### Example:
```javascript
    console.log("logged 1");

    setTimeout(() => {
        console.log("logged 2");
    }, 0);

    console.log("logged 3");

    setImmediate(() => {
        console.log("logged 4");
    });

    process.nextTick(() => {
        console.log("logged 5");
    });

    console.log("logged 6");
```
### Result
```javascript
    logged 1
    logged 3
    logged 6
    logged 5
    logged 2
    logged 4
```