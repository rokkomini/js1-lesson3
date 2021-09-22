// function sayHi (greeting, name){
//     return (`${greeting} \n ${name}`)
// }

// const greetingSentence = sayHi('Hello', 'Jonas')
// console.log(greetingSentence)

// function add(x, y, z){
//     return x + y + z
// }
// const threePlusFour = add(3, 4, 5)
// console.log(threePlusFour)

// function multiply (x, y){
//     return x * y
// }
// console.log(multiply(7, 8))

function isEven (number){
return number % 2 == 0
}
console.log(isEven(6))

const legalVotingAge = (age) => {
    return age >= 18 ? 'You are allowed to vote': 'You are not allowed to vote'
}
console.log(legalVotingAge(16))
console.log(legalVotingAge(27))