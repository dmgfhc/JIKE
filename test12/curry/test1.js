var add = function(items){
    return items.reduce(function(a,b){
        return a+b
    });
};
console.log(add([1,2,3,4]));