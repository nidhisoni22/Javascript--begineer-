// Primitive and Non-primitive
// Javascript is dynamically typed language 
//1.primitive - the primitive dataypes are call by value i,e.a copy is created for changes
/* 7categories
-String
-Boolean
-Number
-Undefined
-Null
-Symbol
-BigInt

2.(NON-PRIMITIVE)Reference-
-Arrays - written in square brackets
-Objectes
-Functions
examples of SYMBOL


*/
// const Id=Symbol("123");
// const Id1=Symbol("123")
// console.log(Id === Id1); // returns false

// const heros=["ironman","shaktiman"]; // array
//  const score = undefined;
// let obj ={        //object
//     name:"nidhi",
//     age : "22",

//  }
//  const myfunc=function demo() {
//     console.log("hello world");
    
//  }

//  // typeof Function
   
//  console.log(typeof score);
 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack-stores all the primitive datatypes variables
//and heap -stores all the data of the non-primitive datatypes
let myname="nidhisoni;"
let newname=myname;
newname="NIDHI";
// console.log(newname);
// console.log(myname);

let userOne={
   email:"user@gmail.com",
   upi:"user@ybl"
};
let userTwo=userOne;
userTwo.email="nidhi@yahoo.com";
console.log(userOne.email);
console.log(userTwo.email);
