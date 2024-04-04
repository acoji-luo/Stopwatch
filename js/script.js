let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let timeRef = document.querySelector(".timer");
let reset = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if (reset !== 0) {
        clearInterval(reset);
    }
    reset = setInterval(displayTimer, 10);
});

document.getElementById("stop-timer").addEventListener("click", () => {
    clearInterval(reset);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(reset);
    milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
    timeRef.innerHTML = '00 : 00 : 00 <span class="timer-ms">: 00</span>';
});

const displayTimer = () => {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let h;
    if (hours < 10) {
        h = "0" + hours;
    } else {
        h = hours;
    }

    let m;
    if (minutes < 10) {
        m = "0" + minutes;
    } else {
        m = minutes;
    }

    let s;
    if (seconds < 10) {
        s = "0" + seconds;
    } else {
        s = seconds;
    }

    let ms;
    const lastNumber = Math.floor(milliseconds / 10);
    if (lastNumber < 10) {
        ms = lastNumber.toString().padStart(2, '0');
    } else {
        ms = lastNumber;
    }       

    timeRef.innerHTML = `${h} : ${m} : ${s}  <span class="timer-ms"> : ${ms}</span>`;
}