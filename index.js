// document.getElementById("count-el").innerText = 5

// let firstBatch = 7
// let secondBatch = 5

// let count = firstBatch +  secondBatch


// console.log(count)

// let myAge = 27
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio


// console.log(myDogAge)

// let bonusPoints = 50

// bonusPoints += 50

// console.log(bonusPoints)

// bonusPoints -= 75

// console.log(bonusPoints)

// bonusPoints += 45

// console.log(bonusPoints)


// function increment() {
//     console.log("You clicked the button!")

// }

// function myLogger() {
//     console.log(42)
// }

// myLogger()

// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted += 1
//     console.log(lapsCompleted)

// }

// incrementLap()
// incrementLap()
let count = 0

function increment() {
    count += 1
    document.getElementById("count-el").textContent = count
    console.log(count)
}

function save() {
    let countStr = count + ' - '

    document.getElementById("save-el").textContent += countStr
    console.log(count)
    document.getElementById("count-el").textContent = 0
    count = 0

}

// let name1 = "Derick Ogendi"
// let greeting = "Welcome back "

// document.getElementById("welcome-el").innerText = greeting + name1
