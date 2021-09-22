// const names = [
//  'Mia',
//     'Robin',
//      'Nils',
//      'Johan',
//      'Ulrika',
//      'Henrik'
//  ]
// //  names.forEach(function(name, index){
// //     console.log(name, index)
// // })

// const greeting = names.map(function(name) {
//     return `Hej ${name}`
// })

// console.log(greeting)

// const filterOn = 'NORa'
// const lowerCaseNames = names.map(function.map(name){
//     return name.toLowercase() === filterOn.toLowerCase()
// })

// console.log(lowerCaseNames)

const customerSupportAges = [22, 30, 19, 25, 29, 39, 38]
const economyAges = [28, 33, 26, 42, 46, 26, 45]

function averageAgesAtWork(myArray) {
    let sumOfAges = 0
        myArray.forEach (function (element) {
            sumOfAges += element
        });
    let averageValue = sumOfAges / myArray.length
        return averageValue
}
const averageAgeCustomerSupport = averageAgesAtWork(customerSupportAges)
const averageAgeEconomy = averageAgesAtWork (economyAges)

console.log(`Medelåldern hos kundsupporten är ${Math.round(averageAgeCustomerSupport)}`)
console.log(`Medelåldern hos ekonomiavd. är ${Math.round(averageAgeEconomy)}`)