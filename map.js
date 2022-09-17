let arr = [2,4,6,8,10]

function double(i)
{
    return i*2;
}
console.log(arr.map(double));
console.log(arr);

console.log(arr.map(
    (i)=>{
        return i*2;
    }
));
console.log(arr);