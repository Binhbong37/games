const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const prevNumber = document.getElementById('prev-number');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const reset = document.getElementById('reset');

let numberText = undefined;
let prevNumberText = undefined;
let interval = undefined;
let increasingNumber = 0;

let currentNums = [];
let checkNums = [];

reset.addEventListener('click', () => {
    number1.textContent = 0;
    number2.textContent = 0;
    stopBtn.style.display = 'block';
    stopBtn.disabled = true;
    startBtn.disabled = false;
    stopIncreasing();
});

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    stopBtn.style.display = 'block';
    if (numberText) {
        setValues(null, prevNumberText);
    }

    startIncreasing();
});

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    startBtn.style.display = 'block';
    stopIncreasing();
    prevNumberText = numberText;
    setValues(null, prevNumberText);
    const arr = [
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
    ];

    pick2Number();
});

function pick2Number() {
    let num1 = Math.floor(Math.random() * 4);
    let num2 = Math.floor(Math.random() * 10);
    if (num1 === 0 && num2 === 0) {
        num2 = 1;
    }
    currentNums[0] = num1;
    currentNums[1] = num2;

    checkNumbers();
}

function checkNumbers() {
    const isCheck = searchForArray(checkNums, currentNums);
    if (isCheck !== -1) {
        return pick2Number();
    }

    if (
        (currentNums[0] === 3 && currentNums[1] === 4) ||
        (currentNums[0] === 3 && currentNums[1] === 5) ||
        (currentNums[0] === 3 && currentNums[1] === 6) ||
        (currentNums[0] === 3 && currentNums[1] === 7) ||
        (currentNums[0] === 3 && currentNums[1] === 8) ||
        (currentNums[0] === 3 && currentNums[1] === 9)
    ) {
        return pick2Number();
    }

    display_my_nums();
}

function display_my_nums() {
    let resNums = [];
    number1.textContent = currentNums[0];
    number2.textContent = currentNums[1];
    resNums[0] = Number(number1.textContent);
    resNums[1] = Number(number2.textContent);

    checkNums.push(resNums);
    if (checkNums.length > 32) {
        checkNums = [];
    }
}

function startIncreasing() {
    interval = setInterval(() => {
        increasingNumber++;
        if (increasingNumber >= 9) {
            increasingNumber = 0;
        }

        numberText = increasingNumber;
        setValues(numberText, null);
    }, 50);
}

function stopIncreasing() {
    clearInterval(interval);
}

function setValues(curr, prev) {
    if (curr) {
        number1.textContent = curr;
        number2.textContent = curr;
    }
}

function searchForArray(haystack, needle) {
    var i, j, current;
    for (i = 0; i < haystack.length; ++i) {
        if (needle.length === haystack[i].length) {
            current = haystack[i];
            for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
            if (j === needle.length) return i;
        }
    }
    return -1;
}
