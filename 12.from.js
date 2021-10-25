// Array.from()
// 유사배열객체나 반복가능한 객체를 얕게 복사해 새로운 Array 객체를 만듭니다 - mdn

// 1. split 대신 사용가능
console.log('foo'.split('')) // ['f', 'o', 'o']
console.log(Array.from('foo')) // ['f', 'o', 'o']

// 2. 화살표 함수와 map처럼 사용 가능
console.log([1, 2, 3].map(el => el ** 2)) // [1, 4, 9]
console.log(Array.from([1, 2, 3], x => x ** 2)) // [1, 4, 9]

//3. 유사배열객체(키가 양의 정수고, length 값이 0 또는 양의 정수)
let obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
console.log(Array.from(obj)) // ['a', 'b', 'c']