let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time');

function timer(secs) {
    // clear any existing timers
    clearInterval(countdown);

    // current time and time to count down to
    const now = Date.now();
    const then = now + secs * 1000;

    // display time left + end time immediately
    displayTimeLeft(secs);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secsLeft = Math.round((then - Date.now()) / 1000);

        // check if we should stop the clock!
        if (secsLeft <= 0){
            clearInterval(countdown);
            return;
        };

        displayTimeLeft(secsLeft); // display countdown
    }, 1000);
};

function displayTimeLeft(secs){
    // convert timer into hrs, mins, secs
    const hrs = Math.floor(secs / 3600);
    const remainderMins = Math.floor((secs % 3600) /60)
    const remainderSecs = Math.floor(secs - (hrs*3600) - (remainderMins*60));

    const display = `${hrs}: ${remainderMins < 10 ? '0' : ''}${remainderMins}: ${remainderSecs < 10 ? '0' : ''}${remainderSecs}`;

    document.title = display;
    timerDisplay.textContent = display;
};

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? (hour-12) : hour
    const mins = end.getMinutes();
    const adjustedMins = mins < 10 ? ('0' + mins) : mins

    endTime.textContent = `Be Back At ${adjustedHour}:${adjustedMins}`;
};

function startTimer(){
    const secs = parseInt(this.dataset.time);
    timer(secs);
};

buttons.forEach(btn => btn.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    const mins = this.minutes.value;
    timer(mins * 60);

    this.reset();
})

// FEATURE REQUEST 
// when 3 mins left, background = red

// when timer is up, set up an alert + sound