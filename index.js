// Code your solutions in this file
let messages = []
function writeCards(array,event){
    for(let i=0; i < array.length; i++){
      messages[i]= `Thank you, ${array[i]}, for the wonderful ${event} gift!`
    }
    return messages
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));



function countDown(x){
    let i = x
    while(i >= 0){
        console.log(i)
        i--
    }
}
countDown(10)
countDown(4)