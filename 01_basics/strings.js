//you can denote strings by '' or " "
const name="Nidhi";
const age='22'
// console.log(name + " " + age + " "  + "SSIPMT");

// string interpolation using bacticks `` better way as it allows u to add more function to the strings
// console.log(`hola my name is ${name} and age is ${age}`);

//you can also declare strings with the object method // you can access the string's key pair and also its methods
// const game=new String("ningi");
// console.log(game.charAt(2)); 
//substring-slices a string
// //slice -also accepts the negative value to slice your variables;
// let neww="hello";
// console.log(neww.slice(-5,5));
// const form=" nidh  i  "
// console.log(form);
// console.log(form.trim());  // removes the whitespaces 

//method for url
const url="https:nidhi%20soni";
console.log(url.replace('%20','-'))



