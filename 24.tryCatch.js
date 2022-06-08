const str = true
let data = '시작'


try {
  str.indexOf('null') // 에러코드
  data = '중간'

} catch (e) {
  data = '에러'
  console.log(e) //[TypeError: str.indexOf is not a function]

}

console.log(data) // 에러