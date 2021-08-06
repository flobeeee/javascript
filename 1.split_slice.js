// 아이디만 뽑아내기

let ins1 = 'https://www.instagram.com/abcde/'
let ins2 = 'https://www.instagram.com/test1/, https://www.instagram.com/test2/'

let sliceStart = 26
let sliceEnd = -1

// console.log(ins1.split(', ').map(el => el.slice(sliceStart, sliceEnd))) // ['abcde']
// console.log(ins2.split(', ').map(el => el.slice(sliceStart, sliceEnd))) // [ 'test1', 'test2' ]

// split 특정 문자로 구분해서 배열생성
// slice 텍스트 자르기

// ? url이 'https://www.instagram.com/abcde' 로 들어올 경우

let ins3 = 'https://www.instagram.com/abcde'
let ins4 = 'https://www.instagram.com/test1, https://www.instagram.com/test2'

// console.log(ins3.split(', ').map(el => el.split('/')[3])) // ['abcde']
// console.log(ins4.split(', ').map(el => el.split('/')[3])) // [ 'test1', 'test2' ]

// ? url이 혼용되어 들어올 경우

let ins5 = 'https://www.instagram.com/abcde/'
let ins6 = 'https://www.instagram.com/test1/, https://www.instagram.com/test2/'
let ins7 = 'https://www.instagram.com/abcde'
let ins8 = 'https://www.instagram.com/test1, https://www.instagram.com/test2'

console.log(ins5.split(', ').map(el => el.split('/')[3])) // ['abcde']
console.log(ins6.split(', ').map(el => el.split('/')[3])) // [ 'test1', 'test2' ]
console.log(ins7.split(', ').map(el => el.split('/')[3])) // ['abcde']
console.log(ins8.split(', ').map(el => el.split('/')[3])) // [ 'test1', 'test2' ]