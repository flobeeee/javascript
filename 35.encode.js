/*
1. 인코딩이란
컴퓨터가 이해할 수 있는 언어로 바꾸는 것이다.

2. 디코딩이란
인코딩한 것을 복호화 하는 의미다.
효율적인 저장이나 암호화를 위해 사용한다.

*/

const str = 'filters=%7B%22age%22:%7B%22min%22:20,%22max%22:32%7D%7D'

console.log(decodeURIComponent(str)) // filters={"age":{"min":20,"max":32}}

console.log(str) // filters=%7B%22age%22:%7B%22min%22:20,%22max%22:32%7D%7D

console.log(encodeURIComponent(decodeURIComponent(str))) // filters%3D%7B%22age%22%3A%7B%22min%22%3A20%2C%22max%22%3A32%7D%7D