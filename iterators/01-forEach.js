// Imperativa style

const someArray = ['kiwi', 'peras', 'bananas']

for (i in someArray){
    const sentence = `I like ${someArray[i]}`
    console.log(sentence)
}

// The functional or declarative styles would bi like:

someArray.forEach(function(fruit){
    const sentence = `I like ${fruit}`
    console.log(sentence)
})

// Mini challenge print each elemnt of the array in UPPERCASE

someArray.forEach(function(fruit){
    const sentence = `I like ${fruit.toUpperCase()}`
    console.log(sentence)
})
