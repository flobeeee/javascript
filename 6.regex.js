let word = '안녕 dsl1233'


// 1. 한글, 영문, 숫자, 띄어쓰기 가능
console.log(/^[가-힣a-zA-Z0-9\s]+$/.test(word)) // true

// 2. 한글, 영문, 숫자 가능
console.log(/^[가-힣a-zA-Z0-9]+$/.test(word)) // false


const replacements = new RegExp('#{(.*?)}', 'gsmi')
const bodyKeys= " 회원가입을 축하합니다.<br> 안녕하세요, #{userName} 회원님! 이메일 : #{email}".match(replacements)
console.log('bodyKeys', bodyKeys)