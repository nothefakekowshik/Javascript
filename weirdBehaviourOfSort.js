var arr = [40, 100, 1, 5, 25, 10]
arr.sort()
console.log(arr);

//this is because the numbers are treated as strings
//29,100 lo 2,1 choostundi 2 is bigger than 1 kada, so 100 mundu ostundi even though 100 is bigger than 25
//apdu ila cheyali

function sorter(a,b)
{
    if(a < b)
    {
        return -1
    }
    return 1;
}
arr.sort(sorter)
console.log(arr);