console.log('%c Hello, World!', 'color: orange')


const imgContainer = document.querySelector('.container')

imgContainer.querySelector('p').remove()

dankMemes.forEach(function(url){
    const newImg = document.createElement('img') // create the new img tag
    newImg.src = url
//    debugger
    imgContainer.appendChild(newImg)
})