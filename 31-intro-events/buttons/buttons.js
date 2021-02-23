// attach (a) listener(s) to each text element
// clicking the text will trigger alert with the text
// clicking DELETE button will delete from DOM

 
document.addEventListener('DOMContentLoaded', function(){
    
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

})
