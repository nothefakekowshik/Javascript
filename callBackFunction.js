function greeting(name) {
    console.log("hello " + name);
  }
  
  function processUserInput(callback,name) {
    callback(name);
  }
  processUserInput(greeting,"kowshik");
  