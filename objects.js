const details={
    name:"kowshik",
    age:25,
    height: "5 feet 11 inch",
    sayhi:function()
    {
        console.log("saying hi");
    }
}
console.log(details);
console.log(details.hasOwnProperty("age"));
delete details.age;
details.height = "5 feet 10 inch"
console.log(details);
console.log();
console.log(details.hasOwnProperty("age"));
// console.log(details.sayhi);
// details.sayhi();
// for(let i in details)
// {
//     console.log(i);
// }

//objects are mutable.


function creator(name,age,company)
{
    this.name=name;
    this.age=age;
    this.company=company;
}
var kowshik_object = new creator("kowshik",22,"workfusion")
console.log(kowshik_object);
for(var key in kowshik_object)
{
    console.log(key,"->",kowshik_object[key]);
}