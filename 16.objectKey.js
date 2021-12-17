const obj = {
  on: '2021-07-03',
  at: '2021-11-16 14:55:07',
  count: 61574,
  success_count: 61565,
  fail_count: 9,
  block_count: 0,
  recovery_count: 0,
  delete_count: 0,
}
console.time('test')
for (let key in obj) {
  console.log(key)
}
console.timeEnd('test')
// console.log(obj)

const influenceCostFile = [
    {
      "id": 7,
      "influenceCostId": 38,
      "createdAt": "2021-12-02T16:44:26.000+09:00",
      "updatedAt": "2021-12-02T16:44:26.000+09:00",
      "costFilePath": "/tmp/test",
      "costFileName": "단가단가"
    }
]
  
console.log(...influenceCostFile.map(el => {
  return el.costFilePath
}))