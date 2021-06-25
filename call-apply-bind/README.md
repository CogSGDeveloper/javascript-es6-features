# Call, Apply, Bind Methods  in JS
## Call Method
- The call() method calls a function with a given this value and arguments provided individually.
```javascript
    const student_1 = {
        fname: 'ajay',
        lname: 'M',
        fullName: function (){
            console.log(this.fname+' '+this.lname);
        }
    }

    student_1.fullName();

    const student_2 = {
        fname:'arun',
        lname:'varma'
    }

    student_1.fullName.call(student_2);

    const student_3 = {
        fname:'varun',
        lname:'varma'
    }

    let getFullDetails= function(location) {
        console.log(this.fname+' '+this.lname+' from '+ location );
    }

    getFullDetails.call(student_3,'bangalore');
```

## Apply Method
- the only difference between call and apply is send parameter i.e in apply we send parameter is array
```javascript
    const student_1 = {
        fname: 'ajay',
        lname: 'M',
        fullName: function (){
            console.log(this.fname+' '+this.lname);
        }
    }

    student_1.fullName();

    const student_2 = {
        fname:'arun',
        lname:'varma'
    }

    student_1.fullName.apply(student_2);

    const student_3 = {
        fname:'varun',
        lname:'varma'
    }

    let getFullDetails= function(location) {
        console.log(this.fname+' '+this.lname+' from '+ location );
    }

    getFullDetails.apply(student_3,['bangalore']);
```

## Bind Method
- its similar to call but the only difference is
    - call will return the result
    - bind will return the function which will be invoked later.

```javascript
    var pokemon = {
        firstname: 'Pika',
        lastname: 'Chu ',
        getPokeName: function() {
            var fullname = this.firstname + ' ' + this.lastname;
            return fullname;
        }
    };

    var pokemonName = function() {
        console.log(this.getPokeName() + 'I choose you!');
    };

    var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

    logPokemon(); // 'Pika Chu I choose you!'
```