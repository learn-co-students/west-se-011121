
function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  //add all elements to div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}

// what happens when books isn't defined?
// showBooks(books);
const bookURL = 'http://localhost:3000/books'

document.addEventListener("DOMContentLoaded", fetchAndShowBooks)

function fetchAndShowBooks(){
  fetch(bookURL)
    .then(function(response){
      return response.json()
    })
    .then(function(parsed){
      showBooks(parsed)
    })
}

const form = document.querySelector('form')
form.addEventListener('submit', getFormData)

function getFormData(event){
  event.preventDefault()
  // const title = document.querySelector('input[name="title"]').value
  const title = event.target.title.value
  const author = document.querySelector('input[name="author"]').value
  const cover = document.querySelector('input[name="cover"]').value
  console.dir(title);
  // console.log(title)
  const newBook = {
    title: title,
    author: author,
    img: cover
  }
  createBook(newBook, event)
}

function createBook(book, event){
  const options = {
    method: 'POST', 
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(book)
  }
  fetch(bookURL, options)
   .then(() => {
     addBook(book)
     event.target.reset()
    })
}