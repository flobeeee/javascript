import moment from 'moment-timezone'

let now = moment() // 현재
console.log(now.format('YYYY-MM-DD')) // 2023-05-03

console.log(now.millisecond()) // 밀리세컨드
console.log(now.second()) // 초
console.log(now.minute()) // 분
console.log(now.hour()) // 시
console.log(now.date()) // 일
console.log(now.day(0)) // 같은 주차 일요일
console.log(now.day(6)) // 같은 주차 토요일


const date = moment(1704499140000).format('YYYY년 MM월 DD일 HH:mm:ss');
console.log(date); // 2023년 07월 20일 13:40:00 
const date1 = moment(1704496500000).format('YYYY년 MM월 DD일 HH:mm:ss');
console.log(date1); // 2023년 07월 20일 13:56:40
const date2 = moment(1702665720000).format('YYYY년 MM월 DD일 HH:mm:ss');
console.log(date2); // 2023년 07월 20일 13:56:40
console.log(moment('20231225 163000', 'YYYYMMDD HHmm').unix() + '000')


