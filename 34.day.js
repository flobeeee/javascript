import dayjs from 'dayjs'
// 플러그인
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

console.log(dayjs().get('year'))
console.log(dayjs().get('month') + 1) // start 0
console.log(dayjs().get('date'))
console.log(dayjs().get('hour'))
console.log(dayjs().get('minute'))
console.log(dayjs().get('second'))

// 11.03 -> 10.05
const a = dayjs()
const b = dayjs().add( - 29, 'day')

console.log(a.format()) // 2022-11-03T18:23:59+09:00
console.log(b.format()) // 2022-10-05T18:24:34+09:00

console.log(b.unix())

// unix to date