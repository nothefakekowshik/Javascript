console.log("Start");

setTimeout(function a() {
    console.log("Callback2");
 }, 10000);

setTimeout(function a() {
   console.log("Callback1");
}, 1000);

console.log("End");

var i=1;
while (i<=1000000000)
{
    i+=1;
}
console.log("While expires");

console.log();
console.log("one more example");
console.log("Start");

setTimeout(function a() {
   console.log("Callback");
}, 1111);

console.log("one more End");