async function waiter()
{
    setTimeout(() => {
        console.log("in the set time out");
    }, 2000);
}
async function helper()
{
    await waiter();
    console.log("not in the set timeout");
}
helper();