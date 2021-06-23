/**
 * how to restrict modifing the value of object
 */

let profile = {
    name:'arun'
}

Object.defineProperty(profile, 'age',{
    value: 3,
    writable: false
});

profile.name="varun";
profile.age = 10;
console.log(profile);