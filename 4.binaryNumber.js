// 이진수 구하기
const fruit = {
    1: '사과',
    2: '바나나',
    4: '복숭아',
    8: '포도',
  }
const likeFruit = 12 // 복숭아, 포도를 좋아함 [4, 8]

// 1 단계 : 들어오는 숫자를 2진법으로 표현
const one = likeFruit.toString(2)
console.log(one) // 1100

// 2 단계 : 각각 하나씩 쪼갬
const two = likeFruit.toString(2).split('')
console.log(two) // [ '1', '1', '0', '0' ]

// 3 단계 : 뒤집음
const three = likeFruit.toString(2).split('').reverse()
console.log(three) // ['0', '0', '1', '1']

// 4 단계 : 원래 숫자를 뽑아냄
const four = likeFruit.toString(2).split('').reverse().map((n, index) => {
  return Number(n) * Math.pow(2, index)
})
console.log(four) // [0, 0, 4, 8]

// 5 단계 : 0 제거
const result = likeFruit.toString(2).split('').reverse().map((n, index) => {
  return Number(n) * Math.pow(2, index)
}).filter(item => item > 0)
console.log(result) // [4, 8]