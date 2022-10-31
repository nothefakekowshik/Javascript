class a
{
    display() {
        console.log("in the class a");
    }
}
class b extends a
{
    display()
    {
        console.log("in the class b ");
    } // ** if this method is absent in this class, then the function display in the class a will be called.
}

var bobj =new b();
bobj.display();