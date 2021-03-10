// object literals
// const character = {}
// const character = new Object

// factory function
function createCharacter(speed) {
    const character = {}
    character.element = document.createElement('img')
    character.speed = speed
    character.assets = 'assets/character'
    character.element.src = `${character.assets}/static.gif`
    character.element.style.position = 'relative'
    character.element.style.left = '0px'
    character.element.style.top = '0px'
    character.element.style.width = '25px'
    document.body.querySelector('#main').appendChild(character.element)

    character.walkEast = function () {
        character.stop()
        character.movement = setInterval(function() {
          let currentPosition = parseInt(character.element.style.left)
          character.element.style.left = currentPosition + 1 + 'px'
        }, character.speed)
        character.element.src = `${character.assets}/walkright.gif`
      }

    character.stop = function() {
      clearInterval(character.movement)
      character.element.src = `${character.assets}/static.gif`
    }
    return character
}

// Object.create

// constructor function MUST BE CALLED WITH NEW KEYWORD

function Character(speed) {
  this.element = document.createElement('img')
  this.speed = speed
  this.assets = 'assets/character'
  this.element.src = `${this.assets}/static.gif`
  this.element.style.position = 'relative'
  this.element.style.left = '0px'
  this.element.style.top = '0px'
  this.element.style.width = '25px'
  document.body.querySelector('#main').appendChild(this.element)

}

Character.prototype.walkEast = function () {
  this.stop()
  console.log("outside the callback: ", this)
  this.movement = setInterval(function() {
    console.log("inside the callback: ", this)
    let currentPosition = parseInt(this.element.style.left)
    this.element.style.left = currentPosition + 1 + 'px'
  }.bind(this), this.speed)
  this.element.src = `${this.assets}/walkright.gif`
}

Character.prototype.walkSouth = function () {
  this.stop()
  this.movement = setInterval(() => {
    let currentPosition = parseInt(this.element.style.left)
    this.element.style.top = currentPosition + 1 + 'px'
  }, this.speed)
  this.element.src = `${this.assets}/walkright.gif`
}

Character.prototype.stop = function() {
  clearInterval(this.movement)
  this.element.src = `${this.assets}/static.gif`
}

// const main = document.body.querySelector('#main')
// const characterElement = document.createElement('img')

// let speed = 20
// let movement
// const characterAssets = 'assets/character'
// characterElement.src = `${characterAssets}/static.gif`
// characterElement.style.position = 'relative'
// characterElement.style.left = '0px'
// characterElement.style.top = '0px'
// characterElement.style.width = '25px'

// main.appendChild(characterElement)

// function walkEast() {
//   stop()
//   movement = setInterval(function() {
//     let currentPosition = parseInt(characterElement.style.left)
//     characterElement.style.left = currentPosition + 1 + 'px'
//   }, speed)
//   characterElement.src = `${characterAssets}/walkright.gif`
// }

// function walkWest() {
//   stop()
//   movement = setInterval(function() {
//     let currentPosition = parseInt(characterElement.style.left)
//     characterElement.style.left = currentPosition - 1 + 'px'
//   }, speed)
//   characterElement.src = `${characterAssets}/walkleft.gif`
// }

// function walkNorth() {
//   stop()
//   movement = setInterval(function() {
//     let currentPosition = parseInt(characterElement.style.top)
//     characterElement.style.top = currentPosition - 1 + 'px'
//   }, speed)
//   characterElement.src = `${characterAssets}/walkup.gif`
// }

// function walkSouth() {
//   stop()
//   movement = setInterval(function() {
//     let currentPosition = parseInt(characterElement.style.top)
//     characterElement.style.top = currentPosition + 1 + 'px'
//   }, speed)
//   characterElement.src = `${characterAssets}/walkdown.gif`
// }

// function stop() {
//   clearInterval(movement)
//   character2.src = `${characterAssets}/static.gif`
// }