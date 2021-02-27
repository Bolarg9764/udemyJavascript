


/*======================================
items will be disable by exercise number
=======================================*/

                    /*=============
                    exercise one
                    =============*/
 
 /* MarkWeight / (MarkHeight * MarkHeight);
 JonWeight / (JonHeight * JonHeight);
 
 let MarkBMI = 100;
 let JonBMI = 99; 


 if (MarkBMI > JonBMI) {
     console.log(`Mark BMI ${MarkBMI} is higher than Jhon's ${JonBMI}`);
    } else { 
     console.log("Jhon's BMI is higher than Mark's!");
    }
 */
    
     
    // FEB 20TH 2021 SATURDAY 22:21PM

                    /*=============
                    exercise two
                    =============*/

/* let hasdriverlicense = true;
let hasgoodvision = true;
let istired = true;
let shoulddrive =  hasdriverlicense && hasgoodvision;

console.log(hasdriverlicense && hasgoodvision);
console.log(hasdriverlicense || hasgoodvision);
console.log(!hasdriverlicense);
console.log(hasdriverlicense && hasgoodvision && istired);




if(hasdriverlicense && hasgoodvision && !istired){
    console.log('sarah is able to drive');  
    }else {
    console.log('someone else should drive...');
    } */

                    /*=============
                    exercise three
                    =============*/

/* let DolphinsScore = Math.round((97+100+101) / 3);
let KoalasScore = Math.round((120+91+98) / 3);
let MinimunScore = 100;

console.log(DolphinsScore, KoalasScore);

if(DolphinsScore > KoalasScore && DolphinsScore >= MinimunScore ){
    console.log(`DolphinsScore is ${DolphinsScore} and thefore win a trophy`);
        } else if(KoalasScore > DolphinsScore && KoalasScore >= MinimunScore){
                console.log(`KoalasScore is ${KoalasScore} and also won a trophy`);
                } else {
                    console.log(`it's an even score`);
                        if( (KoalasScore || DolphinsScore) < MinimunScore) {
                            console.log(`No trophy, minimum required was 100 points, KoalasScore is ${KoalasScore}, DolphinsScore ${DolphinsScore}`);
                                }
                            }
 */

 /* =======================
 introduction of functions 
   ====================== */

   
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
// Test 1
let scoreDolphins = calcAverage(197, 100, 101);
let scoreKoalas = calcAverage(100, 91, 98);
console.log(scoreDolphins, scoreKoalas);
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
//checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


 
let bill = 430;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15: bill * 0.2;
console.log(`the bill was $${bill}, the tip was $${tip}, and the total is $${bill + tip}`);


console.timeLog();

        //      TYPE CONVERSION   //
     let inputYear = "1991";
     console.log(Number(inputYear)+18);
     console.log(Number(inputYear), inputYear);
     
     console.log(Number('Jonas'));
     console.log(typeof NaN);
     
     console.log(String(23), 23);
     console.log(typeof 23);


     //      TYPE COERSION   //

        /*  ALL OPERATORS WILL WORK
            BUT ADDITION OPERATOR 
            WHICH WILL PUT THE NUMBER
            NEXT TO THE ENTIRE MATH OPERATION  
            10-3-3+5 WILL BE 4 AND WILL PUT THE 5 NEXT TO 4
            TO MAKE IT EQUAL 45 WHICH IS INCORRECT */

        console.log('im 23 years old');
        console.log('23' - '10' - 3);
        //console.clear();


    let favourite = Number(prompt("what is your fav number"));
    console.log(favourite);
    console.log(typeof favourite);

    if(favourite === 23) {
        console.log("cool 23 is an amazing number");    
    } else if(favourite === 7) {
        console.log("7 is also an amazing number");
        } else{
            console.log("number is not 23 or 7");
            }

