var mouseObject = document.getElementById("mouseId");

mouseObject.addEventListener("mouseover",mouseOverFunction)
mouseObject.addEventListener("mouseout",mouseOutFunction)
mouseObject.addEventListener("mousedown",mouseDownFunction)


mouseObject.removeEventListener("mouseover",mouseOverFunction)

function mouseOverFunction()
{
    console.log("mouse is hovering");
}
function mouseDownFunction()
{
    console.log("pressing the button");
}
function mouseOutFunction()
{
    console.log("cursor has left the element");
}

