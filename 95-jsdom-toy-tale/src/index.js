let addToy = false;
const baseUrl = `http://localhost:3000/toys`

document.addEventListener("DOMContentLoaded", () => {
  // Defining variables
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollection = document.getElementById('toy-collection')
  const newToyForm = document.querySelector('.add-toy-form')

  // Stand Alone Functions
  const getToys = () => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // iterate over data, pass individuals to renderToys
      data.forEach((toy) => renderToys(toy))
    })
  }

  const patchToy = (likes, toyId) => {
    fetch(baseUrl + `/${toyId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'likes': likes
      })
    })
    .then(res => res.json())
    .then(console.log)
  }

  const renderToys = (toy) => {
    // Defining Varaibles
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let button = document.createElement('button')

    // Defining classes / ids
    div.className = 'card'
    img.className = 'toy-avatar'
    button.className = 'like-btn'
    button.data = toy.id

    // Attribute toy data to varaibles
    h2.innerText = toy.name
    img.src = toy.image
    p.innerText = toy.likes
    button.innerText = 'Like <3'
    
    // Append above to div element
    div.append(h2, img, p, button)

    // Append div to index page
    toyCollection.appendChild(div)

    // EventListener
    button.addEventListener('click', e => {
      // Defining Varaible
      let toyId = e.target.data
      p.innerText++
      let likes = p.innerText
      patchToy(likes, toyId)
    })
  }


  // Stand Alone EventListeners
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  newToyForm.addEventListener('submit', e => {
    e.preventDefault()
    let name = e.target.name.value
    let image = e.target.image.value
    
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        'name': name,
        'image': image,
        'likes': 0
      })
    })
    .then(res => res.json())
    .then(toy => renderToys(toy))
  })

  // Calling functions now
  getToys()
});
