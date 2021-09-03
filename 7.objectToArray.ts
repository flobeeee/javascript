function objectToArray(data: object) {
  let array = Object.values(data)
  return array
}

let ageTypeNames = {
  twenties: 'twenties',
  thirties: 'thirties',
  forties: 'forties',
  fifties: 'fifties',
  sixties: 'sixties',
}

console.log(objectToArray(ageTypeNames))
// [ 'twenties', 'thirties', 'forties', 'fifties', 'sixties' ]

let adTypeInstagram = 'instagram'
let adTypeFacebook = 'facebook'
let adTypeYoutube = 'youtube'

let adTypes = [
    {
      key: adTypeInstagram,
      name: '인스타그램',
    },
    {
      key: adTypeFacebook,
      name: '페이스북',
    },
    {
      key: adTypeYoutube,
      name: '유튜브',
    },
  ]
  
console.log(Object.values(adTypes).map(el => el.key))
// [ 'instagram', 'facebook', 'youtube' ]