const eventKey = document.getElementById('eventKey')
const eventKeycode = document.getElementById('eventKeycode')
const eventCode = document.getElementById('eventCode')

window.addEventListener('keydown', (e) => {
    eventKey.innerText = e.key === ' ' ? 'Space' : e.key
    eventKeycode.innerText = e.keyCode
    eventCode.innerText = e.code
})