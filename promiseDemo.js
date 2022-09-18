function helper(a)
{
    console.log(a);
}
function adder(a)
{
    return new Promise((success , broken)=>
    {   
        if(a!=0)
        {
            success("success");
        }
        if(a==0)
        {
            broken("number cant be zero");
        }
    })
}
var a = 10
adder(a)
.catch(err => console.log(err))
.then(helper(a));

console.log('====================================');
console.log();
console.log('====================================');

adder(a)
.catch(err => console.log(err))
.then(done => console.log(done)) //another extra success msg is coming from here.
.then(helper(a));
console.log();
console.log("----------------------");
console.log('====================================');
console.log();
console.log('====================================');

adder(a)
.then((msg)=>
{
    console.log(msg);
}).catch((error)=>
{
    console.log(error);
})