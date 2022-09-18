import fetch from 'node-fetch';
var url ='https://api.chucknorris.io/jokes/random'
await fetch(url)
.then((msg)=>{
    //console.log(msg.json());
    return msg.json();
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
console.log("final");

//see the difference by removing await 