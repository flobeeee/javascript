// 3. 특정 특수문자 지우기

let hastag = '#코딩'
console.log(hastag.replace(/\#/g,'')) // 코딩
hastag = '코#딩###'
console.log(hastag.replace(/\#/g,'')) // 코딩
hastag = '####코#딩###'
console.log(hastag.replace(/\#/g,'')) // 코딩
const account = '@star'
console.log(account.replace(/\@/g,'')) // star


function regExp(str){  
  var reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
  //특수문자 검증
  if(reg.test(str)){
    //특수문자 제거후 리턴
    return str.replace(reg, "");    
  } else {
    //특수문자가 없으므로 본래 문자 리턴
    return str;
  }  
}

console.log(regExp(hastag))

// ---
let word = '안녕 dsl1233'


// 1. 한글, 영문, 숫자, 띄어쓰기 가능
console.log(/^[가-힣a-zA-Z0-9\s]+$/.test(word)) // true

// 2. 한글, 영문, 숫자 가능
console.log(/^[가-힣a-zA-Z0-9]+$/.test(word)) // false


const replacements = new RegExp('#{(.*?)}', 'gsmi')
const bodyKeys= " 회원가입을 축하합니다.<br> 안녕하세요, #{userName} 회원님! 이메일 : #{email}".match(replacements)
console.log('bodyKeys', bodyKeys)