
let myArray = [17,22, 33, 5, 3, 73]

const voters = []
const nonVoters = []

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    element < 18 ? nonVoters.push(element) : voters.push(element)
    // if (element < 18) {
    //     nonVoters.push(element)
    // } else {
    //     voters.push(element)
    // }
}

console.log(voters)
console.log(nonVoters)
console.log(myArray)