const users=[
    {firstName: "kowshik" ,age : 20},
    {firstName: "Elon" ,age : 50},
    {firstName: "Nope" ,age : 30},
]

var output = users.filter((x)=> x.age >= 30)
.map((x)=> x.firstName)

console.log(output);
