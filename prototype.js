var student = function (name,age) {
    this.firstname = name;
    this.age = age;
}
student.prototype.wish = function()
{
    console.log(`hello sir ${this.firstname}`);
}
var kowshik = new student("kowshik",21);
var elon = new student("elon",21);
console.log(kowshik.firstname);
console.log(elon.firstname);
elon.wish();
kowshik.wish();