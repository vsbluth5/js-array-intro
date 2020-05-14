let favFoods = ["Mac & Cheese", "Avocados", "Mango", "French Fries", "Boba"]
console.log(favFoods[1])

// Change the second favorite food
favFoods[2] = "Papaya"
// Print it out to confirm that the value was changed
console.log(favFoods[2])

let favFoods2 = ["Mac & Cheese", "Avocados", "Mango", "French Fries", "Boba"]

favFoods2.forEach(food => {
  console.log(`I really like ${food}!`)
})

let someNums = [4, 9, 42, 128, 33, 12]

let sum = 0
someNums.forEach(x => {
  sum += x
  console.log(`After adding ${x}, the new total is ${sum}.`)
})
console.log(sum)

// OBJECTS
let taylor = {
  "hair": "Brown",
  "eyes": "Brown",
  "age": 27,
  "residence": "New York City",
  "hometown": "Denver"
}

let nunzio = {
  "hair": "Blonde",
  "eyes": "Hazel",
  "age": 21,
  "residence": "Phoenix",
  "hometown": "Toronto",
}

// Have students predict what will be printed as a result of the following line:
console.log(nunzio["residence"])

// If Nunzio moves, we'll need to change his residence
nunzio["residence"] = "Dallas"

// If Nunzio alread has a college property, this will overwrite it.
// If Nunzio doesn't have a college, this will add one.
nunzio["college"] = "Northern Arizona University"

// These should have the same result.
// Dot syntax
console.log(nunzio.residence)
// Bracket syntax
console.log(nunzio["residence"])



