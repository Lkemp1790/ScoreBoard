let guestScore = document.getElementById("score_guest");
let guestCount = 0
let homeScore = document.getElementById("score_home");
let homeCount = 0

function guest1() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guest2() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function guest3() {
    guestCount += 3
    guestScore.textContent = guestCount
}

function home1() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function home2() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function home3() {
    homeCount += 3
    homeScore.textContent = homeCount
}