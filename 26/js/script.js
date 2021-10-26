const sliderContainer = document.querySelector('.slider-container')
const rightSlider = document.querySelector('.right-slide')
const leftSlider = document.querySelector('.left-slide')

const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')

// rightSlider要素にあるdiv要素の数
const slideLength = rightSlider.querySelectorAll('div').length

let activeIndex = 0

const UP_SLIDE = 'up'
const DOWN_SLIDE = 'down'

// 4枚あるスライドを縦に並べてその一番上を取ってくる
leftSlider.style.top = `-${(slideLength - 1) * 100}vh`


upButton.addEventListener('click', () => changeSlide(UP_SLIDE))
downButton.addEventListener('click', () => changeSlide(DOWN_SLIDE))

const changeSlide = (direction) => {
    // clientHeight = heightとpaddingの合計から、スクロールバーの幅を引いた高さ。borderは含まない。インライン要素は0．
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === UP_SLIDE){
        activeIndex = (activeIndex + 1 + slideLength) % slideLength
    }else if(direction === DOWN_SLIDE){
        activeIndex = (activeIndex - 1 + slideLength) % slideLength
    }
    leftSlider.style.transform = `translateY(${activeIndex * sliderHeight}px)`
    rightSlider.style.transform = `translateY(-${activeIndex * sliderHeight}px)`
}