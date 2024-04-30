const convertToCelsius = function(temperature) {
  let converted = (temperature - 32) * 5 / 9;
  return parseInt(converted.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  let converted = (temperature* 5 / 9 ) + 32;
  return parseInt(converted.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
