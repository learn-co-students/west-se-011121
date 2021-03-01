// declare constants i.e. url
const baseURL = "http://localhost:3000/books"
const currentUser = 1

document.addEventListener("DOMContentLoaded", function() {
    // Declare variables
        // set references to DOM nodes where we can append our own elements
    const list = document.querySelector("#list")
    const show = document.querySelector("#show-panel")

    // Register Event Listeners
        // add event listers to above as needed (click on title, click on LIKE)
        show.addEventListener('click', handleLike)

    // Standalone Functions
       // fetch all books
    function getAllBooks(){
        fetch(baseURL)
        .then(res => res.json())
        .then(books => listBooks(books))
    }

    // fetch one book
    function getOneBook(id){
        return fetch(baseURL + `/${id}`)
            .then(res => res.json())
    }
    
    // fetch a user
    function getUser(id){
        return fetch(`http://localhost:3000/users/${id}`)
            .then(res => res.json())
    }
    
    // patch fetch to update likes
    function updateLikes(id, body, event){
       fetch(baseURL + `/${id}`, {
           method: 'PATCH', 
           headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           },
           body: JSON.stringify(body)
       })
       .then(res => res.json())
       .then((book) => {
           console.log('book: ', book);
           showBook(event)
        })

    }
    
    // create <li></li> for each book and add to DOM
    function listBooks(books){
        books.forEach(book => bookLi(book))
    }
    
    function bookLi(book){
        const li = document.createElement('li')
        li.dataset.bookId = book.id
        li.textContent = book.title
        li.addEventListener('click', showBook)
        list.appendChild(li)
    }

    // could use this function when creating list of likers in card
    // function listLikers(likers){
    //     return likers.map(user => `<li>${user.username}</li>`).join('')
    // }
    
    // handleTitleClick
    function showBook(event){
        const id = event.target.dataset.bookId
        getOneBook(id)
            .then(book => {
                // TODO: add alt to image
                const card = `<div>
                <img src="${book.img_url}" />
                <h1>${book.title}</h1>
                <h1>${book.author}</h1>
                <p>${book.description}</p>
                <ul>
                ${book.users.map(user => `<li>${user.username}</li>`).join('')}
                </ul>
                </div>`
                const button = document.createElement('button')
                if (book.users.some(user => user.id === currentUser)){
                    button.innerText = "UNLIKE"
                } else {
                    button.innerText = "LIKE"
                }
                button.dataset.bookId = book.id
                // could add event listener here or bubble up to show list
                show.innerHTML = card
                show.appendChild(button)
            })
    
       }


       // handleLike
       function handleLike(event){
           if(event.target.tagName=="BUTTON"){
            console.log(event.target);
            const id = event.target.dataset.bookId
            if(event.target.innerText == 'LIKE'){
                getUser(currentUser).then(user => {
                    getOneBook(id).then(book => {
                        const body = {
                            users: [...book.users, user]
                        }
                        updateLikes(id, body, event)
                    })
                })

            } else {
                getOneBook(id).then(book => {
                    const users = book.users.filter(user => user.id != currentUser)
                    const body = { users: [...users]}
                    updateLikes(id, body, event)
                })
            }
        }
       }


    // Function call(s)
        // initial call to fetch all books
       getAllBooks()
});
