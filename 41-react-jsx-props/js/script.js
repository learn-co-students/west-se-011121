// Arrow functions

const foo = val => `${val} is a naughty cat`
console.log('foo: ', foo('Simon'));

const bar = (str1, str2) => `Happy ${str1} to ${str2}!`
console.log('bar: ', bar("St. Patrick's Day", "y'all"));

// callback
const doMath = (num1, num2) => {
    return num1 + num2
}

const addTwo = (fn, num) => {
    return fn(2, num)
}

console.log('addTwo: ', addTwo(doMath, 6));

//Class

class Book {
    constructor({title, author, fans}) {
        this.title = title
        this.author = author
        this.fans = fans
    }

    printTitle = () => {
        console.log(this.title)
    }

    printFans = () => {
        this.fans.forEach((fan) => {
            console.log(`${fan} likes ${this.title}`);
        })
    }
}

class ColorBook extends Book {
    constructor(args){
        super(args)
        this.color = 'blue'
    }

    isBlue = () => console.log(`${this.title} now has a ${this.color} cover`)
    
}

fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(bookJson => {
        return bookJson.map(book => new ColorBook(book))
    })
    .then(bookObjects => {
        console.log(bookObjects)
        bookObjects.forEach(book => book.printFans())
    })