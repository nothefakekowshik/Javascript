import fetch from 'node-fetch';
var url ='https://api.chucknorris.io/jokes/random'
await fetch(url)
.then((msg)=>{
    return msg.json();
}).then((data)=>{
    console.log(data.value.replaceAll("Chuck Norris","Kowshik"));
})
.catch((err)=>{
    console.log(err);
})
//console.log("final");

//see the difference by removing await and print the final log.