// const days = $('.days')

$('.display').css({
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'font-size': '40px',
})

// const endDate = new Date
// endDate.setDate(endDate.getDate() + 14)

// const now = new Date().getTime()
// console.log(now)
// console.log(endDate)

// const difference = (endDate - now)

// const numOfDays = 14

const seconds = 1000
const minutes = seconds * 60
const hours = minutes * 60
const days = hours * 24

function formatTime(time) {
    return (time < 10) ? `0${time}` : time;
  }

  let difference = 1209600000
function countdownToTime() {
    // console.log(difference)
    const timeDays = Math.floor(difference / days)
    const timeHours = Math.floor((difference % days) / hours)
    const timeMinutes = Math.floor((difference % hours) / minutes)
    const timeSeconds = Math.floor((difference % minutes) / seconds)
    difference-= 1000

    $('.days').text(formatTime(timeDays))
    $('.hours').text(formatTime(timeHours))
    $('.minutes').text(formatTime(timeMinutes))
    $('.seconds').text(formatTime(timeSeconds))
}

setInterval(countdownToTime, 1000)