let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item,index) {
console.log(item + " "+index);
  sum += item;
}
// or

console.log();
numbers.forEach((element , index) =>
{
    console.log(element+" "+index);
})