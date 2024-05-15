let seconds = 0
let isRunning = false
let timerInterval

document.getElementById("start").addEventListener("click", startStop)
document.getElementById("reset").addEventListener("click", reset)

function startStop() {
    if (isRunning) {
        clearInterval(timerInterval)
        isRunning = false
    }
    else {
        timerInterval = setInterval(updateTimer, 1000);
        isRunning = true
    }
}

function updateTimer() {
    seconds++
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    let actualTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(remainingSeconds)}`
    document.getElementById("timer").innerText = actualTime
}

function padNumber(number) {
    if (number < 10)
        return "0" + number
    return number
}

function reset(){
    seconds = 0
    isRunning = false
    clearInterval(timerInterval)

    document.getElementById("timer").innerText = "00:00:00"
}