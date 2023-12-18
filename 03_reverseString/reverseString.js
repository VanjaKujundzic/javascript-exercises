const reverseString = function(string) {
    let reversed="";
    let newString;
    j=1;
    for(let i=1; i<=string.length;i++){

        newString = string.charAt(string.length-j);
        
        reversed+=newString;
        j++;

     
    }
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
