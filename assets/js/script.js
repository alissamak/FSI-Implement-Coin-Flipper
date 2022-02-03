// TODO: Declare any global variables we need
let heads = 0 //sets heads as 0 as default
let tails = 0 //sets tails as 0 as default

let btnFlip = document.querySelector('#flip') //recall flip button location in html
let btnClear = document.querySelector('#clear') //recall clear button location in html

let headsCount = document.querySelector('#heads') //recall heads count location in html
let tailsCount = document.querySelector('#tails') //recall tails count location in html

let headsPercent = document.querySelector('#heads-percent') //recall heads percentage location in html
let tailsPercent = document.querySelector('#tails-percent') // recall tails percentage location in html

let flipMessage = document.querySelector('.message-container') //recall flipping type message location in html
let pennyImg = document.querySelector('#penny-image') // recall penny image location in html

document.addEventListener('DOMContentLoaded', function () {
//display values for heads & tails count, and heads & tails percentages
    function displayValues(){
        headsCount.textContent = heads
        tailsCount.textContent = tails
        let total = heads + tails
        if (total == 0){
            headsPercent.textContent = '0%'
            tailsPercent.textContent = '0%'
        }
        else{
            headsPercent.textContent = `${Math.round((heads/total)*100)/100}%`
            tailsPercent.textContent = `${Math.round((tails/total)*100)/100}%`
        }
    }

    // TODO: Add event listener and handler for flip button
    btnFlip.addEventListener('click', function(){
        let flip = Math.random() < 0.5   //randmoize flipping less than 0.5 as it is a 50/50 chance of flipping coin
        if (flip > 0.5){
                heads = heads + 1 //add 1 to every heads count
                flipMessage.textContent = 'You Flipped Heads!' //change flip message to heads
                pennyImg.src = 'assets/images/penny-heads.jpg' //change image source to heads image
 
            }
            else if (flip < 0.5){
                tails = tails + 1 //add 1 to every tails count
                flipMessage.textContent = 'You Flipped Tails!' //change flip message to tails
                pennyImg.src = 'assets/images/penny-tails.jpg' //change image source to tails image
            }
        displayValues() //display values function
    })
    // TODO: Add event listener and handler for clear button
    btnClear.addEventListener('click', function(){
        heads = 0 //resets to 0
        tails = 0 //resets to 0
        flipMessage.textContent = "Let's get Rolling!" //resets flip message to original message
        pennyImg.src = 'assets/images/penny-heads.jpg' //resets image src to original heads image
        displayValues() //displays resetted values
    })

})