// 1. Skriv ut summan av varje array
// 2. Skriv ut summan av båda arrayerna

const arr1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
const arr2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

function sumOfArrays(myArray) {
    let sum = 0
    myArray.forEach(function(item) {
        sum += item
    })
    return sum
}

const sumofArr1 = sumOfArrays(arr1)
const sumofArr2 = sumOfArrays(arr2)
const sumOfBothArrays = sumofArr1 + sumofArr2

console.log(`Summan av array 1 är ${sumofArr1}`)
console.log(`Summan av array 2 är ${sumofArr2}`)
console.log(`Summan av både arrayerna är därmed ${sumOfBothArrays}`)

// Task 2: Använd map för att multiplera varje värde i arrayn med 3

const arr3 = [23, 43, 12, 65, 34, 100, 1000]

const Times3Array = arr3.map(multiplyFunction)
function multiplyFunction(num){
    return num * 3
}

console.log(Times3Array)