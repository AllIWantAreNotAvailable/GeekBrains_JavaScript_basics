function stdin(text) {
    return prompt(text);
}

function stdout(text) {
    console.log(text);
}

function task1() {
    stdout('Task 1\n');
    const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
    };
    const filteredNumbers = Object.fromEntries(Object.entries(numbers).filter(([key, value]) => value >= 3));
    stdout(`${JSON.stringify(filteredNumbers)}`);
}

function task2() {
    stdout('\n\nTask 2\n');
    const post = {
        author: "John", // вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2, // вывести это число
                }
            },
            {
                userId: 5, // вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", // вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1,
                }
            }
        ]
    };
    let output = '';
    output += `1 -> ${post.author}\n`;
    output += `2 -> ${post.comments[0].rating.dislikes}\n`;
    output += `3 -> ${post.comments[1].userId}\n`;
    output += `4 -> ${post.comments[1].text}`;
    stdout(output);
}

function task3() {
    stdout('\n\nTask 3\n');
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];
    products.forEach((product) => {product.price = product.price - product.price * 0.15});
    stdout(JSON.stringify(products));
}

function task4() {
    stdout('\n\nTask 4\n');
    const products = [
        {
            id: 3,
            price: 127,
            photos: ["1.jpg", "2.jpg"],
        },
        {
            id: 5,
            price: 499,
            photos: [],
        },
        {
            id: 10,
            price: 26,
            photos: ["3.jpg"],
        },
        {
            id: 8,
            price: 78,
        },
    ];
    stdout(JSON.stringify(products.filter(product => product.photos && 0 < product.photos.length)));
    stdout(JSON.stringify(products.sort((a, b) => a.price - b.price)));
}

function task5() {
    stdout('\n\nTask 5\n');
    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    stdout(JSON.stringify(ru.map(function (obj, index){
        const newObj = {};
        newObj[en[index]] = obj;
        return newObj;
    })));
}

task1();
task2();
task3();
task4();
task5();
