const result =[
   {
    analysedAt: '2022-12-01',
    successCount: 231,
    failCount: 4,
    errorCount: 4
  },
   {
    analysedAt: '2022-12-05',
    successCount: 927,
    failCount: 19,
    errorCount: 16
  },
   {
    analysedAt: '2022-12-06',
    successCount: 238,
    failCount: 1,
    errorCount: 1
  }
]
  const dateArr =
[
  '2022-12-01',
  '2022-12-02',
  '2022-12-03',
  '2022-12-04',
  '2022-12-05',
  '2022-12-06',
  '2022-12-07',
  '2022-12-08'
    ]

    const analysedAts = result.map(el => {
  return el.analysedAt
})
console.log(analysedAts)

let xxx = []

dateArr.map(el => {
  if (!analysedAts.includes(el)) {
    console.log(el)
    xxx.push(el)
  }
})

console.log(xxx) // 없는 날짜 뽑아내기