const myObj = {
    first : 'kowshik',
    wishMe : function(){
        return this;
    }
}
console.log(myObj.wishMe());