let ins1 = 'https://www.instagram.com/abcde/'
let ins2 = 'https://www.instagram.com/test1/, https://www.instagram.com/test2/'

console.log(ins1.split(', ').map(el => el.slice(26, -1))) // ['abcde]
console.log(ins2.split(', ').map(el => el.slice(26, -1))) // [ 'test1', 'test2' ]