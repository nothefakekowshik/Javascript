function x()
{
    var i = 1;
    setTimeout(function()
    {
        console.log(i);
    },3000);
    console.log("hello world");
}
x();


function varClosureDemo()
{
    for(var i = 0;i<5;i++)
    {
        setTimeout(function(){
            console.log(i*1000);
        },1000);
    }
}


function letClosureDemo()
{
    for(let i = 0;i<5;i++)
    {
        setTimeout(function(){
            console.log("from let ", i*1000);
        },1000)
    }
}
varClosureDemo();
letClosureDemo();