// . 뒤 문자 가져오기
const file = 'instagram/post/media/2885785501963702584/2885785501963702584.mp4'
console.log(file.split('.').pop()) // mp4

// ! 최종 함수

function pickUserName (instagramUrl) {
  if (instagramUrl.includes('instagram.com/')) {
    const urlPath = instagramUrl.split('instagram.com/')
    if (urlPath[urlPath.length - 1].slice(-1) === '/') {
    return urlPath[urlPath.length - 1].slice(0, -1)
  } else {
    return urlPath[urlPath.length - 1]
  }
  } else
    return false
}

let instagramUrl;
instagramUrl = 'https://www.instagram.com/abcde/'
console.log(pickUserName(instagramUrl)) // abcde

instagramUrl = 'https://www.instagram.com/test1'
console.log(pickUserName(instagramUrl)) // test1

instagramUrl = 'https://www.naver.com/test2'
console.log(pickUserName(instagramUrl)) // false

instagramUrl = 'instagram.com/test3/'
console.log(pickUserName(instagramUrl)) // test3

instagramUrl = 'www.instagram.com/test4'
console.log(pickUserName(instagramUrl)) // test4

//

// 아이디만 뽑아내기

let ins1 = 'https://www.instagram.com/abcde/'
let ins2 = 'https://www.instagram.com/test1/, https://www.instagram.com/test2/'

let sliceStart = 26
let sliceEnd = -1

// console.log(ins1.split(', ').map(el => el.slice(sliceStart, sliceEnd))) // ['abcde']
// console.log(ins2.split(', ').map(el => el.slice(sliceStart, sliceEnd))) // [ 'test1', 'test2' ]

// url이 'https://www.instagram.com/abcde' 로 들어올 경우

let ins3 = 'https://www.instagram.com/abcde'
let ins4 = 'https://www.instagram.com/test1, https://www.instagram.com/test2'

// console.log(ins3.split(', ').map(el => el.split('/')[3])) // ['abcde']
// console.log(ins4.split(', ').map(el => el.split('/')[3])) // [ 'test1', 'test2' ]

// url이 혼용되어 들어올 경우

let ins5 = 'https://www.instagram.com/abcde/'
let ins6 = 'https://www.instagram.com/test1/, https://www.instagram.com/test2/'
let ins7 = 'https://www.instagram.com/abcde'
let ins8 = 'https://www.instagram.com/test1, https://www.instagram.com/test2'

// console.log(ins5.split(', ').map(el => el.split('/')[3])) // ['abcde']
// console.log(ins6.split(', ').map(el => el.split('/')[3])) // [ 'test1', 'test2' ]
// console.log(ins7.split(', ').map(el => el.split('/')[3])) // ['abcde']
// console.log(ins8.split(', ').map(el => el.split('/')[3])) // [ 'test1', 'test2' ]

// 인스타그램 계정이 아닌 경우

let ins9 = 'https://www.naver.com/abcde/'
let ins10 = 'https://www.naver.com/test1, https://www.naver.com/test2'

if (ins9.includes('instagram.com/') || ins10.includes('instagram.com/')) {
  console.log('안넘어옴')
}

// 계정이 다른 형식으로 들어오는 경우

let ins11 = 'instagram.com/abcde/'
let ins12 = 'www.instagram.com/test1'

if (ins11.includes('instagram.com/')) {
  const urlPath = ins11.split('instagram.com/') // [ '', 'abcde/' ]
  // console.log(urlPath[urlPath.length - 1].slice(-1)) // '/'
  
  if (urlPath[urlPath.length - 1].slice(-1) === '/') {
    // console.log(urlPath[urlPath.length - 1].slice(0, -1)) // abcde
  } else {
    // console.log(urlPath[urlPath.length - 1])
  }
}

