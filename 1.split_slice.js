let ins1 = 'https://www.instagram.com/abcde/'
let ins2 = 'https://www.instagram.com/test1/, https://www.instagram.com/test2/'

console.log(ins1.split(', ').map(el => el.slice(26, -1))) // ['abcde]
console.log(ins2.split(', ').map(el => el.slice(26, -1))) // [ 'test1', 'test2' ]

// split 특정 문자로 구분해서 배열생성
// slice 텍스트 자르기