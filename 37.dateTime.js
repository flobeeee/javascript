import { DateTime } from 'luxon'

const periodList =[

]

function makePeriodList () {
  const date = DateTime.local()

  for (let i = 0; i < 6; i++) {
    const month = date.plus({ month: - i }).toFormat('yyyy-MM')
    const lastDayOfMonth = date.plus({ month: - i }).endOf('month').toFormat('yyyy-MM-dd')
    periodList.push({
      id: i,
      text: `${month} 월`,
      value: `filters={"startDate":"${month}-01","endDate":"${lastDayOfMonth}"}`
    })
  }
}

makePeriodList()

console.log(periodList)
