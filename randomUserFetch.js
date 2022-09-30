import fetch from "node-fetch";

const url = "https://randomuser.me/api/";

const data = await fetch(url);
const d = await data.json();

let arr = d.results[0];
console.log(arr);
