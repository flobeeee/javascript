// 1. 가장 먼저 value 가 큰 순으로 정렬한다.
// 2. 같은 value 내에서 hour_ranges 이 작은 순으로 정렬한다.
// 3. 같은 hour_ranges 내에서 level 작은 순으로 정렬한다.

const data = [{ week_day: 'MON', level: 0, hour_ranges: '6-9', value: 1 },
{week_day: 'MON', level: 0, hour_ranges: '18-21', value: 1},
{week_day: 'MON', level: 0, hour_ranges: '21-24', value: 1},
{week_day: 'TUE', level: 1, hour_ranges: '0-3', value: 1},
{week_day: 'TUE', level: 1, hour_ranges: '12-15', value: 1},
{week_day: 'TUE', level: 1, hour_ranges: '21-24', value: 1},
{week_day: 'WED', level: 2, hour_ranges: '18-21', value: 1},
{week_day: 'THU', level: 3, hour_ranges: '12-15', value: 1},
{week_day: 'THU', level: 3, hour_ranges: '15-18', value: 1},
{week_day: 'THU', level: 3, hour_ranges: '18-21', value: 1},
{week_day: 'THU', level: 3, hour_ranges: '21-24', value: 1},
{week_day: 'FRI', level: 4, hour_ranges: '15-18', value: 1},
{week_day: 'SUN', level: 7, hour_ranges: '0-3', value: 0},
{week_day: 'SUN', level: 7, hour_ranges: '3-6', value: 0},
{week_day: 'SUN', level: 7, hour_ranges: '6-9', value: 0},
{week_day: 'SUN', level: 7, hour_ranges: '9-12', value: 0},
{week_day: 'SUN', level: 7, hour_ranges: '12-15', value: 0},
{week_day: 'SUN', level: 7, hour_ranges: '15-18', value: 0},
{week_day: 'SUN', level: 7, hour_ranges: '18-21', value: 0},
{week_day: 'SUN', level: 7, hour_ranges: '21-24', value: 0},
{week_day: 'MON', level: 0, hour_ranges: '0-3', value: 0},
{week_day: 'MON', level: 0, hour_ranges: '3-6', value: 0},
{week_day: 'MON', level: 0, hour_ranges: '9-12', value: 0},
{week_day: 'MON', level: 0, hour_ranges: '12-15', value: 0},
{week_day: 'MON', level: 0, hour_ranges: '15-18', value: 0},
{week_day: 'TUE', level: 1, hour_ranges: '3-6', value: 0},
{week_day: 'TUE', level: 1, hour_ranges: '6-9', value: 0},
{week_day: 'TUE', level: 1, hour_ranges: '9-12', value: 0},
{week_day: 'TUE', level: 1, hour_ranges: '15-18', value: 0},
{week_day: 'TUE', level: 1, hour_ranges: '18-21', value: 0},
{week_day: 'WED', level: 2, hour_ranges: '0-3', value: 0},
  { week_day: 'WED', level: 2, hour_ranges: '3-6', value: 0 }]

const data1 = [
  { week_day: 'FRI', level: 4, hour_ranges: '15-18', value: 1 },
  {week_day: 'MON', level: 0, hour_ranges: '6-9', value: 1},
  { week_day: 'SUN', level: 7, hour_ranges: '0-3', value: 0 },
{week_day: 'THU', level: 3, hour_ranges: '15-18', value: 1},
]

console.log(data.sort((a, b) => {
  if (a.value === b.value) {
    if (Number(a.hour_ranges.split('-')[1]) === Number(b.hour_ranges.split('-')[1])) {
      return a.level - b.level
    }

    return Number(a.hour_ranges.split('-')[1]) - Number(b.hour_ranges.split('-')[1])
  }
  return b.value - a.value
}))