const pokemonsContainer = document.getElementById('pokemons-container')
const NUMBER_OF_POKEMONS = 10



const fetchPokemons = async () => {
    for(let i = 1; i <= NUMBER_OF_POKEMONS; i++){
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(id, data)
}

function createPokemonCard(id, pokemon){
    const captionName = (str) => (str[0].toUpperCase() + str.slice(1, str.length))

    const name = captionName(pokemon.name)
    const pokemon_types = pokemon.types.map(type => type.type.name)

    const main_type = pokemon_types[0]

    // const main_type_color = Object.keys(COLORS).find(type => type === main_type) || '#111111'

    const pokemonCardEl = document.createElement('div')
    pokemonCardEl.classList.add('pokemon-card')
    pokemonCardEl.classList.add(main_type)
    pokemonCardEl.innerHTML = `
        <div class="pokemon-card-inner">
            <div class="card-front">
                <div class="img-container">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png">
                </div>
                <span class="number">${id.toString().padStart(3, '0')}</span>
                <h3 class="name">${name}</h3>
                <small class="type">${pokemon_types.map(type => `<span>${captionName(type)}</span>`).join('')}</small>
            </div>
            <div class="card-back">
                ${id.toString().padStart(3, '0')}
                ${name}
                <p>Height: ${(pokemon.height * 0.1).toFixed(1)}m</p>
                <p>Weight: ${(pokemon.weight * 0.1).toFixed(1)}kg</p>
            </div>
        </div>
    `

    pokemonCardEl.addEventListener('click', () => {
        if(pokemonCardEl.classList.contains('flip')){
            pokemonCardEl.classList.remove('flip')
        }else{
            removeClassForAllCards()
            pokemonCardEl.classList.add('flip')
        }

    })
    pokemonsContainer.appendChild(pokemonCardEl)


}

function removeClassForAllCards(){
    const flipedPokemonCards = document.querySelectorAll('.pokemon-card.flip')
    flipedPokemonCards.forEach(card => {
        card.classList.remove('flip')
    })
}

fetchPokemons()