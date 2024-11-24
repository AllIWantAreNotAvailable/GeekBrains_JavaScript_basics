function stdin(text) {
    return prompt(text);
}

function stdout(text) {
    console.log(text);
}

function task1() {
    stdout('Task 1\n');
    let userInput;
    userInput = stdin('Enter first number:');
    let num1 = parseInt(userInput);
    stdout(`${num1} <= 1 -> ${num1 <= 1}`, num1);
    userInput = stdin('Enter second number:');
    let num2 = parseInt(userInput);
    stdout(`${num2} >= 3 -> ${num2 >= 3}`, num2);
}

function task2() {
    stdout('\n\nTask 2\n');
    const test = true;
    test ? stdout('+++') : stdout('---');
}

function task3() {
    stdout('\n\nTask 3\n');
    let userInput;
    userInput = stdin('Enter the day of the month in the range [1, 31]:');
    let day = parseInt(userInput);
    console.assert(!isNaN(day) && 0 < day < 32, `Number ${day} outside the range [1, 31]!`);
    if (1 <= day && day <= 10) {
        stdout(`${day} -> First decade of the month`);
    } else if (11 <= day && day <= 20) {
        stdout(`${day} -> Second decade of the month`);
    } else if (21 <= day && day <= 31) {
        stdout(`${day} -> Third decade of the month`);
    }
}

function task4() {
    stdout('\n\nTask 4\n');
    let userInput;
    userInput = stdin('Enter a number:');
    let userNumber = parseInt(userInput);
    userNumber = userNumber < 0 ? userNumber * -1 : userNumber;
    stdout(`Number of hundreds: ${Math.floor(userNumber / 100)}\nNumber of tens: ${Math.floor(userNumber / 10) % 10}\nNumber of units: ${userNumber % 10}`);
}

task1();
task2();
task3();
task4();
