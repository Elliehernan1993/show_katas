//Group project with Anthony Alvarez and Tea Mitchell


function displayElement(type, inner) {
    let parentElement = document.createElement(type)
    let childText = document.createTextNode(inner)
    parentElement.appendChild(childText)
    document.body.append(parentElement)
}

//Kata 1
//Display the numbers from 1 to 20. (1, 2, 3, …, 19, 20)
displayElement('h1', 'Kata 1: ')
let kata1 = []
for (let i = 1; i <= 20; i++) {
    kata1.push(i)
}
displayElement('p', kata1) 


//Kata 2
//Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
displayElement('h1', 'Kata 2: ')
let kata2 = []
for (let i = 2; i <= 20; i += 2) {
    kata2.push(i)
}
displayElement('p', kata2)
 
//Kata 3
// Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
displayElement('h1', 'Kata 3: ')
let kata3 = []
for (let i = 1; i <= 19; i += 2) {
    kata3.push(i)
}
displayElement('p', kata3)

//Kata 4
// Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
displayElement('h1', 'Kata 4: ')
let kata4 = []
for (let i = 5; i <= 100; i += 5) {
    kata4.push(i)
}
displayElement('p', kata4)

//Kata 5
// Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
displayElement('h1', 'Kata 5: ')
let kata5 = []
for (let i = 1; i <= 10; i++) {
    kata5.push(i*i)
}
displayElement('p', kata5)

//Kata 6
// Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
displayElement('h1', 'Kata 6: ')
let kata6 = []
for (let i = 20; i >= 1; i -= 1) {
    kata6.push(i)
}
displayElement('p', kata6)

//Kata 7
// Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
displayElement('h1', 'Kata 7: ')
let kata7 = []
for (let i = 20; i >= 2; i -= 2) {
    kata7.push(i)
}
displayElement('p', kata7)

//Kata 8
// Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
displayElement('h1', 'Kata 8: ')
let kata8 = []
for (let i = 19; i >= 1; i -=2) {
    kata8.push(i)
}
displayElement('p', kata8)

//Kata 9 
// Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
displayElement('h1', 'Kata 9: ')
let kata9 = []
for (let i = 100; i >= 5; i -= 5) {
    kata9.push(i)
}
displayElement('p', kata9)

//Kata 10
// Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
displayElement('h1', 'Kata 10: ')
let kata10 = []
for (let i = 10; i >= 1; i -= 1) {
    kata10.push(i*i)
}
displayElement('p', kata10)

//declaring sample array
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

//Kata 11
// Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
displayElement('h1', 'Kata 11: ')
let kata11 = []
for (let i = 0; i < sampleArray.length; i++) {
    kata11.push(sampleArray[i])
}
displayElement('p', kata11)

//Kata 12
// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
displayElement('h1', 'Kata 12: ')
let kata12 = []
for (let i = 0; i < sampleArray.length; i++) {
  if (sampleArray[i] % 2 === 0) {
      kata12.push(sampleArray[i])
  }
}
displayElement('p', kata12)

//Kata 13
// Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
displayElement('h1', 'Kata 13: ')
let kata13 = []
for (let i = 0; i < sampleArray.length; i++) {
  if (sampleArray[i] % 2 !== 0) {
      kata13.push(sampleArray[i])
  }
}
displayElement('p', kata13)

//Kata 14
// Display the square of each element in sampleArray. (219961, 570025, …, 222784)
displayElement('h1', 'Kata 14: ')
let kata14 = []
for (let i = 0; i <= sampleArray.length; i++) {
    kata14.push(sampleArray[i]*sampleArray[i])
}
displayElement('p', kata14)

//Kata 15
// Display the sum of all the numbers from 1 to 20.
displayElement('h1', 'Kata 15: ')
let kata15 = 0
for (let i = 1; i <= 20; i++) {
    kata15 = kata15 + i
}
displayElement('p', kata15)

//Kata 16
// Display the sum of all the elements in sampleArray.
displayElement('h1', 'Kata 16: ')
let kata16 = 0
for (let i = 0; i < sampleArray.length; i++) {
    kata16 += sampleArray[i]
}
displayElement('p', kata16)

//Kata 17y
// Display the smallest element in sampleArray.
displayElement('h1', 'Kata 17: ')
let min = Math.min.apply(Math, sampleArray)
displayElement('p', min)

// Display the largest element in sampleArray.
displayElement('h1', 'Kata 18: ')
let max = Math.max.apply(Math, sampleArray)
displayElement('p', max)


