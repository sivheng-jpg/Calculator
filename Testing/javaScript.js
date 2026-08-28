let number = 0;
let add = document.getElementById('add')
let minus = document.getElementById('minus')
let multi = document.getElementById('multi')
let devide = document.getElementById('devide')
let clear = document.getElementById('clear')
let result = document.getElementById('result')
let equal = document.getElementById('equal')

let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let n3 = document.getElementById('n3')
let n4 = document.getElementById('n4')
let n5 = document.getElementById('n5')
let n6 = document.getElementById('n6')
let n7 = document.getElementById('n7')
let n8 = document.getElementById('n8')
let n9 = document.getElementById('n9')
let n0 = document.getElementById('n0')

let storeNumber = ""

n1.addEventListener("click", function(){
    storeNumber = storeNumber + "1"
    result.innerText = storeNumber
})

n2.addEventListener("click", function(){
    storeNumber = storeNumber +"2"
    result.innerText = storeNumber
})

n3.addEventListener("click", function(){
    storeNumber = storeNumber +"3"
    result.innerText = storeNumber
})

n4.addEventListener("click", function(){
    storeNumber = storeNumber +"4"
    result.innerText = storeNumber
})

n5.addEventListener("click", function(){
    storeNumber = storeNumber +"5"
    result.innerText = storeNumber
})

n6.addEventListener("click", function(){
    storeNumber = storeNumber +"6"
    result.innerText = storeNumber
})

n7.addEventListener("click", function(){
    storeNumber = storeNumber +"7"
    result.innerText = storeNumber
})

n8.addEventListener("click", function(){
    storeNumber = storeNumber +"8"
    result.innerText = storeNumber
})

n9.addEventListener("click", function(){
    storeNumber = storeNumber +"9"
    result.innerText = storeNumber
})

n0.addEventListener("click", function(){
    storeNumber = storeNumber +"0"
    result.innerText = storeNumber
})

add.addEventListener("click", function(){
    if (storeNumber !== "" && 
        !storeNumber.endsWith(" + ") && 
        !storeNumber.endsWith(" - ") && 
        !storeNumber.endsWith(" * ") && 
        !storeNumber.endsWith(" / ")) {

        storeNumber = storeNumber + " + "
        result.innerText = storeNumber
    }
})

minus.addEventListener("click", function(){
    if (storeNumber !== "" && 
        !storeNumber.endsWith(" + ") && 
        !storeNumber.endsWith(" + ") && 
        !storeNumber.endsWith(" * ") && 
        !storeNumber.endsWith(" / ")) {

        storeNumber = storeNumber + " - "
        result.innerText = storeNumber
    }
})

multi.addEventListener("click", function(){
    if (storeNumber !== "" && 
        !storeNumber.endsWith(" x ") && 
        !storeNumber.endsWith(" + ") && 
        !storeNumber.endsWith(" - ") && 
        !storeNumber.endsWith(" / ")) {

        storeNumber = storeNumber + " * "
        result.innerText = storeNumber
    }
})

devide.addEventListener("click", function(){
    if (storeNumber !== "" && 
        !storeNumber.endsWith(" + ") && 
        !storeNumber.endsWith(" - ") && 
        !storeNumber.endsWith(" * ") && 
        !storeNumber.endsWith(" + ")) {

        storeNumber = storeNumber + " / "
        result.innerText = storeNumber
    }
})

clear.addEventListener("click", function(){
    storeNumber = ""
    result.innerText = "0"
})

equal.addEventListener("click", function(){
    if (storeNumber !== "") {

        let answer = eval(storeNumber)

        storeNumber = answer.toString()
        result.innerText = answer
    }
})
