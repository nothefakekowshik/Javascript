const personDetails = {
    name : "kowshik",
    age : 22,
    company : "workfusion"
}
const {name}=personDetails
const {company : workingCompany} = personDetails //assigning the property to a new variable.
console.log(name, workingCompany);


//DESTRUCTURE IN NESTED OBJECTS

const LOCAL_FORECAST = {
yesterday: { low: 61, high: 75 },
today: { low: 64, high: 77 },
tomorrow: { low: 68, high: 80 }
};



// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const {today : {low : lowToday}} = LOCAL_FORECAST;
const {today : {high : highToday}} = LOCAL_FORECAST;


//DESTRUCTURE IN ARRAYS

var [a,b,,,c] = [1,2,3,4,5,6]
console.log(a,b,c);