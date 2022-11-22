var numers=[1,2,3,4,5,6,7]

const result=numers.filter((num)=>{
    return num%2===0
})
console.log(result,numers);
console.log();
console.log();
function filteration(nums)
{
    return nums % 2==0
}
console.log(numers.filter(filteration));
