const fibonacci = function(count) {
    if(count<0)
    return "OOPS";
    const fib=[0,1];

    for (let i = 2; i <= count; i++) {
        fib[i]= fib[i-1]+fib[i-2];

        
        
    }
    return fib[count];

   
};

console.log(fibonacci(3)); 

console.log(fibonacci(4));




// Do not edit below this line
module.exports = fibonacci;
