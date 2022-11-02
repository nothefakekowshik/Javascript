function *generatorFunction()
{
    yield 1;
    yield 2;
    yield 3;
}

var sum = 0
for(var i of generatorFunction())
{
    sum+=i
    console.log(i);
}
console.log("sum is",sum);


const generatorOb = generatorFunction()
console.log(generatorOb.next().value);