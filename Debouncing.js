const getData = () => {
    console.log("fetching data...");
}

const debounce = (func, delay) => {
    
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, delay);
        
    }
}

const dataHelper = debounce(getData, 3000);

