var parent = {
    name : "kwoshik",
    age  : 21,
    salary : 50000,
    getSalary : function(name){
        return `hello ${this.name} and your salary is ${this.salary}`
    }
}
var student ={
    name : "kowshik",
    age: 22,
    salary : 500000
}

console.log(parent.getSalary.call(student)); //call takes args separately.

console.log(parent.getSalary.apply(student,["kowshik"])); //apply takes args as an array.

//bind 
// bind returns an instance and that should be called again

console.log(parent.getSalary.bind(student,"kowshik"));
console.log(parent.getSalary.bind(student,"kowshik")());

var caller = parent.getSalary.bind(student,"kowshik");
console.log(caller());