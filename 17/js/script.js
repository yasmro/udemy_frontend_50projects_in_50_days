// MOVIE API
// https://api.themoviedb.org/3/movie/550?api_key=157bbe18fa70750313b7e4c84c77efec

const ENDPOINT = `https://api.themoviedb.org/3`
const REQURST = `/discover/movie`
const PARAM = `?sort_by=popularity.desc&page=1`
const API_KEY = `157bbe18fa70750313b7e4c84c77efec`
const API_URL = `${ENDPOINT}${REQURST}${PARAM}&api_key=${API_KEY}`


const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const SEARCH_URL = `${ENDPOINT}/search/movie?api_key=${API_KEY}&query="`

const moviesContainer = document.querySelector('.movies')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)


async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    showMovies(data.results)
}

function showMovies(movies){
    moviesContainer.innerHTML = ''
    
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
                            <img src="${IMG_PATH + poster_path}" alt="">
                            <div class="movie-info">
                                <h3>${title}</h3>
                                <span class=${getClassByRate(vote_average)}>${vote_average}</span>
                            </div>
                            <div class="overview">
                                <h3>Overview</h3>
                                <p>${overview}</p>
                            </div>
                        `
                        
        moviesContainer.appendChild(movieEl)
    })
}

function getClassByRate(vote){
    return (vote >= 8) ? "green" : (vote >= 5) ? 'orange' : 'red'
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const searchQuery = search.value
    if(searchQuery && searchQuery !== ''){
        console.log(SEARCH_URL + searchQuery + '"')
        getMovies(SEARCH_URL + searchQuery + '"')
        search.value = ''
    }else{
        window.location.reload()
    }

})