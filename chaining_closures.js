function mainer(a)
{
    function outer(b)
    {
        function inner(c)
        {
            console.log(a+b+c);
        }
        return inner;
    }
    return outer;
}
var a = mainer(2);
a(3)(4);
/*
 or 
*/
mainer(2)(3)(4);