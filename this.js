class student
{
    real_name="";
    constructor(name)
    {
        this.real_name=name;
    }
    getName()
    {
        return this.real_name;
    }
}
var s1 = new student("kowshik");
var s2 = new student("elon");
console.log(s1.getName());
console.log(s2.getName());

/* ------------------------------------------*/

console.log('====================================');
console.log();
console.log('====================================');
console.log();
function stu(name , age)
{
    this.original_name=name;
    this.age=age;
    this.getName = ()=>
    {
        return this.original_name;
    }
    this.getAge = ()=>
    {
        return this.age;
    }
}

var o = new stu("kowshik",21);
console.log(o.getAge());