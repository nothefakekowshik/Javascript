function main()
{
    function inner()
    {
        console.log("in the inner ");
    }
    return inner;
}
var cheking = main();
cheking();