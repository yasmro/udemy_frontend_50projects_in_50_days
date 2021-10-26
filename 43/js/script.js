const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRating = 'Satisfied'
ratingsContainer.addEventListener('click', (e) => {
    // e.target --> クリックした要素を取得できる
    console.log(e.target)

    // クリックしたターゲットの親要素のclassに.ratingがあれば
    if(e.target.parentNode.classList.contains('rating')){
        removeActive()
        e.target.parentNode.classList.add('active')
        // クリックしたrating要素にあるもの
        // console.log(e.target.nextElementSibling)
        // selectedRating = e.target.nextElementSibling.innerHTML
        selectedRating = e.target.parentNode.getAttribute('data-src')
        console.log(selectedRating)
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <h2>Thank you!</h2>
        <p>Your feedback: ${selectedRating}</p>
        <p>We will use your feedback to improve our customer support!</p>
        
    `
})

function removeActive(){
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
}