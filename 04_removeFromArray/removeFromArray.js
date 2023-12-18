const removeFromArray = function(oldArray, ...numbers) {
const newArray=[];
for(let i=0; i<oldArray.length;i++){
    if(!numbers.includes(oldArray[i])){
        newArray.push(oldArray[i]);
    }
    
    
}
return newArray;


};

// Do not edit below this line
module.exports = removeFromArray;
