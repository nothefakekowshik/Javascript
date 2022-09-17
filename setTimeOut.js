// function x()
// {
//     var i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
//     console.log("kowshik");
// }
// x();

//Guess the output , closure concept applies here. i will not hold the value but it stores the reference.


// question : i want to print i for every ith second after i seconds.

function y()
{
    for(var i=1;i<=5;i++)
    {
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
    console.log("kowhsik in the var");
} //this is the problem with var. var is global scoped.
y();


// function x()
// {
//     for(let i=1;i<=5;i++)
//     {
//         setTimeout(() => {
//             console.log(i+" "+ "in the let");
//         }, i*1000);
//     }
//     console.log("kowhsik in the let");
// } // this is the solution, lwt is block scoped.
// x();

/*
interviw question : 
i cant use let ,then how?
*/

function x()
{
    for(var i=1;i<=5;i++)
    {
        function helper(x)
        {
            setTimeout(function (){
                console.log(x+" "+ "in the let");
            }, x*1000);
        }
        helper(i);
    }
    console.log("kowhsik in the let");
} // this is the solution without let.
x();

setTimeout(()=>{
    console.log("in the set time out ");
},10);





function myDisplayer(something) {
    document.getElementById("demo").innerHTML = something;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);