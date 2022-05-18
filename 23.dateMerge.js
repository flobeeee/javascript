const before = ['게임', '역사', '인문', '경제', '정보', '패밀리', '일상', '리빙', '트래블']
const after = ['게임', '교육', '교육', '교육', '교육', '일상', '일상', '일상', '국내외여행']
let isWhileLoop = true
let checkRow = 0
let count = 0
let olds = []

while (isWhileLoop) {
  if (!before[checkRow]) {
    isWhileLoop = false
  } else {
    if ((after[checkRow] !== after[checkRow + 1])) {
      if ((before[checkRow] !== after[checkRow]) && count === 0) { // 데이터 하나라서 이름만 바꾸기
        console.log(`${before[checkRow]} -> ${after[checkRow]} 바꿈`)
        olds = []
      } else if (count > 0) {
        olds.push(before[checkRow])
        if (olds.includes(after[checkRow])) { // 기준태그가 포함인 경우
          const mainTag = after[checkRow]
          console.log(mainTag + ' 은 그대로 유지')
          const subTags = olds.filter(el => {
            return el !== mainTag
          })
          console.log(subTags + ' 은 ' + mainTag + '이랑 겹치는 거 제거')
          console.log(subTags + ' 걸려있는거 ' + mainTag + '으로 변경하기' )
          console.log(subTags + ' 태그 삭제')
        } else if (!olds.includes(after[checkRow])) { // 아예 다른 태그로 이름 바뀌는 경우
          const mainTag = olds[olds.length - 1]
          console.log(mainTag + '를 ' +after[checkRow] + ' 로 이름 바꾸기')
          olds.pop()
          console.log(olds + ' 는 ' + mainTag + ' 태그랑 겹치는거 제거')
          console.log(olds + ' 태그 삭제')
        }
        olds = []
        count = 0
      } else {
        console.log(after[checkRow] + ' 안바꿈')
      }
    } else if (after[checkRow] === after[checkRow + 1]) {
      olds.push(before[checkRow])
      count ++
      // console.log(olds)
    }
    // console.log(before[checkRow])

    checkRow ++
  }
}