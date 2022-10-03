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

Function.prototype.myCall = function(obj)
{
    return `hello ${obj.name} and your salary is ${obj.salary}`
}

console.log(parent.getSalary.myCall(student))