// Create a new array with the result of tehe function

const fruits = ['kiwi', 'peras', 'bananas']

const upperFruits = fruits.map(function(fruit){
    return fruit.toUpperCase()
})

console.log(upperFruits)

const numbers = [1, 2, 3, 4, 5, 6, 7]

const doubleNumbers = numbers.map(function(num){
    return num * 2
})

console.log(doubleNumbers)