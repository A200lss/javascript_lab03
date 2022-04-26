// Functions Expressions
const sum = function(a, b){
    return a + b
}

console.log(sum(3,4))

const doMath = function(c,d,func){
    console.log(func(c,d))
}

// callbak is a function passed as argument to another function that
// sum is used as a callback function
doMath(3,4, sum)

// Passing an anonymous function as callback function
doMath(3,4, function(a,b){
    return a * b
})