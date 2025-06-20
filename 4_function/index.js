//If we use the function keyword without a name, we create a function expression
//which we have to assign to a variable, else we get an error

const generateIntro = function(name) {
  return `Hi, my name is ${name}`
}

const dillion = generateIntro("Dillion")
console.log(dillion)

// Hi, my name is Dillion

//whereas this will giv error:
function(name) {
  return `Hi, my name is ${name}`
}

// SyntaxError: Function statements require a function name

//******* */
//no error:
const result = sum(20, 50)
console.log(result)

console.log("hello")

function sum(num1, num2) {
  return num1 + num2
}
// 70
// "hello"

//error:
const result = sum(20, 50)
console.log(result)

console.log("hello")

const sum = function(num1, num2) {
  return num1 + num2
}
//******** */
// ReferenceError: Cannot access 'sum' before initialization