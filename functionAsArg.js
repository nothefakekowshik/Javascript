function sayHello(name)
{
    console.log("hello "+name );
}
function sayBye(name)
{
    console.log("bye "+name);
}
function greeting(name,logic)
{
    logic(name);
}
greeting("kowshik",sayHello);
greeting("kowshik",sayBye);