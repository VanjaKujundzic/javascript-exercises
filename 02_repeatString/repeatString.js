const repeatString = function(string, number) {
    
    if(number==0){
        return '';
    }else if (number<0){
        return 'ERROR';
    }

    result=string;
     
   
    for (let i=1; i<number; i++){

         result+=string;

    }

    return result;

};

// Do not edit below this line
module.exports = repeatString;
