setTimeout(() => {
    function firstFunction()
    {
        console.log("we are in the first function");
    }
    firstFunction()
}, 3000);

setTimeout(()=>
{
    function secondFunction()
    {
        console.log("we are in the second function");
    }
    secondFunction()
},3000)

console.log("doing remaining works");