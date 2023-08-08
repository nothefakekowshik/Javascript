1. It is better not to use delete.
    var a = [1,2,3];
    console.log(a);
    delete a[1];
    console.log(a);
    Output : 
    [ 1, 2, 3 ]
    [ 1, <1 empty item>, 3 ]
    console.log(a[1]); -> undefined, the rotation of array doesn't take place.

2. Debouncing vs Throttling : 
    For Optimisation performance of web app
    Limiting the rate of function calls( API etc.. any function)
    Eg : 
    Search bar 
    for every key press in the search box, will we fire the function call to the server for fetching?
    if the word has 10 chars in it, we will call the function 10 times. This way of building the API is SHIT. VERY EXPENSIVE OPERATION.

    Debouncing : 
    If the diff between keystrokes is more than X ms, then API will be called. (rate limiting).

    Throttling :
    Make a API call after X time.
    it means that make a call after every X ms time.

3. Promise.all() is efficient because it works parallely.




    
    