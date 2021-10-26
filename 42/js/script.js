// randomuser.me

const resultContainer = document.getElementById('result')
const filter = document.getElementById('filter')

const listItems = []

getUserData()

// 絞り込み
filter.addEventListener('input', (e) => filterUser(e.target.value))

async function getUserData(){
    const url = `https://randomuser.me/api?results=50`
    const res = await fetch(url)

    const data = await res.json()

    resultContainer.innerHTML = ''

    data.results.forEach(user => {
        const userEl = document.createElement('li')
        listItems.push(userEl)
        
        userEl.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        resultContainer.appendChild(userEl)
    })
}

// 絞り込み
function filterUser(searchTerm){
    listItems.forEach(item => {
        // 検索用語に人名やロケーションが含まれているか
        console.log(item.innerText)
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}