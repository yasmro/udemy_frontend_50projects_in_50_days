const range = document.getElementById('range')

range.value

range.addEventListener('input', (e) => {
    const value = +e.target.value

    // 対象の要素（e = range）の隣にあるlabel要素を指定
    const label = e.target.nextElementSibling

    // 対象の要素eのwidthを取得 (pxで返す＝480pxなど)
    const range_width = getComputedStyle(e.target).getPropertyValue('width')

    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_width = +range_width.replace('px', '')
    const num_label_width = +label_width.replace('px', '')

    // 対象の要素のmin/maxの値を取得
    const min = +e.target.min
    const max = +e.target.max

    const left = (value / max) * (num_width) - num_label_width / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`

    label.innerHTML = value
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}