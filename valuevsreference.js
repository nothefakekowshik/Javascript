var number=10;
function change(number)
{
    number+=1;
}
change(number);
console.log(number); // Guess the output i.,e 10


var obj={value : 10};
function update(obj)
{
    obj.value+=1;
}
update(obj);
console.log(obj.value); // output is 11 .

/* Note: Primitives are copied by their value , objects are copied by their referenc*/ 