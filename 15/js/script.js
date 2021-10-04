const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    const INTERVAL_DURATION = 10
    const INTERVAL_INCREMENT = 50
    const INITIATE_VALUE = 0
    counter.innerText = `${INITIATE_VALUE}`

    const updateCounter = () => {
        // 属性の値を取れる
        // parseIntをするのは，属性値はstringのため
        const target = +(counter.getAttribute('data-target'))
        const c = +(counter.innerText) 
        // +counter.innerText でもOK
        console.log(c)

        // 上がり幅を指定
        const increment = target / INTERVAL_INCREMENT

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, INTERVAL_DURATION)
        } else{
            counter.innerText = target
        }
    }

    updateCounter()
})