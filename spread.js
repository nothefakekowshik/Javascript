const names = ["kowshiik","elon","brocklesnar","undertaker","reymysterio"];
var [first_name , second_name, ...fighters ] = names;
console.log(first_name);
console.log(second_name);
console.log(fighters);
console.log();

function helper(first ,second , ...rest)
{
    console.log("first is ", first);
    console.log("second is ",second);
    console.log("rest are ",rest);
}
helper(names[0],names[1],names.slice(2))
console.log();
helper(names)
console.log();


//spread anedi only iterables ke, iterable lo unna data ni spread chestundi.
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
const lyrics2 = ['head', parts, 'and', 'toes'];
console.log(lyrics);
console.log(lyrics2);
//  ["head", "shoulders", "knees", "and", "toes"]
console.log(parts + lyrics);

console.log('====================================');
console.log();
console.log('====================================');

function writer(...args)
{
    console.log(args);
}
function writerr(args)
{
    console.log(args);
}
writer(1,2,3,4)
writerr(1,2,3,4)


console.log('====================================');
console.log();
console.log('====================================');

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = [...vehicles]; // this is  the example of spread.
console.log(car);