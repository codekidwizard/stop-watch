// script.js
let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');

function updateTime() {
    const currentTime = Date.now();
    const timeDifference = currentTime - startTime + elapsedTime;

    const minutes = Math.floor(timeDifference / 60000);
    const seconds = Math.floor((timeDifference % 60000) / 1000);
    const milliseconds = Math.floor((timeDifference % 1000) / 10);

    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
    millisecondsEl.textContent = milliseconds.toString().padStart(2, '0');
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now();
        timer = setInterval(updateTime, 10);
        startBtn.disabled = true;
        stopBtn.disabled = false;
        resetBtn.disabled = true;
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
        elapsedTime += Date.now() - startTime;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        resetBtn.disabled = false;
    }
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    millisecondsEl.textContent = '00';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize buttons
stopBtn.disabled = true;
resetBtn.disabled = true;
