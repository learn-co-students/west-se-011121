// Callback

// higher order function (HOF)
const bakeCake = cb => cb('cake')
const bakePudding = cb => cb('pudding')
// callback
const bake = str => {
    return `Hello Bakers today we will be baking ${str}`
}

bakeCake(bake)

let bakers = [
    'ange',
    'syd',
    'colin'
]

let upCaseBakers = bakers.map(baker => baker.toUpperCase())

let timeLeft = (elapsedTime) => {
    console.log('elapsedTime: ', elapsedTime);
    return (duration) => {
        console.log('duration: ', duration);
        let time = duration - elapsedTime
        return `Bakers ${time} minutes left`
    }
}

const greeting = () => 'Hello Bakers'

const greatBakingShow = {
    showStart: greeting,
    checkTime: timeLeft,
    endShow: (winner) => `Today's Star Baker is ${winner}`
}

// Pure Functional

// a fn that given the same input will always have the same output
// a fn that produces no side-effects
// side effets: modifying the value of an external variable
// http requests
// logging to console

const ingredients = {
    sugar: true,
    butter: true
}

const tempIngredients = {
    butter: false,
    bakingPowder: true
}
Object.freeze(ingredients)

// const epIngreds = Object.assign(ingredients, tempIngredients)
const epIngreds = {...tempIngredients, ...ingredients}
console.log('epIngreds: ', epIngreds);

