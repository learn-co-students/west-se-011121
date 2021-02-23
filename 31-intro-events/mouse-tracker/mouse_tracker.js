document.addEventListener("DOMContentLoaded", function(){

    // select a DOM element
    // add listener for mouse movement
    // update DOM with mouse position

    const pTag = document.getElementById('output')

    document.addEventListener('mousemove', function(event){
        pTag.innerText = `X: ${event.clientX}, Y: ${event.clientY}`
    })
    
})