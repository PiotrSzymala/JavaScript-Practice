// function helloName(name){

//     let result = "Hello,  " + name
//    return result
// }

// const variableFunction = function(){
//     let result = "Hello,  " + name
//    return result
// }

// let arrowFunction = (name) => {
//     let result = "Hello,  " + name
//    return result
// }


// const result1 = helloName("Piotr")
// console.log(result1);

// let resultFromArrowFunction = arrowFunction("arrow")
// console.log(resultFromArrowFunction);


// function concatDatas(name, lastname) {

//     return name + " " + lastname
// }

// let variableConcatFunction = function (name, lastname) {
//     return name + " " + lastname
// }

// let arrowConcatFunction = (name, lastname) => {
//     return name + " " + lastname
// }

// let excerciseResult1 = concatDatas("Piotr", "Szymala")
// console.log(excerciseResult1);

// let excerciseResult2 = variableConcatFunction("Kamil", "Ślimak")
// console.log(excerciseResult2);

// let excerciseResult3 = arrowConcatFunction("Jan", "Rodzeń")
// console.log(excerciseResult3);


// typ number

// let a = 10
// let b = 5

// let sum = a + b
// let difference = a - b
// let multiply = a * b
// let divide = a / b

// console.log(sum);
// console.log(difference);
// console.log(multiply);
// console.log(divide);

// let textualNumber = "123"

// console.log(parseInt(textualNumber) + 2);



// function isDivisible(a, b){
//     return a % b === 0
// }

// console.log(isDivisible(3,1));
// console.log(isDivisible(5,2));
// console.log(isDivisible("3",1));
// console.log(isDivisible(3,"1"));

// var intials = (nameAndLastName) =>{

//     let splitted = nameAndLastName.split(" ")

//     return splitted[0].charAt(0) + splitted[1].charAt(0)
// }

// console.log(intials("Piotr Szymala"));
// console.log(intials("Kamil Ślimak"));
// console.log(intials("Adrian Duda"));

// const firstName = "John"
// const lastnameName = "Doe"
// const age = 30

// // opertor +
// const message1 = "Hello my name is " + firstName + " " + lastnameName + " I'm " + age

// // concat method
// const message2 = "Hello my name is ".concat(firstName, " ", lastnameName, " I'm " + age)


// // string interpolation

// const message3 = `Hello my name is ${firstName} ${lastnameName} I'm ${age}`

// console.log(message1);
// console.log(message2);
// console.log(message3);


// tablice

// let numbers = [1, 3, 23, 14 ,55]
// console.log(numbers[4]);

// numbers.push(200)
// console.log(numbers);

// const filteredNumbers = numbers.filter(x => x % 2 == 0)
// console.log(filteredNumbers)

// zad. 1:

// let t = [23, 12, 5, 9, 45]
// console.log(t);

// function swap(array, x, y) {

//     let temp = array[x]
//     array[x] = array[y]
//     array[y] = temp
// }

// swap(t, 1, 3)
// console.log(t);

// // zad. 2:

// t = [23, 12, 5, 9, 45]
// console.log(t)

// function howManyBiggerThanX(array, x){

//     let numbersBiggerThanX = array.filter(y => y > x)

//     return numbersBiggerThanX.length
// }

// console.log(howManyBiggerThanX(t, 20));


// tablice - foreach
// const t = [23,12, 5, 9, 45]

// t.forEach ((element, index) => {
//     console.log(` Index: ${index}, Wartość: ${element}`)
// })


//Zad 1 i 2

// function sumElements(array){

//     let sum = 0

//     array.forEach(element => sum += element)

//     return sum
// }

// function avgElements(array){

//     let result = sumElements(array) / array.length

//     return Math.floor(result)
// }

// const t = [23,12, 5, 9, 45]

// console.log(sumElements(t));
// console.log(avgElements(t));

// metoda map

// const celsiusTemp = [0, 15, 30, 45, 60]

// const celsiusToFarentheit = t =>  9/5 * t + 32

// const toFarenheitMap = celsiusTemp.map(celsiusToFarentheit)

// let newArray = []

// celsiusTemp.forEach(t => {
//     newArray.push(celsiusToFarentheit(t))
// })

// console.log(toFarenheitMap);
// console.log(newArray);

// laczenie tablic

// const t = [23,12, 5, 8, 235]

// let result =  t.join(":")
// console.log(result);

// flat map

// const people = [
//     {
//         name: "Kamil",
//         age: 22,
//         phoneNumbers: ["777-888-999", "000-111-222"]
//     },
//     {
//         name: "Michal",
//         age: 46,
//         phoneNumbers: ["333-444-555", "698-420-222"]
//     },
//     {
//         name: "Ewa",
//         age: 35,
//         phoneNumbers: ["333-444-555"]
//     },
// ]

// let numbers = people.flatMap(p=>p.phoneNumbers)

// console.table(numbers)


//Callbacks

// const t = [23,12, 5, 9, 45]

// function filterAndDisplay(array, elementPredicate, displayCallback){

//     const results = array.filter(elementPredicate)

//     displayCallback(results)
// }

// const displayCallback1 = (x) => console.log(x);

// const displayCallback2 = (arr) => arr.forEach(x => console.log(x));

// filterAndDisplay(t, x=>x > 5, displayCallback2)


// sortowanie tablic

// const t = [23,12, 5, 9, 45, 453, 1000]

// t.sort ((a, b) => a - b)
// console.log(t)

// t.sort((a,b) => b - a)
// console.log(t);

// const names = ["Kamil", "Karolina", "Adam", "Piotr", "Zuzia", "Michal"]

// names.sort()
// console.log(names);

// names.reverse()
// console.log(names)

// names.sort((a, b) => a.length - b.length)
// console.log(names);

// names.sort((a, b) => b.length - a .length)
// console.log(names);


// const people = [
//     {
//         name: "Kamil",
//         age: 22,
//         phoneNumbers: ["777-888-999", "000-111-222"]
//     },
//     {
//         name: "Michal",
//         age: 46,
//         phoneNumbers: ["333-444-555", "698-420-222"]
//     },
//     {
//         name: "Ewa",
//         age: 35,
//         phoneNumbers: ["333-444-555"]
//     },
// ]

// people.sort((a,b) => b.age - a.age)

// console.table(people)

//sortowanie tablic - zadanie

// function test(numArr1, numArr2, n){

//     let concatedArray = numArr1.concat(numArr2)

//     concatedArray.sort((a,b) => a - b)

//     return concatedArray.slice(concatedArray.length - n)
// }


// const t1 = [23, 46, 5]
// const t2 = [11,3]
// console.log(test(t1,t2,3))

// function test2(numArr1, numArr2, n){

//     let concatedArray = numArr1.concat(numArr2)

//     concatedArray.sort((a,b) => b - a)

//     return concatedArray.slice(0,n)
// }

// console.log(test2(t1,t2,5))


// dekonstrukcja tablic

// const coordinates = [150, 424, 5] // [x,y,z]
// const [x,y,z] = coordinates

// console.log(x);
// console.log(y);
// console.log(z);

// // pomijanie elementów

// const frutis = ["apple", "orange", "banana"]

// const [first, ,third] = frutis

// // reszta tablicy
// const colors = ["red", "green", "blue", "yellow"]
// const[primary, secondary, ...restColors] = colors

// console.log(primary);
// console.log(secondary);
// console.log(restColors);


// // domyslne wartosci

// const values = [1,3]

// const [firstValue, secondValue = 5] = values

// console.log(firstValue);
// console.log(secondValue);

// spread operator

// function disemvowel(str) {

//     const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

//     vowels.forEach(element => {

//         str = str.replaceAll(element, '')
//     });

//     return str
// }

// console.log(disemvowel("This website is for losers LOL!"));

// function likes(names) {
//     switch(names.length) {
//         case 0:
//           return "no one likes this"
//         case 1:
//           return `${names[0]} likes this`
//         case 2:
//             return `${names[0]} and ${names[1]} like this`
//         case 3:
//           return `${names[0]}, ${names[1]} and ${names[2]} like this`
//         default:
//             return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
//     }
// }

// let string = "abcd"

// let test = string.split('').reverse().toString().replaceAll(',',"")

// console.log(test);
// function createPhoneNumber(numbers){
//   return `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(-4).join("")}`
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// let num = 123

// let test = num.toString().split("")




// function squareDigits(num){
//   let result = num.toString().split("").map(n => parseInt(n) ** 2)

//     return parseInt(result.join(""))
// }

// console.log(squareDigits(3212));

// obiekty
// const atm = {

//   balance: 1000,
//   displayBalance: function(){
//     console.log("Current balance: " + this.balance)
//   },
//   depositMoney: function(payment){
//     this.balance += payment
//   },
//   withdrawMoney: function(amount){
//     this.balance -= amount
//   }

// }

// atm.displayBalance()
// atm.depositMoney(150)
// atm.displayBalance()
// atm.withdrawMoney(300)
// atm.displayBalance()

// daty

// function isAdult(birthDate){
//   const dateOfBirth = new Date(birthDate)
//   const today = new Date()
//   const eighteenYearsAgo = new Date(today.setFullYear(today.getFullYear()-18))


//   return dateOfBirth < eighteenYearsAgo
// }

//onsole.log(isAdult("2020/10/29"));

// function daysToAdult(birthDate){
//   let dateOfBirth = new Date(birthDate)

//  let adultDate = new Date(dateOfBirth.setFullYear(dateOfBirth.getFullYear() + 18))

//   let today = new Date()

//   let result = adultDate.getDay()- today.getDay()
//   return new Date(result)

// }

// console.log(daysToAdult("2020/10/29"))

// const date = new Date(2022,5,22)
// const pastDate = new Date(2021,5,20)

// var days = date.getDay() - pastDate.getDay()
// var years = date.getFullYear() - pastDate.getFullYear()

// console.log(days);
// console.log(years);

// function isAdult(birthDate){
//   let dayOfBirth = new Date(birthDate)
//   let check = new Date(dayOfBirth.getUTCFullYear() + 18, dayOfBirth.getUTCMonth(), dayOfBirth.getDate())

//   return check < new Date()
// }

// //console.log(isAdult("2006/04/23"));

// function daysToAdult(birthDate){

//   let dayOfBirth = new Date(birthDate)
//   let currentDate = new Date()
//   let eighteenYearsAgo = new Date()

//   eighteenYearsAgo.setFullYear(currentDate.getFullYear() - 18)

//   const msToAdultHood = dayOfBirth - eighteenYearsAgo
//   const daysToAdult = Math.floor(msToAdultHood / (1000 * 60 * 60 * 24))

//   return daysToAdult
// }

// console.log(daysToAdult("2020/05/25"));

// const user = {
//   name: "John",
//   lastname: "Doe",
//   age: 32,
//   address: {
//     city: "Katowice",
//     street: "Długa"
//   }
// }



// function displayUser({name, age, address: {city, street = "Krótka"} }){
//   console.log(name)
//   console.log(age)
//   console.log(city)
// }

// displayUser(user)

// const people = [{
//   firstName: "John",
//   lastName: "Doe"
// },
// {
//   firstName: "Paul",
//   lastName: "Walker"
// }]

// let additionalProperties = {
//   age: 30,
//   gender: "Male"
// }

// function extendArray(array, additionalProps){
//   const result = array.map(e => {
//     return {
//       ...e,
//       ...additionalProps
//     }
//   } )

//   return result
// }

// console.table(extendArray(people, additionalProperties))

// const json = JSON.stringify(people)
// console.log(json);

// function calculateDiscount(price){
//   if(price >= 200){
//     return price * 0.95
//   }
//   else if( price >= 100){
//     return price * 0.97
//   }
//   else{
//   return price
// }
// }

// console.log(calculateDiscount(10));

// function markExam(points){
//   return points >= 70 ? "Pass" : "Fail"
// }

// console.log(markExam(70));

// function returnBiggerNumber(a, b)
// {
//   return a == b ? "Numbers are even" : a > b ? a : b
// }

// console.log(returnBiggerNumber(74, 77));

// function subjectGradeToText(grade){

//   let text = ""
//   switch (grade){
//     case 1:
//       text = "niedostateczny"
//     break;
//     case 2:
//       text = "dopuszczający"
//     break;
//     case 3:
//       text = "dostateczny"
//     break
//     case 4:
//       text = "dobry"
//     break;
//     case 4:
//       text = "bardzo dobry"
//     break;
//     default:
//       text = "błędna wartośc - nie ma takiej oceny"
//   }

//   return text
// }

// console.log(subjectGradeToText(6));

// function monthToText(number){
//   const month = {
//     1: "Styczeń",
//     2: "Luty",
//     3: "Marzec",
//     4: "Kwiecień",
//     5: "Maj",
//     6: "Czerwiec",
//     7: "Lipiec",
//     8: "Sierpień",
//     9: "Wrzesień",
//     10: "Październik",
//     11: "Listopad",
//     12: "Grudzień"
//   }

//   return month[number] || "Nie ma takiego miesiąca"
// }

// console.log(monthToText(23));


// function mockFilter(arr, predicate){

//   let result = []

//   for (let i = 0; i < arr.length; i++) {

//     const value = arr[i]

//     if (predicate(value))
//       result.push(value)

//   }

//   return result
// }

// function someFunctionMock(arr, predicate){
//   for (const item of arr) {
//     if(predicate(item))
//       return true
//   }

//   return false 
// }

// const numbers = [1, 2, 3, 6, 90]

// console.log(someFunctionMock(numbers, n => n%2 === 0));
// console.log(someFunctionMock(numbers, n => n < 0));

// const people = {
//   "Adam": [23, 55, 53],
//   "John": [53, 59, 73],
//   "Pete": [3, 5, 2],
//   "Tomasz": [64, 75, 56],
// }


// for (const human in people) {
//   let grades = people[human]
//   if (grades.some(g => g > 70)){
//     console.log(human);
//   }
// }

// const t1 = [5, 10, 15, 90]

// function all(arr, predicate) {
//   let i = 0
  
//   while (i < arr.length) {
//     const element = arr[i]

//     if (!predicate(element))
//       return false;

//     i++
//   }
  
//   return true
// }

// console.log(all(t1, t => t > 0));
// console.log(all(t1, t => t % 2 == 0));

try {
  
} catch (error) {
  
}