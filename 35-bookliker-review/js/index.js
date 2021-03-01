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

       // fetch a user

       // patch fetch to update likes

       // create <li></li> for each book and add to DOM
       function listBooks(books){
           console.log('books: ', books);

       }

       // handleTitleClick

       // handleLike


    // Function call(s)
        // initial call to fetch all books
       getAllBooks()
});
