const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"))   // Returns true
console.log(fruits.includes("Orange"))   // Returns true
console.log(fruits.includes("Apple"))   // Returns true
console.log(fruits.includes("Banana"))   // Returns true
console.log(fruits.includes("Water"))   // Returns false

// 배열 확인

const inputFruits1 = ["Banana", "Orange"]
const inputFruits2 = ["Banana", "Orange", "FineApple"]

for (const fruit of inputFruits1) {
  if (fruits.includes(fruit)) {
    console.log('pass') // pass, pass
  } else {
    console.log('err')
  }
}

for (const fruit of inputFruits2) {
  if (fruits.includes(fruit)) {
    console.log('pass') // pass, pass
  } else {
    console.log('err') // err
  }
}