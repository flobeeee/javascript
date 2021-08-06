// 삼항연산자 처리로 에러 막기

let fruits = {
  buyer: 'hello'
}

console.log(fruits.buyer) // hello
console.log(fruits.buyer.status) // ! 에러 undefined
// console.log(fruits.buyer.status.likeCount) // ! 에러 Cannot read property 'likeCount' of undefined 

console.log(fruits.buyer ? fruits.buyer : 'X') // hello
console.log(fruits.buyer && fruits.buyer.status ? fruits.buyer.status : 'X') // X
console.log(fruits.buyer && fruits.buyer.status && fruits.buyer.status.likeCount ? fruits.buyer.status.likeCount  : 'X') // X

fruits = {
  buyer: {
    status: 'hello'
  }
}

console.log(fruits.buyer) // { status: 'hello' }
console.log(fruits.buyer.status) // hello
console.log(fruits.buyer.status.likeCount) // ! 에러 undefined

console.log(fruits.buyer ? fruits.buyer : 'X') // { status: 'hello' }
console.log(fruits.buyer && fruits.buyer.status ? fruits.buyer.status : 'X') // hello
console.log(fruits.buyer && fruits.buyer.status && fruits.buyer.status.likeCount ? fruits.buyer.status.likeCount  : 'X') // X

fruits = {
  buyer: {
    status: {
      likeCount : 'hello'
    }
  }
}

console.log(fruits.buyer) // { status: { likeCount: 'hello' } }
console.log(fruits.buyer.status) // { likeCount: 'hello' }
console.log(fruits.buyer.status.likeCount) // hello

console.log(fruits.buyer ? fruits.buyer : 'X') // { status: { likeCount: 'hello' } }
console.log(fruits.buyer && fruits.buyer.status ? fruits.buyer.status : 'X') // { likeCount: 'hello' }
console.log(fruits.buyer && fruits.buyer.status && fruits.buyer.status.likeCount ? fruits.buyer.status.likeCount  : 'X') // hello