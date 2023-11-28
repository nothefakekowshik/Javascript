
var mouseObject = document.getElementById("mouseId");

mouseObject.addEventListener("mouseover",mouseOverFunction)
mouseObject.addEventListener("mouseout",mouseOutFunction)
mouseObject.addEventListener("mousedown",mouseDownFunction)

function mouseOverFunction()
{
    console.log("mouse is hovering and you cant hover again");
    mouseObject.removeEventListener("mouseover",mouseOverFunction)
}
function mouseDownFunction()
{
    console.log("pressing the button");
}
function mouseOutFunction()
{
    console.log("cursor has left the element, now you can hover again.");
    mouseObject.addEventListener("mouseover", mouseOverFunction)

}