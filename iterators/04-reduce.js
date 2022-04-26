// Reduce all the element to a single value and

const numbers = [1,2,3,4,5,6,7,8,9]

const result = numbers.reduce(function (total, num) {
    return total + num
})

console.log(result)

const letters = ['a', 'b', 'c', 'd', 'e', 'f']

const abc = letters.reduce(function (acc, letter) {
    return acc + letter
})

console.log(abc)