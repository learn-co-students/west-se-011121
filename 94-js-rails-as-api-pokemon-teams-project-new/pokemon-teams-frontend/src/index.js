const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', () => {
  // Defining Varables
  let main = document.querySelector('main')

  // Fetch Functions
  const getTrainers = () => {
    fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(trainers => {
      trainers.forEach(trainer => {
        displayTrainer(trainer)
      });
    })
  }

  function displayTrainer(trainer) {
    // Defining Variable
    let div = document.createElement('div')
    let p = document.createElement('p')
    let addBtn = document.createElement('button')
    let ul = document.createElement('ul')

    div.appendChild(p)
    // Class / Id Additon
    div.className = 'card'
    div.data = trainer.id
    addBtn.data = trainer.id
    ul.id = trainer.id

    p.innerText = trainer.name 
    addBtn.innerText = 'Add Pokemon'

    trainer.pokemons.forEach(pokemon => {
      let lis = displayPokemon(pokemon)
      ul.append(lis)
    })

    // Append to Div
    div.append(addBtn, ul)
    main.append(div)

    // EventListener
    addBtn.addEventListener('click', (e) => {
      if(ul.childElementCount < 6) {
         createPokemon(addBtn.data)
      }
    })
  }

  function displayPokemon(pokemon) {
    // Defining Varibales
    let li = document.createElement('li')
    let releaseBtn = document.createElement('button')

    // Class / Id Addition
    releaseBtn.className = 'release'
    releaseBtn.data = pokemon.id

    li.innerText = `${pokemon.nickname} (${pokemon.species})`
    releaseBtn.innerText = 'Release'

    // Append
    li.append(releaseBtn)
    // ul.append(li)

    // EventListener
    releaseBtn.addEventListener('click', (e) => {
      deletePokemon(releaseBtn.data)
      releaseBtn.parentElement.remove()
    })

    return li
  }

  // Standalone Functions
  function createPokemon(trainer_id) {
    fetch(POKEMONS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'trainer_id': trainer_id
      })
    })
    .then(resp => resp.json())
    .then(pokemon => {
      let ul = document.getElementById(pokemon.trainer_id)
      let lis = displayPokemon(pokemon)

      ul.appendChild(lis)
    })
  }

  function deletePokemon(pokemon_id) {
    fetch(POKEMONS_URL + `/${pokemon_id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
  }
  
  // Call Functions
  getTrainers()
})

{/* <div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div> */}