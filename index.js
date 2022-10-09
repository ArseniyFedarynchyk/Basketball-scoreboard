const homeText = document.querySelector(".home")
const guestText = document.querySelector(".guest")
const btnNewGame = document.querySelector(".btn__NewGame")
let resultHome = 0
let resultGuest = 0

btnNewGame.addEventListener("click", function() {
    resultHome = 0
    resultGuest = 0
    homeText.textContent = resultHome
    guestText.textContent = resultGuest
})

document.querySelector(".addOneToHome").addEventListener("click", function(){
    resultHome += 1
    homeText.textContent = resultHome
})

document.querySelector(".addTwoToHome").addEventListener("click", function(){
    resultHome += 2
    homeText.textContent = resultHome
})

document.querySelector(".addThreeToHome").addEventListener("click", function(){
    resultHome += 3
    homeText.textContent = resultHome
})

document.querySelector(".addOneToGuest").addEventListener("click", function(){
    resultGuest += 1;
    guestText.textContent = resultGuest
})

document.querySelector(".addTwoToGuest").addEventListener("click", function(){
    resultGuest += 2;
    guestText.textContent = resultGuest
})

document.querySelector(".addThreeToGuest").addEventListener("click", function(){
    resultGuest += 3;
    guestText.textContent = resultGuest
})

