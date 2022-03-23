// 

const item = {
  influence: {
    user : null
  }
}
console.log(item.influence.user && item.influence.user.telAgency && Influence.mobileCarrier[item.influence.user.telAgency]? Influence.mobileCarrier[item.influence.user.telAgency] : '')

// null
// id 가 아예 없거나 id 가 null 인경우 false로 빠짐
let guide = { id: 5 }
console.log(guide['id'] ? 'O' : 'X') // O
guide = {}
console.log(guide['id'] ? 'O' : 'X') // X
guide = { id: null }
console.log(guide['id'] ? 'O' : 'X') // X

// boolean

function isBoolean(value) {
  return value === null? null : value === 'true' || value === true? true : false
}
console.log(isBoolean(null)) // null
console.log(isBoolean(true)) // true
console.log(isBoolean('true')) // true
console.log(isBoolean(false)) // false
console.log(isBoolean('false')) // false

return

// 삼항연산자 처리로 에러 막기

let fruits = {
  buyer: 'hello'
}

console.log(fruits.buyer) // hello
console.log(fruits.buyer.status) // 에러 undefined
// console.log(fruits.buyer.status.likeCount) // 에러 Cannot read property 'likeCount' of undefined 

console.log(fruits.buyer ? fruits.buyer : 'X') // hello
console.log(fruits.buyer && fruits.buyer.status ? fruits.buyer.status : 'X') // X
console.log(fruits.buyer && fruits.buyer.status && fruits.buyer.status.likeCount ? fruits.buyer.status.likeCount  : 'X') // X

fruits = {
  buyer: null
}

console.log(fruits.buyer) // null
// console.log(fruits.buyer.status) // 에러 Cannot read property 'status' of null 
// console.log(fruits.buyer.status.likeCount) // 에러 Cannot read property 'likeCount' of undefined 

console.log(fruits.buyer ? fruits.buyer : 'X') // X
console.log(fruits.buyer && fruits.buyer.status ? fruits.buyer.status : 'X') // X
console.log(fruits.buyer && fruits.buyer.status && fruits.buyer.status.likeCount ? fruits.buyer.status.likeCount  : 'X') // X

fruits = {
  buyer: {
    status: 'hello'
  }
}

console.log(fruits.buyer) // { status: 'hello' }
console.log(fruits.buyer.status) // hello
console.log(fruits.buyer.status.likeCount) // 에러 undefined

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
console.log(fruits.buyer && fruits.buyer.status && fruits.buyer.status.likeCount ? fruits.buyer.status.likeCount : 'X') // hello

// Falsy 한 값
// false
// null
// undefined
// 0
// NaN
// ''
let data = '안녕'

console.log(false && data ? data : 'X') // X
console.log(null && data ? data : 'X') // X
console.log(undefined && data ? data : 'X') // X
console.log(0 && data ? data : 'X') // X
console.log(NaN && data ? data : 'X') // X
console.log('' && data ? data : 'X') // X

const ctx = {}
console.log(ctx.auth && ctx.auth.user && ctx.auth.user.name? ctx.auth.user.name : null) //null