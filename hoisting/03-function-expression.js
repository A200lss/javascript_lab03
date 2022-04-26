// Function expression are a way to attach functions to variables

console.log(rectArea)
rectArea(3,4)

var rectArea = function (width, height){
    return width * height
}

//FE are hoisted as the variable they are, without definition
