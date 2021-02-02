# Goals
- How and why we use the MVC pattern
    - separation of concerns
    - Model: represent and handle data; interface with the database
    - Controller: interprets requests from the client, engages with model to provide data to the view
    - Views take data and render as HTML to display in a browser; responsible for everything a user sees
- What is the typical Sinatra file structure
- How Sinatra serves data in response to web requests
- How CRUD actions map to RESTful routes
- How to make an HTML form

# Deliverables
- For each deliverable, what routes are necessary?

- view all books
GET /books

- view info on an individual book
GET /books/:id

- create a new book
GET /books/new =>  show form
POST /books  => post data from the form to the db

- edit an existing book
GET /books/:id/edit
PATCH /books/:id

- delete an existing book
DELETE 
