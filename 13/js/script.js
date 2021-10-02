const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        // textareaの値をリセット
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        // 10ms後，randomSelectを起動
        randomSelect()
    }
})

function createTags(input){
    // trim() 前後のスペースを取り除く．
    const tags = input.split(',').filter(word => word.trim() !== '')

    tagsEl.innerHTML = tags.map(word => {
            return `<span class="tag">${word.trim()}</span>`
        }).join('')

    // もしくは
    // tags.forEach(tag => {
    //     const tagEl = document.createElement('span')
    //     tagEl.classList.add('tag')
    //     tagEl.innerText = tag
    //     tagsEl.appendChild(tagEl)
    // })
}

function randomSelect(){
    const REPEAT_TIMES = 30;
    const DURATION = 100;
    
    // 100ms (DURATION)ごとにintervalを繰り返し起動(setInterval)
    
    const interval = setInterval(() => {
        // tagのhighlightとunhighlight(100ms DURATION 後)を行う．
        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, DURATION)
    }, DURATION)

    // ルーレットの時間(REPEAT_TIMES * DURATIONが終わったら，繰り返しを解除し，その後，最終的にハイライトするタグを選択)
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, DURATION)

    }, REPEAT_TIMES * DURATION)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unhighlightTag(tag){
    tag.classList.remove('highlight')
}