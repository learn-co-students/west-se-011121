function sleep(n) {
  let i = 0
  while(i < (12 ** 8) * n) {
    i++
  }
}

// console.log('Starting the sleep function')
// sleep(10)
// console.log('Wow that sleep function took forever to run. 1 Star 🌟')

// document.getElementById('click-button').addEventListener('click', () => {
//   console.log("Button clicked")
// })
const url = 'https://dog.ceo/api/breeds/image/random'
// const promise = fetch(url, { method: 'GET' })
// console.log(promise)

console.log("A");

fetch(url)
  .then(function(res) {
    console.log("B");
    return res.json();
  })
  .then(function(data) {
    console.log(data);
  })
console.log("D");
