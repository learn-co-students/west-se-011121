require 'rest-client'
require 'json'
require 'pry'

# Psuedo-code for what we want to be able to do
# ----------------------------------------------
# response = make_request("www.reddit.com/.json")
# reddit_hash = parse_into_hash(response)

def get_title(book)
    book["volumeInfo"]["title"]
end

def get_authors(book)
    if book["volumeInfo"]["authors"]
        book["volumeInfo"]["authors"].join(" and ")
    else
        "No authors found"
    end
end

def get_description(book)
    if book["volumeInfo"]["description"]
        book["volumeInfo"]["description"][0...240]
    else
        "No description available"
    end
end

# * Write an application that takes a search term from a user
# * Make a Request to the GoogleBooks API and get back some results
def fetch_books(search_term)

    response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
    JSON.parse(response)
end

# * Display the titles, author names, and description for each book
def print_book(title, authors, description)
    puts "<>" * 30
    puts "Title: #{title}"
    puts "Author(s): #{authors}"
    puts "Description: #{description}"
end

def run
    puts "Welcome to BookSearcher"
    puts "Please enter a search term:"
    term = gets.chomp
    hash = fetch_books(term)
    hash["items"].each do |book|
        title = get_title(book)
        authors = get_authors(book)
        description = get_description(book)
        print_book(title, authors, description)
        # if we had a Book model class, we could also create Book objects and save them to a database
        # Book.create(title, authors, description)
    end
end

run


# binding.pry
# 0