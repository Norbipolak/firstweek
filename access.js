let myShoppingList = ["banana", "bread", "oat milk"]

let myShoppingListLength = myShoppingList.length

console.log(myShoppingListLength)

let myThirdShoppingListItem = myShoppingList[2]

console.log(myThirdShoppingListItem)

myShoppingList[0] = "olive oil"

let myFirstShoppingItem = myShoppingList[0]

console.log(myFirstShoppingItem)

console.log(myShoppingListLength) // still reamins like in the brackets 3

let myPeopleList = [
    {
        name: "Norbert"
    }, 
    {
        name: "David"
    }
]

let myFirstPersonName = myPeopleList[0].name

console.log(myFirstPersonName)

myPeopleList[0].name = "Dani"

console.log(myFirstPersonName)