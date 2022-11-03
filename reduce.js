var numbers=[10,9,-2,0,100]
var ans =0
const max_number=numbers
.reduce( (i,j) =>
{
    return Math.max(i,j);
});
console.log(max_number);

const add=numbers.reduce(
    (i,j) => 
    {
        return i+j;
    }
);
console.log(add);


let summer = (a) =>{
    return [a].reduce((acc, num)=>{
        return acc + num
    })
}
var a = [1,2,3,4,5]
console.log(summer(a));