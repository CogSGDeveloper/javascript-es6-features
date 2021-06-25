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
student_1.fullName.apply(student_2);

const student_3 = {
    fname:'varun',
    lname:'varma'
}

let getFullDetails= function(location) {
    console.log(this.fname+' '+this.lname+' from '+ location );
}

getFullDetails.call(student_3,'bangalore');
getFullDetails.apply(student_3,['bangalore']);
let resFunc = getFullDetails.bind(student_3,'bangalore_bind');
resFunc();