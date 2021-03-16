//Destructuring 

let a, b
[a, , b] = [10, 20, 30]
// console.log('a: ', a);
// console.log('b: ', b);

let instructorA = {name: 'Lantz', role: 'lead', age: 28}
let instructorB = {name: 'Jasper', role: 'coach', age: 20}

// let {name, role, age} = instructorB
// console.log('name: ', name);
// console.log('role: ', role);
// console.log('age: ', age);

//Spread ...
let c = 'a'
let d = c
d = 'z'
console.log('c: ', c);
console.log('d: ', d);

let arr1 = ['a', 'b', 'c']
// let arr2 = arr1
let arr2 = ['hi', ...arr1, 'd']
// arr2.push('d')
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);

let instructorC = {...instructorB, favColor: 'purple'} 
instructorC = {...instructorC, name: 'Emiley'}
// instructorC.favColor = 'purple'
console.log('instructorB: ', instructorB);
console.log('instructorC: ', instructorC);

//Exercise
let colors = ['red', 'blue', 'green']
// use a spread operator to create a new copy of `colors` AND add a new color
let colors2 = [...colors, 'purple']
console.log('colors: ', colors);
console.log('colors2: ', colors2);

let cat = {name: "Simon", age: 7}
// use a spread operator to create a new copy of 'cat' AND increment the age by 1
let cat2 = {...cat, age: cat.age + 1}
// THEN, add a color attribute to 'cat
cat2 = {...cat2, color: 'black'}
console.log('cat2: ', cat2);

// destructure all of the properties of 'cat'
let {name, age, color} = cat2
console.log('color: ', color);
console.log('age: ', age);
console.log('name: ', name);
