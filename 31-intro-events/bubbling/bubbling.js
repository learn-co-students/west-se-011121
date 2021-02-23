document.addEventListener("DOMContentLoaded", () => {

    // add listeners for parent and child nodes
    // log `event.target` and `event.currentTarget` to show bubbling
    
    const div = document.querySelector('#container')
    const ul = document.querySelector('#list')
    const li = document.querySelector('#item')

    function logThisAndTarget(event){
        console.log("THIS", event.currentTarget)
        console.log("TARGET", event.target)
    }

    div.addEventListener('click', logThisAndTarget)
    ul.addEventListener('click', logThisAndTarget)
    li.addEventListener('click', logThisAndTarget)
})





