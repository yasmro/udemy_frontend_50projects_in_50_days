// https://docs.github.com/ja/rest/reference/users#get-a-user
// https://api.github.com/users/USERNAME
// axios

const ENDPOINT_URI = `https://api.github.com`


const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// getUser('yasmro')

async function getUser(userName){
    try{
        const { data } = await axios.get(`${ENDPOINT_URI}/users/${userName}`)
        createUserCard(data)
        getRepos(userName)
    } catch(err) {
        if(err.response.status == 404){
            createErrorCard('No profile with user name.')
        }
        console.log(err)
    }
}

async function getRepos(userName){
    try{
        const { data } = await axios.get(`${ENDPOINT_URI}/users/${userName}/repos?sort=created`)
        addReposToCard(data)
    }catch(err){
        createErrorCard('Problem in fetching repos.')
        console.log(err)        
    }
}

function createUserCard(user){
    const cardEl = `
        <div class="card">
            <div><img src="${user.avatar_url}" alt="" class="avatar"></div>

            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Followings</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
        </div>
    `

    main.innerHTML = cardEl
}

function createErrorCard(msg){
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos')
    const MAX_LENGTH_TO_FETCH_REPOS = 10
    
    repos.slice(0, MAX_LENGTH_TO_FETCH_REPOS).forEach(repo => {
        // <a href="#" class="repo">Repo 1</a> をつくる
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.innerText = repo.name
        
        reposEl.appendChild(repoEl)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = search.value
    if(user){
        getUser(user)
        search.value = ''
    }
})