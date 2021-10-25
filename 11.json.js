
// 인풋
const data = { "male": 0.6, "female": 0.4 }
// prepare
console.log(JSON.stringify(data)) // {"male":0.6,"female":0.4} 
//coonsume
console.log(JSON.parse(JSON.stringify(data))) // { male: 0.6, female: 0.4 }