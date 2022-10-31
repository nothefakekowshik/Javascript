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
delete details.age;
details.height = "5 feet 10 inch"
console.log(details);
console.log();
// console.log(details.sayhi);
// details.sayhi();
// for(let i in details)
// {
//     console.log(i);
// }

//objects are mutable.