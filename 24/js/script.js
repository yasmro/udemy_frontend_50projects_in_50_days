const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 3000)

function getData(){
    // ここはAPIで本来はとっていくが，今回は固定値で
    header.innerHTML = `<img src="https://picsum.photos/1200/900.webp" alt="">`
    title.innerHTML = `Lorem Ipsom Dolor Sit Amet`
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iure!`
    profile_img.innerHTML = `<img src="https://picsum.photos/1200/900.webp" alt="">`
    name.innerHTML = `John Dog`
    date.innerHTML = `Oct 08, 2020`

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}

