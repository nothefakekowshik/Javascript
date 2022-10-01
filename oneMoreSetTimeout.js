console.log(1);
await setTimeout(()=>{
    console.log(2);
},1000);
await setTimeout(()=>{
    console.log(3);
},0);
console.log(4);
console.log('====================================');
console.log();
console.log('====================================');

function x()
{
    setTimeout(()=>{
        console.log(i);
    },1000);
    var i = 1;
}
x();