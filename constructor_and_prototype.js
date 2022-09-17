function person(name,age)
{
    this.name=name;
    this.age=age;
    this.wish=function()
    {
        return `hello ${this.name}, welcome to the world of Javascript`;
    }
}
const kowshik_o = new person("kowshik" , 21);
console.log(kowshik_o.wish());

// we cant add another property to the person consturctor
/*
    now i want to add number property to the person
    i.e., person.number = "";
    this results in error ,then prototype comes to picture.
*/
person.prototype.nationality="indian";
console.log(kowshik_o.nationality);