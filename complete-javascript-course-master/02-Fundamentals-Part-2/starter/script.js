'use strict';

/* =========
02.26.2021
 =========*/


//function declaration
/* function calcAge1(birthday){
return 2037 - birthday;
} */

//const age1 = calcAge1(1991);


//function expression
/* const calcAge2 = function(birthday){
    return 2037-birthday;
} */

const calcAge = function (birthday) {
    return 2037 - birthday;
}

const yearsUntilRetirement = function (birthday, firstName) {
    const age = calcAge(birthday);
    const retirement = 65 - age;


if(retirement > 0) {
console.log(`${firstName} retires in ${retirement} years`);
return;
} else {
console.log(`${firstName} has already retired`);
return;}

}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Jonas'));

/* const age2 = calcAge2(1991);
console.log(age1, age2); */

//arrow function
/* let calcAge3 = birthday => 2037-birthday;

let age3=calcAge3(1991);
console.log(age3) ;*/

/*=====================================
calling a function from inside another
function in this case cutFruitPieces function
is being called from FruitProcessor function
            
            Feb 01.2021     
====================================== */

/* function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

const juice = `juice with ${applePieces} piece of apple 
and ${orangePieces} piece of oranges`
return juice;
}

console.log(fruitProcessor(2, 3)); */


        /*====================================
        first arrow function
        to calculate average of 3 elements
        ====================================== */


const calcAverage = (a, b, c) => (a + b + c) / 3;
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);


        /*======================================
        second function combine with
        if statement to check if statement one
        is at least double than statement one
        */
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


/* ====================
        march 07 2021 01.00am
the begining of arrays = new array[]
===================== */

//Add Elements//
//push()
//unshift()
const morefriends = ['michael2', 'steven2', 'peter2']
const friends = ['michael', 'steven', 'peter']
console.log(friends);
console.log(friends.length);
const totalfriends = Array.prototype.push.apply(friends, morefriends);
console.log(totalfriends);
console.log(totalfriends.length);

const newLength = friends.push('jay'); //add at the end of array
console.log(friends);
console.log(newLength);

friends.unshift('jon'); //add at the beginning of array
console.log(friends);

//Remove Elements//
//pop
//shift

friends.pop(); //remove last element of array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift('jon'); //remove the first element of array
console.log(friends);

console.log(friends.indexOf('steven'));
console.log(friends.indexOf('bob'));

friends.push(23);
console.log(friends.includes('steven'));
console.log(friends.includes('bob'));
console.log(friends.includes(23));
console.log(friends.includes('23')); //Reads it as string 23 and not as a number

if(friends.includes('steven')) {

    console.log(`you have a friend called steven`);
}

//Coding challenge #2

let bill = 50;
let tip = 0;

let calctip = function (bill) {
    if(bill > 300) {
        let tip = bill * 0.20;
        console.log(`the tip will be ${tip}`);
    }else if(bill >= 50 || bill <= 300) { 
        let tip = bill * 0.15;
        console.log(`the tip will be ${tip}`);
        //console.log(tip);
        }
}

calctip(400);
calctip(50);
calctip(300);



