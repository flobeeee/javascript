// 배열에서 중복된 값 distinct로 만들기

let data = [1, 2, 2, 3, 4, 4]

console.log(data) //  [1, 2, 2, 3, 4, 4]

console.log([...new Set(data)]) // [1, 2, 3, 4]