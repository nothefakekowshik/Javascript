var name = "kowshik in the global";
console.log(name);
function varDemo()
{
    console.log(name);
    name = "kowshik in the local";
    console.log(name);
}

varDemo()
console.log(name);
console.log("---------------------");
let letName = "kowshik in the global let";
console.log(letName);
function letDemo()
{
    console.log(letName);
    letName="kowshik in the local let"
    console.log(letName);
}

letDemo()
console.log(letName);