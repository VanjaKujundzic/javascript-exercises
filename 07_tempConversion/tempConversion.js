const convertToCelsius = function(fahrenheit) {
const toCelsius= (fahrenheit-32)*5/9;
if(toCelsius===0){
return toCelsius;
}
return +toCelsius.toFixed(1); 

};

const convertToFahrenheit = function(celsius) {
const toFahrenheit= (celsius*(9/5)+32);

return +toFahrenheit.toFixed(1);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
