var name = 'kowshikk'
const personObject = {
    name : 'kowshik',
    display1 : function()
    {
        console.log("hello",this.name);
    },
    display2 : ()=>
    {
        console.log("hello",this.name);
    },
};
personObject.display1();
personObject.display2();



//arrow functions hvae global scope
//nrml functions in have local scope
//display2 aite global name print cheyali , ikada ento mari error ostondi. 
//try this in console, you will get.