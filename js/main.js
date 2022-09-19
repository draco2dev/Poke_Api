// conectando con el html
const pokemonImage = document.getElementById('pokemonImage'),
    pokemonName = document.getElementById('pokemonName')

const getPokemon = (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    
    // permite hacer peticiones con el fetch
    const requestApi = fetch(url)

    // conviertiendo en json la promesa
    // requestApi.then((response)=>{
    //     // console.log(response)
    //     // convertir en JSON
    //     response.json();
    // })

    // resumido 
    requestApi
    .then(response => response.json())
    .then((data) =>{
        console.log(data)
        pokemonName.innerHTML = data.name
        pokemonImage.src = data.sprites.other.home['front_default']
    })

    
}

getPokemon(25)

