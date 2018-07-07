let convertFahrenheitToCelsius = function (fahrenheit) {
    let result = (fahrenheit - 32) * (5/9);
    return result;
}

let value = convertFahrenheitToCelsius(68);

console.log(value);