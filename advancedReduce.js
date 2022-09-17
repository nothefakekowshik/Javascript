const users=[
    {firstName: "kowshik" ,age : 21},
    {firstName: "Elon" ,age : 50},
    {firstName: "Nope" ,age : 50},
]

// data={}
// for(var i of users)
// {
//     if(data[i.age])
//     {
//         data[i.age]+=1;
//     }
//     else
//     {
//         data[i.age]=1;
//     }
// }
// console.log(data);

let output = users.reduce(
    (data,curr)=>
    {
        if(data[curr.age])
        {
            data[curr.age]+=1;
        }
        else
        {
            data[curr.age]=1
        }
        return data;
    },{}
);
console.log(output);



