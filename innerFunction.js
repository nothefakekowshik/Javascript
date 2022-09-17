function outer(a)
{
    function inner(b)
    {
        console.log(a,b);
        return a+b;
    }
    return inner;
}
val = outer(2);
console.log(outer(2)(10));
console.log(val(10));
