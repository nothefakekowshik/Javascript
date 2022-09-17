// Assign a function to a variable.
const foo = function() {
    console.log("foobar");
 }
 foo(); // Invoke it using the variable
 // foobar

 
 

// The ability to pass function as an argument.

function sayHello() 
{
    return "Hello, ";
 }
 function greeting(helloMessage, name) 
 {
    console.log("hello message is a -> " + typeof helloMessage);
   console.log(helloMessage() + name);
 }
 
 greeting(sayHello, "JavaScript!");
 
 