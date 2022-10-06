const obj = [{name : 'kowshik ',age : 22} , {name : 'moksh',age : 1},{name: "elon",age:60}]
obj.sort(function(a,b)
{
    if(a.age > b.age)
    {
        return 1;
    }
    return -1;
});
console.log(obj);