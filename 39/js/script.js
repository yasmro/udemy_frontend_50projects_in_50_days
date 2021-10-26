const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const blurPx = 20 - length * 2 >= 0 ? 20 - length * 2 : 0
    background.style.filter = `blur(${blurPx}px)`;
})