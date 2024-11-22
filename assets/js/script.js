function stdin(text) {
    return prompt(text)
}

function stdoutText(text) {
    console.log(text)
}

function task1() {
    const celsius_marker = 'C';
    const fahrenheit_marker = 'F';
    const userInput = stdin('Enter the temperature in degrees Celsius:')
    let celsius = parseInt(userInput);
    let fahrenheit = (9 / 5) * celsius + 32;
    stdoutTemperature(celsius, celsius_marker)
    stdoutTemperature(fahrenheit, fahrenheit_marker)
}

function stdoutTemperature(temp, marker) {
    console.log(`Temperature: ${temp}${marker}`)
}

function task2() {
    const userInput = stdin('Enter your name:')
    const name = userInput;
    let admin = name;
    stdoutText(admin)
}

task1()
task2()
