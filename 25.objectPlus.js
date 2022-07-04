let obj1 = {
  '2022-06-20': { a: 2, b: 2, c: 0 },
  '2022-06-21': { a: 1, b: 1, c: 0 },
  '2022-06-22': { a: 3, c: 2 },
}

let obj2 = {
  '2022-06-22': { a: 3, b: 1, c: 2 },
  '2022-06-23': { a: 2, b: 1, c: 1 },
}

let obj3 = {
  '2022-06-21': { a: 1, b: 0, c: 1 },
  '2022-06-22': { a: 3, b: 1, c: 2 },
}

function plus(array) {
  let result = {}

  array.map((el) => {
    Object.keys(el).map(key => {
      Object.keys(el[key]).map(keykey => {
        if (!result[key]) {
          result[key] = {}
        }

        if (!result[key][keykey]) {
          result[key][keykey] = el[key][keykey]
        } else {
          result[key][keykey] = result[key][keykey] + el[key][keykey]
        }
      })
    })
  })
  
  return result
}

// 같은 날짜끼리 같은 속성 더하기
console.log(plus([obj1, obj2, obj3]))

// 하드코딩 (처음 만든 코드)
function plus1(array) {
  let result = {}

  array.map((el) => {
    Object.keys(el).map(key => {
      const valueA = el[key]['a'] ? el[key]['a'] : 0
      const valueB = el[key]['b'] ? el[key]['b'] : 0
      const valueC = el[key]['c'] ? el[key]['c'] : 0

      if (!result[key]) {
        result[key] = {}
        result[key]['a'] = valueA
        result[key]['b'] = valueB
        result[key]['c'] = valueC
      } else {
        result[key]['a'] = result[key]['a'] + valueA
        result[key]['b'] = result[key]['b'] + valueB
        result[key]['c'] = result[key]['c'] + valueC
      }
    })
  })


  
  return result
}