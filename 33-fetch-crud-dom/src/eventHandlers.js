
// function handleImgClick(event, allPokemonData) {
//   if (event.target.dataset.action === 'flip') {
//     const clickedPokemon = allPokemonData.find((pokemonObject) => pokemonObject.id == event.target.dataset.id)
//     event.target.src = (event.target.src === clickedPokemon.sprites.front ? clickedPokemon.sprites.back : clickedPokemon.sprites.front)
//   }
// }

function addPokemon(event){
  event.preventDefault()
  const newName = document.querySelector("#name-input").value
  const sprite  = document.querySelector("#sprite-input").value
  const newPoke = {
    name: newName,
    sprites: {
      front: sprite,
      back: sprite
    }
  }
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(newPoke)
  }
  fetch(BASEURL, options)
  .then(res => res.json())
  .then((newObj) => {  // pessimistic rendering
    document.querySelector("#pokemon-container").innerHTML += renderSinglePokemon(newObj)
  })
}

function removePokemon(event){
  // console.log("removing")
  // console.dir(event.target)
  console.dir(event.target.tagName)
  if(event.target.dataset.action == 'delete'){
    const id = event.target.dataset.id
    fetch(BASEURL + `/${id}`, {
      method: 'DELETE'
    })
    // .then(fetchAllPokemon) // pessimistic
    event.target.parentNode.parentNode.remove() // optimistic rendering

  }
}

function updatePokemon(event){
  event.preventDefault()
  const newName = event.target.newName.value
  const updatedPoke = {
    name: newName
  }
  const id = event.target.dataset.id
  fetch(BASEURL + `/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(updatedPoke)
  })
    .then(() => fetchAllPokemon()) // pessimistic rendering
}

/************************* Helper Fns for Producing HTML **********************/
function renderAllPokemon(pokemonArray) {
  return pokemonArray.map(renderSinglePokemon).join('')
}

function renderSinglePokemon(pokemon) {
  return (`
  <div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
      <button data-id="${pokemon.id}" data-action="delete" class="pokemon-delete-button">Delete</button><br>
      <form data-id="${pokemon.id}" class="pokemon-update"><input name="newName" type="text"><input type="submit"></form>
    </div>
  </div>`)
}
