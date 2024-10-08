
// Number
// const score=400;
//  console.log((score));  // you cant get methods in this because score is a number but isnt defined as the datatype 
// const balance =new Number(100);  // you can create a object of Number as well 
// console.log(balance);
 
// console.log(balance.toString()); // converts a number to string

// console.log(balance.toFixed(2)); // gives a precision value for a given value
// const num=112.787;
// console.log(num.toPrecision(4)); // this gives precision on the numbers combined to both before (.) and after (.)
// there are many methods related to Number


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Math
// console.log(Math);
// // //abs
// console.log(Math.abs(-4)); 
// console.log(Math.round(4.6)); //round
// console.log(Math.ceil(4.2));  // ceil-chooses top value
// console.log(Math.floor(4.4)); // chooses the lower value
// console.log(Math.sqrt(64));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//MAth RAndom
// console.log(Math.random()); // this gives you a number randomly betwwen 0-1 including 0 and 1

const min=1;
const max=6; // when you need a specific range eg-when playing ludo you need numbers between 1-6
// Catch here is when you generate a random number it can be zero as well so we do  

// we are multiplying a 10 because we can shift a number to right and plus if it is zero so dont get zero as output.
// console.log(Math.floor(Math.random() *10 )+1);  // so plus +1 if zero occurs 

console.log(Math.floor(Math.random() * (max-min +1 ) ) + min );
