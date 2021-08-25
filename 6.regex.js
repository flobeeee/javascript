let word = '안녕 dsl1233'


// 1. 한글, 영문, 숫자, 띄어쓰기 가능
console.log(/^[가-힣a-zA-Z0-9\s]+$/.test(word)) // true

// 2. 한글, 영문, 숫자 가능
console.log(/^[가-힣a-zA-Z0-9]+$/.test(word)) // false