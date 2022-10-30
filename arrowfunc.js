var isEven=(a)=>
{
    return a%2===0;
}
var result=[2,4,6,8].every(isEven)
console.log(result)


var a=(b,c)=>
{
    return b+c;
}
console.log(a(2,3));


var arrowFunctionDefaultReturn = (name) => `hello ${name}`

console.log(arrowFunctionDefaultReturn("kowshik"));