function wish(name)
{
    console.log(`hello ${name}`);
}

function specialWish(wrapped)
{
    return function()  
    {
        console.log("Special wish has started");
    }
}
