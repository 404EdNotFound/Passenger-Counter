let countValue = document.getElementById("countingValue")
let count = 0

function add() {
    count += 1
    countValue.textContent = count
}

function reset() {
    count = 0
    countValue.textContent = 0
}