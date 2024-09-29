// === define datatype in addition but == don't define it

/* 
    JS usually need to put (;) after end of the thing, but the code not put because JS itself support Automatic Semicolon Insertion (ASI)

    the best practice is you put it in default to avoid from let computer do more work
*/

/*
    *************
    *   Math    *
    *************
    e.g. Math.random() - generate random number 0.000 and 0.999 (around 0 and 1)
    e.g. Math.random() * 6 - 0.000 -> 5.999

    Math.floor - basically convert the decimal point to integer (remove all the decimal)
    e.g. Math.floor(Math.random() * 6)  - generate random number around 0 to 5
    e.g. Math.floor(Math.random() * 6) + 1 - order change,random number gnerated around 1 and 6 
*/

/**
    *************************
    *  Array/List           *
    *************************
    Add items - arrayName.push(*value/variable*)
    Remove items / start from last items - arrayName.pop()
*/

/*
    *********************************************
    *   loops - almost same with c programming  *
    *********************************************

    e.g. for( let i = 1; i < 21; i += 1 or 1++ ){ ... }

    loops for arrays : dynnamic wyas 
    e.g. for( let i = 1; i < mesage.length; i += 1){ 
        console.log(arrayname[i])
    }
*/

/* 
    true condition 
    if (a) same meaning with if(a === true)
*/

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = '';
// let sumEl = document.getElementById('sum-el')
let msg = document.querySelector('#message-el')

// instead of using the getElementById, just use query selector since it more dynamic. For example, it can retrieve class, id, and element. 
// getElementById only support id
let cardEl = document.querySelector('#card-el')
let sumEl = document.querySelector('#sum-el')

// // refer to class
// let sumEl = document.querySelector('.sum-el')


/* 
    object - think as associative array

    Properties - special types of variables that are associated with an object. E.g.
        car.name
        car.color
        car.brand


    associative array example 
    e.g. PHP ver 5.4 above associative array
    let a = [
        "name" => "happy ah"
        "password" => "12345678"
    ]
    
    start with open {}
    how to define a object? 
    Well, the most easy way is if the code is like variableName.propertyName

    dot (.) is the core to identify whether it is object or not
    e.g. document.querySelector("") - is object because it is dot
    e.g. user.name - object since have dot (.)
    e.g. console.log() - object since have dot (.)

    the way call object can be dot (.) or bracket notation
    e.g. dot (.)
    1. user.password
    2. user.gender

    Bracket Notation]
    Format:
        object[expression] - expression within the brackets evaluates to a key for the property you want to access, and this expression will return the value of the property.
    
    e.g. bracket notation
    1. user["password"]
    2. user["gender"]

    Difference by example
        const person2 = {
        firstname: 'John',
        lastname: 'Doe',
        };

        let name = 'lastname'

        console.log(person2.name) // undefined
        console.log(person2[name]); // Doe
        // Expected output: "Doe"

    In here you can actually see the differene because the dot (.) notation is static key while bracket notation is dynamic key. Can say that static is like the walllpaper cannot move while dynamic is the wallpaper can move

    Method - function of the object
    e.g. 
        let user = {
            name: function() { ... } // that waht we call method
        };
    
    
    way to output it
    user.name()
*/

let player = {
    name: "Lee",
    chips: 145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

// function declaration 
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1){
        return 11
    }else if(randomNumber > 10){
        // why not using (randomNumber >= 11 && randomNumber <= 13)
        // think logically since it random number until 13 so this code lead to no efficiently
        return 10
    }else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for( let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + ' '
    }
    
    sumEl.textContent = 'Sum: ' + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    msg.textContent = message
}

function newCard(){
    if (isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }

}