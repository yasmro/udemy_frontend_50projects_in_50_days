const toggle = document.getElementById('toggle')

toggle.addEventListener('click', () => {
    toggle.parentElement.classList.toggle('active')
})