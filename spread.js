const names = ["kowshiik","elon","brocklesnar","undertaker","reymysterio"];
var [first_name , second_name, ...fighters ] = names;
console.log(first_name);
console.log(second_name);
console.log(fighters);
console.log();
helper(names)
function helper(first ,second , ...rest)
{
    console.log(first);
    console.log(second);
    console.log(rest);
}
console.log();
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
const lyrics2 = ['head', parts, 'and', 'toes'];
console.log(lyrics);
console.log(lyrics2);
//  ["head", "shoulders", "knees", "and", "toes"]
console.log(parts + lyrics);