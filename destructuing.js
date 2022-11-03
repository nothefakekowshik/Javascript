const personDetails = {
    name : "kowshik",
    age : 22,
    company : "workfusion"
}
const {name}=personDetails
const {company : workingCompany} = personDetails //assigning the property to a new variable.
console.log(name, workingCompany);