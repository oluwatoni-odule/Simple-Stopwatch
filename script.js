//VARIABLES
const timer = document.getElementById('timer');
const start = document.getElementById('start-stop-btn');
const reset = document.getElementById('reset-btn');
const container = document.querySelector('.container');

//  FONTSIZE FUNCTIONS

// TIME VALUES VARIABLES

let seconds = 0;
let minutes = 0;
let hours = 0;
let displayTimer = '';

// For leading zeros

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//Variables for set interval and time status
let timeInterval =  null;
let timerStatus = 'stopped';

//STOPWATCH FUNCTIONS

function stopWatch() {

    seconds++

    if (seconds / 60 === 1) {

        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = '0' + seconds.toString()
    } else {
        leadingSeconds = seconds
    }

    if (minutes < 10) {
        leadingMinutes = '0' + minutes.toString()
    } else {
        leadingMinutes = minutes
    }

    if (seconds < 10) {
        leadingHours = '0' + hours.toString()
    } else {
        leadingHours = hours
    }

    
    displayTimer = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
    timer.textContent = displayTimer


}



start.addEventListener('click', event => {

    if(timerStatus === 'stopped') {
        timeInterval =  window.setInterval(stopWatch, 1000);
        document.getElementById('start-stop-btn').innerText = 'PAUSE';
        start.style.backgroundColor = 'orange';
        timerStatus = 'started'
    } else {
        window.clearInterval(timeInterval);
        document.getElementById('start-stop-btn').innerText = 'PLAY';
        start.style.backgroundColor = 'green';
        timerStatus = 'stopped'
    }

})

reset.addEventListener('click', event => {
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    timer.innerText = '00:00:00';
    document.getElementById('start-stop-btn').innerText = 'PLAY';
    start.style.backgroundColor = 'green';
    timerStatus = 'stopped'
})