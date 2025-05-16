//  Array to store the drawn cards
let cards = []

//  Sum of the card values
let sum = 0

//  Flag to check if the player got Blackjack (exactly 21)
let hasBlackjack = false

//  Flag to check if the player is still in the game
let isAlive = false

//  References to HTML elements
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

let message = ""

/**
 *  Function to get a random card between 1–13
 * A = 11, J/Q/K = 10, others are as is
 */
function getRandomCard() {
    let card = parseInt(Math.random() * 13 + 1)
    return card > 10 ? 10 : card === 1 ? 11 : card
}

/**
 *  Function to start the game
 * - Resets the game state and deals 2 cards
 */
function startGame() {
    isAlive = true
    hasBlackjack = false

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

/**
 *  Function to update the UI with game status
 */
function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(" ")
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

/**
 * Function to draw a new card if allowed
 */
function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}
