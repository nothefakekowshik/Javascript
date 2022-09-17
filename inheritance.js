class parent
{
    wish()
    {
        console.log("hello im in the parents");
    }
}
class child extends parent
{
    wish()
    {
        console.log("in the child");
    }
}
var co = new parent();
co.wish();