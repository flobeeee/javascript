import { DateTime } from 'luxon'
const today = DateTime.local()
// console.log(today1)
console.log(today.toFormat('yyyy-MM-dd HH:mm:ss'))
console.log(today.ts)
const ts = Math.floor(today.ts / 1000)

let day1 = DateTime.now().plus({ days: -2, hours: - 9 })
day1 = Math.floor(day1.ts / 1000)
console.log(day1)
let day2 = DateTime.now().plus({ days: -29, hours: - 9 })
day2 = Math.floor(day2.ts / 1000)
console.log(day2)

function Unix_timestamp (t) {
    let date = new Date(t*1000);
    let year = date.getFullYear();
    let month = "0" + (date.getMonth()+1);
    let day = "0" + date.getDate();
    let hour = "0" + date.getHours();
    let minute = "0" + date.getMinutes();
    let second = "0" + date.getSeconds();
    return year + "-" + month.substr(-2) + "-" + day.substr(-2) + " " + hour.substr(-2) + ":" + minute.substr(-2) + ":" + second.substr(-2);
}

console.log(Unix_timestamp(ts)) // 현재시간 출력
console.log(Unix_timestamp(day1))
console.log(Unix_timestamp(day2))