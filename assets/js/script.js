function stdin(text) {
    return prompt(text);
}

function stdout(text) {
    console.log(text);
}

function task1() {
    stdout('Task 1\n');
    const zeroString = 'это ноль';
    const evenString = 'это четное число';
    const notEvenString = 'это нечетное число';
    let curString;
    for (let i = 0; i < 12; i++) {
        if (i === 0) {
            curString = zeroString;
        } else if (i % 2 !== 0) {
            curString = notEvenString;
        } else {
            curString = evenString;
        }
        stdout(`${i} – ${curString}`);
    }
}

function task2() {
    stdout('\n\nTask 2\n');
    const array = [1, 2, 3, 4, 5, 6, 7];
    stdout(`[${array}]`);
    const filteredArray = array.filter(value => value !== 4 && value !== 5);
    stdout(`[${filteredArray}]`);
}

function task3() {
    stdout('\n\nTask 3\n');
    const myRandIntArray = getRandomIntArray(5, 0, 9);
    stdout(`1 -> [${myRandIntArray}]`);
    stdout(`2 -> ${myRandIntArray.reduce((acc, num) => acc + num, 0)}`);
    stdout(`3 -> ${Math.min(...myRandIntArray)}`);
    stdout(`4 -> ${myRandIntArray.includes(3)}`)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntArray(length, min, max) {
    const array = [...new Array(length)];
    for (let i = 0; i < length; i++) {
        array[i] = getRandomInt(min, max);
    }
    return array;
}

function task4() {
    stdout('\n\nTask 4\n');
    let mounting = '';
    const symbol = 'x';
    for (let i = 0; i < 20; i++) {
        mounting += `${symbol.repeat(i)}\n`
    }
    stdout(mounting);
}

task1();
task2();
task3();
task4();
