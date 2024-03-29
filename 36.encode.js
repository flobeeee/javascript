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

const filter = { "startDate":"yyyy-MM-dd", "endDate":"yyyy-MM-dd" }
const filterArray = []

for (const key in filter) {
      // console.log(filter[key], filter[key].value)
      if (filter[key].value) {
        // console.log({ field: key, value: filter[key].value, op: filter[key].op })
        filterArray.push({ field: key, value: filter[key].value, op: filter[key].op })
      }
}
    
const url = encodeURI(JSON.stringify('filter'))
console.log(url)
// console.log(decodeURIComponent('%7B%22startDate%22:%7B%22value%22:%222022-11-01%22%7D,%22endDate%22:%7B%22value%22:%222022-11-30%22%7D%7D'))
const f = '%5B%7B%22field%22:%22startDate%22,%22value%22:%222022-07-01%22%7D,%7B%22field%22:%22endDate%22,%22value%22:%222022-07-31%22%7D%5D'
const data = decodeURIComponent(f)
console.log(JSON.parse(decodeURIComponent(f)))
const filterData = JSON.parse(data)

let filters = {}
for (const obj of filterData) {
  filters[obj.field] = obj.value
}

console.log(filters)