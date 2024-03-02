const convertToCelsius = function(fahrenheitTemp) {
  return roundToOne((fahrenheitTemp - 32) * (5 / 9));
};

const convertToFahrenheit = function(celsiusTemp) {
  return roundToOne((celsiusTemp * (9 / 5) + 32));
};

function roundToOne(num) {
  return Math.round(num * 10) / 10;
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
