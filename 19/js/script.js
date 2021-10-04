const hourNeedle = document.querySelector('.hour')
const minuteNeedle = document.querySelector('.minute')
const secondNeedle = document.querySelector('.second')

const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    html.classList.toggle('dark')

    e.target.innerHTML = html.classList.contains('dark') ? 'Light Mode' : 'Dark Mode'
})

function setTime(){
    const time = new Date()
    const month = MONTHS[time.getMonth()].slice(0, 3)
    const day = DAYS[time.getDay()]
    const date = time.getDate();
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const milliSeconds = time.getMilliseconds()

    const roundDeg_HourNeedle = 30 * (hours % 12) + minutes * 0.5
    const roundDeg_MinuteNeedle = minutes * 6 + seconds * 0.1
    const roundDeg_SecondNeedle = seconds * 6 + milliSeconds * (6 / 1000)

    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${roundDeg_HourNeedle}deg)`
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${roundDeg_MinuteNeedle}deg)`
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${roundDeg_SecondNeedle}deg)`

    timeEl.innerText = `${hours}:${('0'+minutes).slice(-2)}`
    dateEl.innerHTML = `${day}, ${month} <span class="circle">${date}</span>`
}

// スケールの再定義
// 0 (in_min) --> 100 (in_max) の定義域に対して 0(out_min) --> 1(out_max)の値域とするなど．
// numは再定義後のスケール値を返す．
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

setTime()

setInterval(setTime, 10)