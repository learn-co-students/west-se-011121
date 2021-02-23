document.addEventListener("DOMContentLoaded", function(){


    console.log("Javascript loaded")
    const textElements = document.querySelectorAll("text")

    for(let ele of textElements){
        // console.dir(ele)
        ele.addEventListener('click', function(event){
            alert(event.target.innerText)
        })
    }

    const buttons = document.querySelectorAll('button')

    for(let btn of buttons){
        btn.addEventListener('click', function(e){
            console.dir(e.target)
            e.target.parentNode.remove() 

        })
    }
    // create and add a form to our animal noises page
    // the form will allow the user to add a new noise to the list of noises
    // the new noise will have the functionality of the other noises

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
        text.addEventListener('click', function(event){
            alert(event.target.innerText)
        })
        button.addEventListener('click', function(e){
            e.target.parentNode.remove() 
        })
        li.appendChild(text)
        li.appendChild(button)
        ul.appendChild(li)

        input.value = ""
    })

})
