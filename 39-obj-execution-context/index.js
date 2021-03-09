this.name = 'window object'
// Creating Objects
const space = {} // object literal
const spaceship = new Object // using new keyword

// Assigning and accessing properties

space.cool = true
space.planets = ["Earth", "Uranus"]
space.planets.push("Mercury")
space.planets = ["Saturn", ...space.planets, "Jupiter"] // ["Saturn", "Earth", "Uranus", "Mercury", "Jupiter"]
space.darkness = {
    level: 100,
    scary: true
}
console.log(space['darkness']['level'])
space.darkness.scary = false


// Copying an object
const space2 = space
space2.star = "Altaris"

// deep clone
const space4 = JSON.parse(JSON.stringify(space))
space4.star = "Rigel"
space4.planets.unshift("Venus")
space4.planets.push("Pluto")

// ES6 deep clone

const space5 = {
    ...space
}
space5.planets = [...space5.planets, "Mars"]

// shallow clone
const space3 = Object.assign({}, space)
space3.star = "Sol"
space3.planets.pop()

//  Computed values as keys
const beef = "steak"
const bbq = {
    [beef]: "medium",
    beef: "not what I wanted"
}
console.log(bbq.steak)


/************ Function Called with New Keyword ***********/
//inside a constructor fn, this will be the newly created object
function Person(name, favColor){
    this.name = name
    this.favColor = favColor
}

const pan = new Person('pan', 'orange')

/********************************************************/

/************ Bind Call Apply ****************************/
const personOne = {name: 'chloe'}
const personTwo = {name: 'adan'}
const personThree = {name: 'erik'}

function greeting(location, time){
    return `${this.name} says hello from ${location} at ${time}.`
}
console.log(greeting('Houston', 'night'));
console.log(greeting.call(personOne, 'Shanghai', 'midnight'))
console.log(greeting("Seattle", "party time"));
console.log(greeting.apply(personTwo, ['Taipei', 'dawn']))
const p3greet = greeting.bind(personThree)
const panGreet = greeting.bind(pan)

console.log(p3greet('New York', 'noon'));

console.log(panGreet('New York', 'noon'));


/********************************************************/

/************ Function called on an Object ***************/
function contextOfThis(){
    return this
}
const dog = {
    name: 'snoopy',
    whatIsThis: contextOfThis
}
console.log(contextOfThis())
console.log(dog.whatIsThis());


/********************************************************/





/********************************************************/

this.character = "Daisy";

const game = {
  character: "Mario",
  details: {
    character: "Yoshi",
    characterName: function() {
      return this.character;
    },
    arrowCharacterName: () => this.character
  }
};

console.log(window.character); // Daisy
console.log(game.details.characterName) // fn()
console.log(game.details.characterName()) // method invocation pattern // Yoshi
const charName = game.details.characterName // function invocation pattern 
console.log(charName())  // Daisy
console.log(game.details.arrowCharacterName()) // Daisy ?!? arrowCharacterName()
console.log(game.details.characterName.call(game)) // Mario
console.log(game.details.arrowCharacterName.call(game))  // Daisy