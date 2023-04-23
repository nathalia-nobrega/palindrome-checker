let inputWord = document.getElementById('inputTxt')
//user input
let btnSend = document.getElementById('btn').addEventListener('click', verifyPalindrome)
//button
let statusCircle = document.getElementById('circle')
//status
let resultDisplay = document.getElementById('resultext')
//result
let cards = document.getElementById('boxes')
//container cards
let card_one = document.getElementById('box-one')
//card one
let card_two = document.getElementById('box-two')
//card two

let lastWord = []
let palindrome = []

function verifyPalindrome() {
    let str = inputWord.value
    if (!str.length) {
        alert('[ERROR] Please, make sure to write a word on the box')
        resultDisplay.style.display = 'none'
        card_one.innerText = ''
        card_two.innerText = ''
    } else{
    let strFormat = str.replace(/[^\w]|_/g, "").toLowerCase()
    let newStr = str.replace(/[^\w]|_/g, "").split('').reverse().join('').toLowerCase()
    let textOne = document.createElement('p')
    let textTwo = document.createElement('p')
    var lastPalindrome
    card_one.innerText = ''
    card_two.innerText = ''
    
    if (newStr === strFormat) {
        resultDisplay.innerHTML = `${str} is a palindrome!`
        statusCircle.style.backgroundColor = '#577BC1'
        lastWord.push(str)
        palindrome.push(str)
        textOne.innerText = `${lastWord[lastWord.length -1]}`
        textTwo.innerText = `${lastWord[lastWord.length -1]}`
        card_one.appendChild(textOne)
        card_two.appendChild(textTwo)
        
    }
    else {
        resultDisplay.innerHTML = `${str} is not a palindrome!`
        statusCircle.style.backgroundColor = '#FF5959'
        lastWord.push(str)
        if (palindrome.length == 0) {
            textOne.innerText = `${lastWord[lastWord.length -1]}`
            textTwo.innerText = ''
            card_one.appendChild(textOne)
            card_two.appendChild(textTwo)
        } else {
        textOne.innerText = `${lastWord[lastWord.length -1]}`
        textTwo.innerText = `${palindrome[palindrome.length -1]}`
        card_one.appendChild(textOne)
        card_two.appendChild(textTwo)
        }
    }
    inputWord.value = ''
    inputWord.focus()

    
    }
}
