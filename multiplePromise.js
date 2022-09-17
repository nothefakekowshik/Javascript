const promise1 = Promise.resolve("hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
{
    setTimeout(resolve, 100,"ok bye");
});

Promise.all([promise1,promise2,promise3]).then(result => console.log(result));