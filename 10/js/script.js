const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()
jokeBtn.addEventListener('click', generateJoke)

// async await -- 今はこっちかも
async function generateJoke(){
    var url = 'https://icanhazdadjoke.com/'
    var config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch(url,config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke

}

    
// fetch
//  function generateJoke(){
//     var url = 'https://icanhazdadjoke.com/'
//     var config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch(url, config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         })
// }