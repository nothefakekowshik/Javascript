var clickButtonObject = document.getElementById("btn")
clickButtonObject.addEventListener("click",firstFunction)
clickButtonObject.addEventListener("click",secondFunction)

function firstFunction()
{
    document.getElementById("firstId").innerHTML="we are in the first function";
    console.log("we are in the first function");
}

function secondFunction()
{
    document.getElementById("secondId").innerHTML="we are in the second function";
    console.log("we are in the second function");
}


