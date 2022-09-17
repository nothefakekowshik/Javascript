const hm=new Map();
hm.set('info', {'name':'kowshik',
                'age':22});

console.log(hm.get('info'));
console.log(hm.has('info'));
console.log(hm.size);
for(let [key,value] of hm)
{
    console.log(key,value);
}
for(let key of hm.keys())
{
    console.log(key);
}
for(let value of hm.values())
{
    console.log(value);
}