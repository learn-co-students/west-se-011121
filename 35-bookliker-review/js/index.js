// declare constants i.e. url
const baseURL = "http://localhost:3000/books"


document.addEventListener("DOMContentLoaded", function() {
    // Declare variables
        // set references to DOM nodes where we can append our own elements
    const list = document.querySelector("#list")
    const show = document.querySelector("#show-panel")

    // Register Event Listeners
        // add event listers to above as needed (click on title, click on LIKE)

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
    
    // patch fetch to update likes
    
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
    
    function showBook(event){
        console.log('event: ', event.target);
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
                button.innerText = "LIKE"
                show.innerHTML = card
                show.appendChild(button)
            })
    
       }

       // handleTitleClick

       // handleLike


    // Function call(s)
        // initial call to fetch all books
       getAllBooks()
});
