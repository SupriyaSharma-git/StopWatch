let hr = 0;
let min = 0;
let sec = 0;
let milisec = 0;
let timerdisplay = document.querySelector(".timer-display");
const actionbtn = document.querySelector(".action");
const startTimer = document.querySelector("#startTimer");
const pauseTimer = document.querySelector("#pauseTimer");
const resetTimer = document.querySelector("#resetTimer")
const restart = document.querySelector("#restart");
const lapTimer = document.querySelector("#lapTimer");
const resetlapTimer = document.querySelector("#resetlapTimer");
const laps = document.querySelector(".laps");
let interval;


console.log(actionbtn);

startTimer.addEventListener("click", function () {
    if (!interval) {
        interval = setInterval(() => {
            milisec += 10;
            if (milisec >= 1000) {
                milisec = 0;
                sec++;
            }
            if (sec >= 60) {
                min = "0" + min++;
            }
            if (min >= 60) {
                hr++;
            }

            let formatsec = sec < 10 ? `0${sec}` : sec;
            let formatmin = min < 10 ? `0${min}` : min;
            let formathr = hr < 10 ? `0${hr}` : hr;

            timerdisplay.innerText = `${formathr} :  ${formatmin} :  ${formatsec} :  ${milisec}`;
        }, 10);
    }
});


pauseTimer.addEventListener("click", () => {
    clearInterval(interval); // Stops the interval
    interval = null;
})

resetTimer.addEventListener("click", () => {
    clearInterval(interval); // Stops the interval
    interval = null;
    hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;
    timerdisplay.innerText = "00 : 00 : 00 : 00";
})

restart.addEventListener("click", () => {
    clearInterval(interval); // Stop the timer
    interval = null; // Reset interval reference

    // Reset all time values
    hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;

    // Update the display
    timerdisplay.innerText = "00 : 00 : 00 : 000";

    // Automatically start the timer again
    startTimer.click(); 
})


lapTimer.addEventListener("click", () => {
    const lapitem = document.createElement("div");
    lapitem.innerText = `${timerdisplay.innerText}`;
    laps.appendChild(lapitem);
})


resetlapTimer.addEventListener("click", () => {
    laps.innerHTML = "";
})

