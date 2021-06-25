/**
 * var will maintain the single copy of value which will be overwritte
 */

for (var index = 0; index < 5; index++) {
    setTimeout(() => {
        console.log(index);
    }, 1000);
    
}
/**
 * OUTPUT
 * 5
 * 5
 * 5
 * 5
 * 5
 */

/**
 * let will maintain the multiple copies and which all the value of iterations
 */
for (let index = 0; index < 5; index++) {
    setTimeout(() => {
        console.log(index);
    }, 1000);
    
}
/**
 * OUTPUT
 * 0
 * 1
 * 2
 * 3
 * 4
 */