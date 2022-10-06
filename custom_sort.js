const arr = [1,110,2]
arr.sort(); // this doesnt work, because sort() treats the eles as strings.
/*However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:*/
console.log(arr);
arr.sort(function(a,b)
{
    if(a < b)
    {
        return -1;
    }
    return 1;
})

console.log(arr);