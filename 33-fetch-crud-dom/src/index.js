const BASEURL = "http://localhost:3000/pokemon"



document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#pokemon-post-form')
  form.addEventListener('submit', addPokemon)
  const container = document.querySelector('#pokemon-container')
  container.addEventListener('click', removePokemon)
  fetchAllPokemon()
  container.addEventListener('submit', updatePokemon)
  fetchAllPokemon()
})

// const pokeArr = []

function fetchAllPokemon(){
  fetch(BASEURL)
  // .then(function(response){
    //   return response.json()
    // })
    .then((response) => response.json())
    .then((jsonData) => {
      const container = document.querySelector('#pokemon-container')
      // pokeArr = jsonData
      container.innerHTML = renderAllPokemon(jsonData)
      
    })
}