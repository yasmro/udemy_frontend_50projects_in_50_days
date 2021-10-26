const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

const types = [
    'info', 'danger', 'warning', 'success'
]

button.addEventListener('click', () => {
    const randomMessage = getRandomMessage()
    const type = getRandomType()
    createNotification(randomMessage, type)
})

function createNotification(message = 'Message', type = 'info'){
    const notificationEl = document.createElement('div')
    notificationEl.classList.add('toast')
    notificationEl.classList.add(type)
    notificationEl.innerText = message
    console.log(notificationEl)

    toasts.appendChild(notificationEl)

    setTimeout(() => {
        notificationEl.classList.add('del-toast')
    }, 2500)

    setTimeout(() => {
        notificationEl.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * messages.length)]
}