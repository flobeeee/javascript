import moment from 'moment'

// ! 나이로 생년월일 데이터 검색

const data = ['1990', '1991', '19921111', '1993', '1994', '1995', '19961212', '1997', '1998', '19990919', '2000', '2001', '2002', '2003']

function searchUser (value) {
  let result = []
  if (value.start || value.end) {
      const endAge = moment().subtract(value.start, 'years').add('1', 'years').format('YYYY1231')
      //console.log(endAge) // 20021231
      const startAge = moment().subtract(value.end, 'years').add('1', 'years').format('YYYY0101')
      //console.log(startAge) // 19920101

      data.forEach(el => el <= endAge && el >= startAge ? result.push(el): false)
  }
  return result
}

let age = {
  start: 20,
  end: 30
}
console.log(searchUser(age)) // 20~30세 연도 찾기 (1992 ~ 2002)