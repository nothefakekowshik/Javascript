function checking()
{
    function outer()
    {
        function inner()
        {
            console.log(outer);
            function anotherInner()
            {
                console.log("im in the another inner function");
            }
            return anotherInner;
        }
        var outer=10;
        return inner;
    }
    return outer;
}

// var mainer = checking();
// var dup = mainer();
// dup();
// console.log("=======");

// var mainer = checking()(); // currying
// mainer();
// console.log("=======");

// checking()()();
checking()()()();