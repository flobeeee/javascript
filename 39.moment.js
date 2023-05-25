import moment from 'moment'

let now = moment() // 현재
console.log(now.format('YYYY-MM-DD')) // 2023-05-03

console.log(now.millisecond()) // 밀리세컨드
console.log(now.second()) // 초
console.log(now.minute()) // 분
console.log(now.hour()) // 시
console.log(now.date()) // 일
console.log(now.day(0)) // 같은 주차 일요일
console.log(now.day(6)) // 같은 주차 토요일


const arr = ['1234', '5678']

console.log(arr.join(' '))