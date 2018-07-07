let tempConvert = function (fahrenheit) {
    return {
        'fahrenheit': fahrenheit,
        'celsius': (fahrenheit -32) * (5/9),
        'kelvin': (fahrenheit + 459.67) * (5/9),
    }
}

let temps = tempConvert(68);

console.log( `Fahrenheit: ${temps.fahrenheit} converted to Celsius: ${ temps.celsius }, Kelvin: ${ temps.kelvin } ` );
console.log(temps);