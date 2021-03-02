document.addEventListener('DOMContentLoaded', () => {

    const tbody = document.querySelector('#table-body')
    const form = document.querySelector('#dog-form')

    form.addEventListener('submit', (event) => editDog(event))

    function getDogs(){
        fetch('http://localhost:3000/dogs', {method: "GET"})
            .then(resp => resp.json())
            .then(array => array.forEach(dog => renderDog(dog)))
    }

    function renderDog(dog){
        const tr = document.createElement('tr')
        tr.id = dog.id
        const name = document.createElement('td')
        const breed = document.createElement('td')
        const sex = document.createElement('td')
        const editCell = document.createElement('td')
        const button = document.createElement('button')
        button.innerText = "Edit Dog"
        button.addEventListener('click', () => populateForm(dog))
        editCell.appendChild(button)
        name.innerText = dog.name
        breed.innerText = dog.breed
        sex.innerText = dog.sex
        tr.append(name, breed, sex, editCell)
        tbody.prepend(tr)
    }

    // take data from a dog object and fill in the form
    function populateForm(dog){
        form.name.value = dog.name
        form.breed.value = dog.breed
        form.sex.value = dog.sex
        form.dataset.id = dog.id
    }
    
    // send PATCH fetch with new data
    function editDog(event){
        event.preventDefault()
        
        const id = event.target.dataset.id

        const newDog = {
            name:  form.name.value,
            breed: form.breed.value,
            sex: form.sex.value
        }
        event.target.reset()
        fetch(`http://localhost:3000/dogs/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(newDog)
        })
        .then(res => res.json())
        .then(dog => {
            const oldRow = document.getElementById(dog.id)
            oldRow.remove()
            renderDog(dog)
        })
    }

    getDogs()

     // The lab itself suggests making a new fetch for all the dogs after a successful patch has come through. Personally, I think that's super cost expensive when we already have the one updated dog's information. But, because the lab recommended it, below you will find what that could look like:

        // fetch(`${DOGSURL}/${form.dataset.id}`, configObject)
        //     .then(res => res.json())
        //     .then(json => {
        //         // clear out the table
        //         table.innerText = ''
        //         // re-fetch all dogs
        //         fetchingAllDogs()
        //     })
        //     .catch(errors => {
        //         console.log(errors)
        //         alert("That didn't work.")
        //     })
})