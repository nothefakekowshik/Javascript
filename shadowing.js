var b=100;
{
    let b="hello world";
    console.log(b);
}
console.log(b);

//but this is not allowed.
// let b=100
// {
//     var b = "hello";
//     console.log(b);
// }
// console.log(b);

console.log();
var a = 100;
{
    var a = 10; // same name as global var
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30 
}
console.log(a);


//this is illegal shadowing.
// let a = 20;
// {
//     var a = 20;
// }
// Uncaught SyntaxError: Identifier 'a' has already been declared