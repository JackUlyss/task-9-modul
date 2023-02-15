let minValue
let maxValue
let answerNumber
let numbersInText
let orderNumber = 1;
let gameRun = true;

let ones = [``, `один`, `два`, `три`, `четыре`, `пять`, `шесть`, `семь`, `восемь`, `девять`, `десять`, `одиннадцать`, `двенадцать`, `тринадцать`, 
`четырнадцать`, `пятнадцать`, `шестнадцать`, `семнадцать`, `восемнадцать`, `девятнадцать`];
let tens = [``, ``, `двадцать`, `тридцать`, `сорок`, `пятьдесят`, `шестьдесят`, `семьдесят`, `восемьдесят`, `девяносто`];
let hundreds = [``, `сто`, `двести`, `триста`, `четыреста`, `пятьсот`, `шестьсот`, `семьсот`, `восемьсот`, `девятьсот`];

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;

function textF () {
    let x
    let negative = false
    if (answerNumber <= -1) {
        x = Math.abs(answerNumber);
        negative = true
    } else {
        x = answerNumber;
    }

    if (x < 20 && x > 0) {
        numbersInText = ones[x];
    } else if (x > 19 && x < 100) {
        const integer = tens[Math.floor(x / 10)];
        const remainder = ones[x % 10];
        numbersInText = `${integer} ${remainder}`;
    } else if (x > 99) {
        const integer = hundreds[Math.floor(x / 100)];
        let remainder = x % 100;
        if (remainder < 20) {
            remainder = ones[remainder]
            numbersInText = `${integer} ${remainder}`
        } else {
            const a = tens[Math.floor(remainder / 10)];
            const b = ones[remainder % 10];
            numbersInText = `${integer} ${a} ${b}`
        }
    } else {
        numbersInText = `0`;
    }
    numbersInText = (negative) ? `минус ${numbersInText}` : numbersInText
}

function questionText () { 
    textF ()
    if (numbersInText.length < 20) {
        answerText = numbersInText
    } else {
        answerText = answerNumber
    }
    const phraseRandom = Math.round( Math.random()* 3);
        if (phraseRandom === 1) {
            answerField.innerText = `Вы загадали число ${answerText }?`;
        } else if (phraseRandom === 2) {
            answerField.innerText = `Я думаю, это число ${answerText }!`;
        } else {
            answerField.innerText = `Может, это ${answerText }?`;
        }
}

document.querySelector('.btn-start').addEventListener ('click', () => {
    start ()
    document.querySelector('.text-1').innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
})

function start () {
    // minValue = parseInt(prompt('Минимальное значение числа для игры','0')) || 0;
    // maxValue = parseInt(prompt('Максимальное значение числа для игры','100')) || 100;
    minValue = parseInt(document.querySelector('#min').value) || 0;
    maxValue = parseInt(document.querySelector('#max').value) || 100; 
    minValue = minValue <= -1000 ? -999 : minValue;
    maxValue = maxValue >= 1000 ? 999 : maxValue;
    // alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    questionText ()
}

start()

document.getElementById('btnRetry').addEventListener('click', function () {
    start ();
    gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*3);
            if (phraseRandom === 1) {
                answerField.innerText = `Вы загадали неправильное число!\n\u{1F914}`;
            } else if (phraseRandom === 2) {
                answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
            } else {
                answerField.innerText = `Я не могу угадать число.\nПопробуем ещё раз?\u{1F643}`
            }
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            questionText ()
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || maxValue < minValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            // textF ()
            questionText ()
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()* 3);
        if (phraseRandom === 1) {
            answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
        } else if (phraseRandom === 2) {
            answerField.innerText = `Познай мощь алгоритмов!\n\u{1F92F};`;
        } else {
            answerField.innerText = `Это было просто\n\u{1F607}`;
        }
        gameRun = false;
    }
})