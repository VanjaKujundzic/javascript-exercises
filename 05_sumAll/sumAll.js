const sumAll = function(number1, number2) {
    let sum=0;
    if(number1<0 || number2<0){
        return "ERROR";
    }else if(!Number.isInteger(number1) || !Number.isInteger(number2))
         return "ERROR"

    if(number1>number2){
        for(let i=number1;i>=number2;i--){
            sum+=i;
    
            
        }
        return sum;

    }

    for(let i=number1;i<=number2;i++){
        sum+=i;

        
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
