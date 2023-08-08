var student = function (name,age) {
    this.firstname = name;
    this.age = age;
}
student.prototype.gender;

student.prototype.wish = function()
{
    console.log(`hello sir ${this.firstname}`);
}



var kowshik = new student("kowshik",21);
var greeshma = new student("Greeshma",22)
console.log(kowshik.firstname);

kowshik.gender = 'male';
greeshma.gender='female'
console.log(greeshma);

kowshik.wish();