// Get started!
const name = prompt("What will your racing name be ?")
let car = prompt(name + ", Pick a car you would like to race with!!")
console.log("You selected " + car)
let speed = prompt("How fast would you like your car to go?")
console.log(parseFloat(speed))

let upgrade = prompt("Would you like to upgrade your car in any way?")

if (upgrade == "Yes"){
  let needUpgrade = prompt("What would you like to upgrade?")
  console.log(needUpgrade)
}else if (upgrade == "No"){
  let noUpgrade = prompt("Ok, Would you like to start your race?")
  console.log(noUpgrade)
}else{
  let tryAgain = "?? Answer again"
  console.log(tryAgain)
}
