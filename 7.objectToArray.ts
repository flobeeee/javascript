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