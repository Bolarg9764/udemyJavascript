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

/* const calcAge = function (birthday) {
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
 */
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


/* const calcAverage = (a, b, c) => (a + b + c) / 3;
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
 */

        /*======================================
        second function combine with
        if statement to check if statement one
        is at least double than statement one
        */
/* const checkWinner = function (avgDolphins, avgKoalas) {
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
checkWinner(scoreDolphins, scoreKoalas); */


/* ====================
        march 07 2021 01.00am
the begining of arrays = new array[]
===================== */

//Add Elements//
//push()
//unshift()
/* const morefriends = ['michael2', 'steven2', 'peter2']
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
} */

//Coding challenge #2

// let bill = 50;
// let tip = 0;

let calctip = function(bill) {
    if(bill > 300) {
        return bill * 0.20;
          }else if(bill >= 50 || bill <= 300) { 
            return bill * 0.15;
            }
    }
    
    let bill = [125, 555, 44];
    let tip = [calctip(bill[0]), calctip(bill[1]), calctip(bill[2])];
    let total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
    
      for (let index = 0; index < total.length; index++) {
        console.log(`the bill is $${bill[index]} + tip $${tip[index]} for a total of $${total[index]}`);
        }
      console.log(bill, tip, total);
    

      /*const calcTip = function (bill) {
        return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
      }
      // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
      
       const bills = [125, 555, 44];
      const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
      const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
      
      console.log(bills, tips, totals); */

            /*========================
              Introduction to Objects 
            March 14th 2021 04.48am 
            =========================*/

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'], //array value
  hasdriverlicense: false, //boolean value
  /* calcAge: function() {
    return 2037 - this.birthYear; //function value
  } */
  calcAge: function() {
this.age = 2037 - this.birthYear;
return this.age;  //using `this` keyword to access a value inside same array
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he ${this.hasdriverlicense ? " has a" : "does not have"} a driver license`
  },
};

//another way to solve but with if statements

/* if(jonas.hasdriverlicense == true) {
  console.log(`${jonas.firstName} is ${jonas.lastName} ${jonas.job}, and has a driver license`);
  } else{
    console.log(`${jonas.firstName} is ${jonas.lastName} ${jonas.job}, and does not have a driver license`);
  } */

jonas.location = 'portugal';
jonas['twitter']='@jonasschedtman';
console.log(jonas.lastName, jonas.age);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

console.log(jonas.calcAge()); //output 2037 - 1991


console.log(jonas.getSummary());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!
 Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

let Mark = {
  fullName: 'Mark Miller',
  MassInKG: 78,
  heightInMts: 1.69, 
  };

let Jon = {
  fullName: 'Jon smith',
  MassInKG: 92,
  heightInMts: 1.95,
  };

let calcBMI = (mass, height) => {
 return mass / (height * height); 
}

let MarkBMI = Math.round(calcBMI(Mark.MassInKG, Mark.heightInMts));
let JonBMI = Math.round(calcBMI(Jon.MassInKG, Jon.heightInMts));

if(JonBMI > MarkBMI) {
  console.log(`${Jon.fullName}'s BMI (${JonBMI}) is higher than ${Mark.fullName}'s BMI (${MarkBMI}) `);
   } else {
        console.log(` ${Mark.fullName}'s BMI (${MarkBMI}) is higher than ${Jon.fullName}'s BMI (${JonBMI}) `);
      }

console.log(MarkBMI);
console.log(JonBMI);
console.log(Math.round(calcBMI(Mark.MassInKG, Mark.heightInMts)));
console.log(Math.round(calcBMI(Jon.MassInKG, Jon.heightInMts)));

