/**
 * How to remove duplicate number from an array
 * without using any loops
 * 
 * we can make us of "set" Data Structre which
 * does not allow to store duplicate value
 * 
 * using spred operator(... ) to convert it to array
 */

let num = [1,2,3,4,5,1,2,3];

let uniqueArrayValues = ([...new Set(num)]);

console.log(uniqueArrayValues);