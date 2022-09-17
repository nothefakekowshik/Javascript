function helper(a)
{
    setTimeout(() => {
        console.log(a);
    }, 100);
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

// adder(a)
// .catch(err => console.log(err))
// .then(done => console.log(done));