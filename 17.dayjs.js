import dayjs from 'dayjs'

let queryResult = [[
    {
    use_on: "2021-07-03",
      count: 1
    },
    {
      use_on: "2021-07-02",
      count: 1
    }
]]
  
const startDate = '2021-07-01'
const endDate = '2021-07-05'
const dateCount = dayjs(endDate).diff(startDate, 'day', true) + 1

console.log(dayjs(endDate).diff(startDate, 'day', true))

let dateObj = {}

// 날짜 객체 만들기
for (let i = 0; i < dateCount; i++) {
  dateObj[dayjs(endDate).add(-i, 'day').format('YYYY-MM-DD')] = 0
}

console.log(dateObj)

// 존재하는 날짜 체크
queryResult[0].map(date => {
  dateObj[date.use_on] = 1
})

console.log(dateObj)

// 없는 날짜 데이터 만들기
for (let key in dateObj) {
  if (dateObj[key] === 0) {
    queryResult[0].push({use_on: key, count:0})
    console.log(key)
  }
}

console.log(queryResult[0])

// sort
// queryResult[0].sort(function(a,b){
//   return new Date(b.use_on) - new Date(a.use_on);
// });

queryResult[0].sort(function(a,b){
  return dayjs(b.use_on).valueOf() - dayjs(a.use_on).valueOf();
});

console.log(queryResult[0])