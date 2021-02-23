
// write a function with a switch to be used as a callback
function listener(event){
    console.dir(event.target)
    switch(event.target.tagName){
        case "TEXT":
            alert(event.target.innerText)
            break
        case "BUTTON":
            event.target.parentNode.remove()
            break
        default:
            console.log("something else was pressed")
    }
}

document.addEventListener("DOMContentLoaded", function(){

    // write code that refactors `buttons.js` to allow use of single event listener with delegation

    const container = document.querySelector("#noise-container")
    container.addEventListener('click', listener)

    const form = document.querySelector('form')

    form.addEventListener('submit', function(event){
        event.preventDefault()
        console.log(`here's the form event: ${event}`)
        const input = document.querySelector('#noise-input')
        console.log(input.value)
        
        const ul = document.querySelector('ul')
        const li = document.createElement('li')
        const text = document.createElement('text')
        const button = document.createElement('button')
        text.textContent = input.value + " "
        button.textContent = "Delete"
        // text.addEventListener('click', function(event){
        //     alert(event.target.innerText)
        // })
        // button.addEventListener('click', function(e){
        //     e.target.parentNode.remove() 
        // })
        li.appendChild(text)
        li.appendChild(button)
        ul.appendChild(li)

        input.value = ""
    })
})
