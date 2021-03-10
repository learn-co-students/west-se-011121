const main = document.body.querySelector('#main')
const characterElement = document.createElement('img')

let speed = 20
let movement
const characterAssets = 'assets/character'
characterElement.src = `${characterAssets}/static.gif`
characterElement.style.position = 'relative'
characterElement.style.left = '0px'
characterElement.style.top = '0px'
characterElement.style.width = '25px'

main.appendChild(characterElement)

function walkEast() {
  stop()
  movement = setInterval(function() {
    let currentPosition = parseInt(characterElement.style.left)
    characterElement.style.left = currentPosition + 1 + 'px'
  }, speed)
  characterElement.src = `${characterAssets}/walkright.gif`
}

function walkWest() {
  stop()
  movement = setInterval(function() {
    let currentPosition = parseInt(characterElement.style.left)
    characterElement.style.left = currentPosition - 1 + 'px'
  }, speed)
  characterElement.src = `${characterAssets}/walkleft.gif`
}

function walkNorth() {
  stop()
  movement = setInterval(function() {
    let currentPosition = parseInt(characterElement.style.top)
    characterElement.style.top = currentPosition - 1 + 'px'
  }, speed)
  characterElement.src = `${characterAssets}/walkup.gif`
}

function walkSouth() {
  stop()
  movement = setInterval(function() {
    let currentPosition = parseInt(characterElement.style.top)
    characterElement.style.top = currentPosition + 1 + 'px'
  }, speed)
  characterElement.src = `${characterAssets}/walkdown.gif`
}

function stop() {
  clearInterval(movement)
  character2.src = `${characterAssets}/static.gif`
}

// character2

const character2 = document.createElement('img')

let speed2 = 13
let move2
// const characterAssets = 'assets/character'
character2.src = `${characterAssets}/static.gif`
character2.style.position = 'relative'
character2.style.left = '0px'
character2.style.top = '0px'
character2.style.width = '25px'

main.appendChild(character2)

function walkEast2() {
  stop()
  move2 = setInterval(function() {
    let currentPosition = parseInt(character2.style.left)
    character2.style.left = currentPosition + 1 + 'px'
  }, speed2)
  character2.src = `${characterAssets}/walkright.gif`
}

function walkWest2() {
  stop()
  move2 = setInterval(function() {
    let currentPosition = parseInt(character2.style.left)
    character2.style.left = currentPosition - 1 + 'px'
  }, speed2)
  character2.src = `${characterAssets}/walkleft.gif`
}

function walkNorth2() {
  stop()
  move2 = setInterval(function() {
    let currentPosition = parseInt(character2.style.top)
    character2.style.top = currentPosition - 1 + 'px'
  }, speed2)
  character2.src = `${characterAssets}/walkup.gif`
}

function walkSouth2() {
  stop()
  move2 = setInterval(function() {
    let currentPosition = parseInt(character2.style.top)
    character2.style.top = currentPosition + 1 + 'px'
  }, speed2)
  character2.src = `${characterAssets}/walkdown.gif`
}

function stop2() {
  clearInterval(move2)
  character2.src = `${characterAssets}/static.gif`
}
