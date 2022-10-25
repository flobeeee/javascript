//  예제 1
let greeting = 'Hello'
function greetSomeone () {
  let name = 'Harry'
  return greeting + ' ' + name
}
console.log(greetSomeone()) // Hello Harry
//console.log(name) // name is not defined

// 예제 2
// ? 새로 선언했기 때문에 다른 변수임
let name1 = 'Jully'
function showName () {
  let name1 = 'Jack'
  console.log(name1) // Jack
}
console.log(name1) // Jully
showName()
console.log(name1) // Jully

// 예제 3
let x = 30
function get () { return x }
function set (value) { x = value }
set(10)
let result = get(20)
console.log(result) // 10

// 예제 4
let z = 10
function outer1 () {
  let z = 20
  function inner1 () {
    z = z + 10
    return z
  }
  inner1()
}
outer1()
let result1 = z
console.log(result1) // 10

// 예제 4
function inner2 () {
  let y
  y = y + 20
  console.log(y) // NaN
}
inner2()

// 예제 5
let a = 10
function outer2 () {
  a = 20
  function inner3 () {
    a = a + 20
  }
  inner3()
}
outer2()
let result2 = a
console.log(result2) // 40