function x()
{
    var a=7;
    function y()
    {
        console.log(a);
    }
    return y;
}
function bot()
{
    var b=900;
    let a=7;
    function x()
    {
        function y()
        {
            console.log(a,b);
        }
        a=100;
        y();
    }
    x();
    return a;
}

var z=bot();
console.log(z);
// var z=bot();
// console.log(z);
// console.log("----");
// z();


//Another example : 

// console.log("Another example (add) and (plus)");


// function add() 
// {
//   let counter = 0;
//   function plus() 
//   {
//   	counter += 1;
//   }
//   plus();  
//   return counter; 
// }
// console.log(add());


// //Another example: 

// console.log("Another example (add) ");

// let counter = 0;

// // Function to increment counter
// function add() 
// {
//   let counter = 0; 
//   counter += 1;
//   return counter;
//   console.log(counter);
// }

// // Call add() 3 times
// add();
// add();
// add();



//Closure : A function which is returned along with its lexical scope bundled together is known as a closure. The value wll not be taken but the reference will be taken.