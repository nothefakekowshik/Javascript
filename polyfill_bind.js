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

Function.prototype.myBind = function(obj)
{
    return function returner()
    {
        return `hello ${obj.name} and your salary is ${obj.salary}`   
    }
}
var myBindCaller = parent.getSalary.myBind(student)
console.log(myBindCaller());