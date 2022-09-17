function checker(x)
{
    return x>0;
}
var a = [4,1,74,1,4,65];

console.log(a.every(checker));

console.log('====================================');
console.log();
console.log('====================================');
console.log(a.every((b)=>
    b > 0
));

console.log();


console.log(a.every( (x)=>
{
    return x > 0
}))
