const sounds = ['applause', 'boo', 'gasp']

sounds.forEach(sound => {
    // <button class="btn">{sound}</button> ...[1]
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    // click時の挙動
    btn.addEventListener('click', () => {
        stopSounds();

        document.getElementById(sound).play()
    })

    // [1]を <div id="buttons"></div>の中に作る
    document.getElementById('buttons').appendChild(btn)
})

function stopSounds() {
    sounds.forEach(sound => {
        // soundファイルを止め，現在位置を0にする
        const audio = document.getElementById(sound)
        audio.pause()
        audio.currentTime = 0;
    })
}