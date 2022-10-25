
// 인풋
const data = { "male": 0.6, "female": 0.4 }
// prepare
console.log(JSON.stringify(data)) // {"male":0.6,"female":0.4} 
//coonsume
console.log(JSON.parse(JSON.stringify(data))) // { male: 0.6, female: 0.4 }

// 객체 합치기

const message = {
  userId : 1,
  number : 999
}

console.log(JSON.stringify({ ...message, env:'staging' }))