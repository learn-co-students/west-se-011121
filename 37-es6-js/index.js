console.log("es6");
// destructuring
const spaceship = {
    captain: 'Jean-Luc Picard',
    firstOfficer: 'William Riker',
    chiefEngineer: 'Giordi LaForge',
    redShirts: {
        one: 'tom',
        two: 'alice',
        three: 'dan'
    }

}

const {firstOfficer, captain, redShirts, dogs} = spaceship
console.log('dogs: ', dogs);
console.log('firstOfficer: ', firstOfficer);
console.log('captain: ', captain);
const {one, two, three} = redShirts
console.log('three: ', three);
console.log(spaceship.chiefEngineer)

class Spaceship{
    constructor(props){
        this.captain = props.captain
        this.firstOfficer = props.firstOfficer
        this.chiefEngineer = props.chiefEngineer
    }
}
class Spaceship2 {
    constructor({firstOfficer, chiefEngineer}){
        // this.captain = captain
        this.firstOfficer = firstOfficer
        this.chiefEngineer = chiefEngineer
    }
}

console.log(new Spaceship2(spaceship))

const pals = ["mike", "sue"]
const [f1, f2] = pals
console.log('f1: ', f1);



// key value assignment shortcut

const pizza = 'pepperoni'
const eatingPlace = 'Pizza Hut'

const pizzaObj = {
    pizza: pizza,
    restaurant: eatingPlace
}
console.log('pizzaObj: ', pizzaObj);

const pizza2 = {
    pizza,
    restaurant: eatingPlace
}
console.log('pizza2: ', pizza2);
console.log('pizza2.pizza: ', pizza2.pizza);

// Spread Operator

const arr1 = [1, 2, 3, 4]
const arr2 = arr1
arr2.push(5)
arr1.push(6)
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
const arr3 = ['cats', ...arr1, 10]
// { users: [...book.users, user]}
arr3.push(11)
console.log('arr3: ', arr3);

let cat1 = {
    name: 'Simon',
    role: 'goblin'
}
const role = 'goblin-monster'

let cat2 = {
    ...cat1,
    food: 'tuna',
    name: 'Mimi',
    role
}
console.log('cat1: ', cat1);
console.log('cat2: ', cat2);

// all the forms of arrow functions

const implicitReturn = () => 'hi'
console.log('implicitReturn: ', implicitReturn());
const explicitReturn = () => {
    return 'hello'
}
const fakeImplicitReturn = () => (  // used in render function of React component
    // console.log('we come in peace')
    `greetings
    Earthling`
)
    
console.log('explicitReturn: ', explicitReturn());
console.log('fakeImplicitReturn: ', fakeImplicitReturn());

const oneParam = name => `hi my name is ${name}`
// const oneParam = (name) => `hi my name is ${name}`

console.log('oneParam: ', oneParam('Betty'));
// .then(res => res.json())


// passing functions as arguments (callbacks) and ES6 interators(map, reduce, forEach, filter, find, etc)
const cats = ["Rose", "Simon", "Miyuki", "Hazel"]
const print = name => console.log(name);
cats.forEach(cat => print(cat))
const isNotRose = cat => cat != 'Rose'
console.log(cats.filter(cat => isNotRose(cat)))

// function binding vs. arrow functions

class Animal {
    constructor(name, faveSnacks){
        this.name = name
        this.faveSnacks = faveSnacks
    }

    speak(){
        console.log(`hi my name is ${this.name}`);
    }
    listFavSnacks = () => {
        // console.log(this);
        this.faveSnacks.forEach((snack) => {
            // console.log(this)
            console.log(`${this.name} loves ${snack}`);
        })
        // console.log(this);
        // this.faveSnacks.forEach(function(snack){
        //     console.log(this)
        //     console.log(`${this.name} loves ${snack}`);
        // }.bind(this))
    }
}

const a1 = new Animal('bill', ['cookies', 'cake', 'pizza'])
a1.speak()
a1.listFavSnacks()


// class instance properties and class syntax in general

function Cat(name, favSnack){
    this.name = name
    this.favSnack = favSnack
}

const c1 = new Cat('hazel', 'house plants')
const c2 = new Cat('nox', 'everything bad')
console.log('c1: ', c1);

Cat.prototype.speak = function(){
    console.log(`${this.name} says meow`);
}
c1.speak()
c2.speak()

// dynamic object keys

function dynamicSetKeys(obj, key, val){
    obj[key] = val
    return obj
}

const map = {}
cats.forEach(cat => {
    map[cat] = true
})
dynamicSetKeys(map, 'snack', 'rat')
console.log('map: ', map);

