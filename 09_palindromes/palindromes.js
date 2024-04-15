const palindromes = function (string) {
    string= string.replace(/\s/g, "");
    string= string.replace(/!/g, "");
    string= string.replace(/,/g, "");
    string = string.replace(/\./g, "");
    
    let originalString= string.toLowerCase();
    const lengthOfLoop= string.length;
    let lastChar='';
    for(let i=0; i<lengthOfLoop;i++){
    lastChar+= string.slice(-1);
    string = string.slice(0, -1);
    lastChar= lastChar.toLowerCase();
       
    }
    

    if(originalString===lastChar)
    return true;
    else return false;

};
console.log(palindromes("R3c3car"));

// Do not edit below this line
module.exports = palindromes;

