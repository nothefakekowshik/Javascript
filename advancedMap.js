const users=[
    {firstName: "kowshik" ,age : 21},
    {firstName: "Elon" ,age : 50},
    {firstName: "Nope" ,age : 50},
]
const output= users.map(
    (x)=>
    {
        return x.firstName
    }
)
console.log(output);

for(var i of users)
{
    console.log(i.age);
}