function checking()
{
    function outer()
    {
        //var outer=10;
        function inner()
        {
            console.log(outer);
        }
        let outer=10;
        return inner;
    }
    return outer;
    
}
var mainer = checking()();
mainer();
