var sec = document.getElementById("second")
var min = document.getElementById("minutes")
var hours = document.getElementById("hours")
var digitalClock = document.getElementById('digitalClock')
var indicator = document.getElementById('indicator')

var rotateSecond = 360 / 60
var rotateMinute = 360 / 3600
var rotateHour = 30 / 60

let runClock = () => {
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    var seconds = date.getSeconds()
    var mrd
    
    if (hour > 12) {
        hour = hour - 12
        mrd = 'PM'
    } else {
        mrd = "AM"
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (hour < 10) {
        hour = '0' + hour
    }

    var setSecondHand = (seconds * 6) - 90
    var setHourHand = ((hour * 30) - 90) + rotateHour * minutes
    var setMinuteHand = (minutes * 6) - 90
    
    hours.style.transform = "rotate(" + setHourHand + "deg)"
    min.style.transform = "rotate(" + setMinuteHand + "deg)"
    sec.style.transform = "rotate(" + setSecondHand + "deg)"

    digitalClock.innerText = hour + ':' + minutes + ':' + seconds + mrd
}

setInterval(runClock, 1000)
