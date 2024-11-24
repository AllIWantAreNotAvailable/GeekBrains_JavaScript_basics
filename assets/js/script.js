function stdin(text) {
    return prompt(text);
}

function stdout(text) {
    console.log(text);
}

function task1() {
    stdout('Task 1\n');
    let assertion;
    let userInput;
    userInput = prompt('Enter the first summand:');
    const num1 = parseInt(userInput);
    assertion = isNaN(num1);
    console.assert(!assertion, `Not a number! ${userInput}`);
    if (assertion) return NaN;
    userInput = stdin('Enter the power of the first summand:');
    const pow1 = parseInt(userInput);
    assertion = isNaN(pow1);
    console.assert(!assertion, `Not a number! ${userInput}`);
    if (assertion) return NaN;
    userInput = prompt('Enter the second summand:');
    const num2 = parseInt(userInput);
    assertion = isNaN(num2);
    console.assert(!assertion, `Not a number! ${userInput}`);
    if (assertion) return NaN;
    userInput = stdin('Enter the power of the second summand:');
    const pow2 = parseInt(userInput);
    assertion = isNaN(pow2);
    console.assert(!assertion, `Not a number! ${userInput}`);
    if (assertion) return NaN;
    stdout(`${num1} ** ${pow1} + ${num2} ** ${pow2} = ${pow(num1, pow1) + pow(num2, pow2)}`);
}

function pow(base, pow = 3) {
    return base ** pow;
}

function task2() {
    stdout('\n\nTask 2\n');
    let assertion;
    let userInput;
    userInput = prompt('Enter the individual\'s salary:');
    const salary = parseInt(userInput);
    assertion = isNaN(salary);
    console.assert(!assertion, `Not a number! ${userInput}`);
    if (assertion) return NaN;
    stdout(`The amount of salary net of taxes is equal to ${getSalaryAfterTax(salary)}`);
}

function getSalaryAfterTax(salary) {
    return salary - getTaxOnIndividualIncome(salary);
}

function getTaxOnIndividualIncome(wageAmount, taxAmount = 0.13) {
    return wageAmount * taxAmount;
}

function task3() {
    stdout('\n\nTask 3\n');
    let assertion;
    let userInput;
    let parsedNumber;
    const userNumbers = [];
    for (let i = 0; i < 3; i++) {
        userInput = stdin(`Enter a ${i + 1} number:`);
        parsedNumber = parseInt(userInput);
        assertion = isNaN(parsedNumber);
        console.assert(!assertion, `Not a number! ${userInput}`);
        if (assertion) return NaN;
        userNumbers.push(parsedNumber);
    }
    stdout(`Максимальное значение среди [${userNumbers.join(', ')}] – это ${Math.max(...userNumbers)}`);
}

function task4() {
    stdout('\n\nTask 4\n');
    let userInput;
    let assertion;
    userInput = prompt('Enter the first number:');
    const num1 = parseInt(userInput);
    assertion = isNaN(num1);
    console.assert(!assertion, `Not a number! ${userInput}`);
    if (assertion) return NaN;
    userInput = prompt('Enter the second number:');
    const num2 = parseInt(userInput);
    assertion = isNaN(num2);
    console.assert(!assertion, `Not a number! ${userInput}`);
    if (assertion) return NaN;
    stdout(`${num1} + ${num2} = ${addition(num1, num2)}`);
    stdout(`${num1} - ${num2} = ${subtraction(num1, num2)}`);
    stdout(`${num1} * ${num2} = ${multiplication(num1, num2)}`);
    stdout(`${num1} / ${num2} = ${division(num1, num2)}`);
}

function addition(summand1, summand2) {
    return summand1 + summand2;
}

function subtraction(diminutive, subtractive) {
    return diminutive - subtractive;
}

function multiplication(multiplier1, multiplier2) {
    return multiplier1 * multiplier2;
}

function division(dividend, divisor) {
    return dividend / divisor;
}

task1();
task2();
task3();
task4();
