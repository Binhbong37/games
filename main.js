const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const prevNumber = document.getElementById('prev-number');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const reset = document.getElementById('reset');

let numberText = undefined;
let prevNumberText = undefined;
let interval = undefined;
let increasingNumber = 0;

reset.addEventListener('click', () => {
    number1.textContent = 0;
    number2.textContent = 0;
    number3.textContent = 0;
    stopBtn.style.display = 'block';
    stopBtn.disabled = true;
    startBtn.disabled = false;
    stopIncreasing();
});

startBtn.addEventListener('click', () => {
    document.getElementById('app').classList.remove('success') ||
        document.getElementById('app').classList.remove('wrong');
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

    number1.textContent = 0;
    // number1.textContent = arr[Math.floor(Math.random() * 32)];
    number2.textContent = Math.floor(Math.random() * 3);
    number3.textContent = Math.floor(Math.random() * 10);
});

function checkNumbers(dir) {
    if (dir === 'up') {
        if (numberText > prevNumberText) {
            document.getElementById('app').classList.add('success');
        } else {
            document.getElementById('app').classList.add('wrong');
        }
    } else {
        if (numberText < prevNumberText) {
            document.getElementById('app').classList.add('success');
        } else {
            document.getElementById('app').classList.add('wrong');
        }
    }
}

function startIncreasing() {
    interval = setInterval(() => {
        increasingNumber++;
        if (increasingNumber >= 32) {
            increasingNumber = 0;
        }

        numberText = increasingNumber;
        setValues(numberText, null);
    }, 20);
}

function stopIncreasing() {
    clearInterval(interval);
}

function setValues(curr, prev) {
    if (curr) {
        number1.textContent = curr;
        number2.textContent = curr;
        number3.textContent = curr;
    }

    if (prev) {
        prevNumber.textContent = '';
    }
}
