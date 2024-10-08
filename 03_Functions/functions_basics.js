// // Functions


// // function add2num(num1,num2){  // these are parameters
// //     console.log(num1+num2)
// // }
// // add2num(3,4) //these arguments

// //another way
// function mul(n1,n2){
//     return n1*n2;

// }
// const result=mul(2,3)
// console.log("Result :" , result)
// //1
// console.log(mul(2,5))
// //2
 
// function loggedIn(username){
//     if(username === undefined){
//         console.log("Please enter a username")
//     }
//     return `${username}   just logged in`;
// }
// console.log(loggedIn("nidhi"));
// // if u add a default value 

// function loggedIn(username = "sam"){   // it won't go in the if loop at all

//     if(username === undefined){
//         console.log("Please enter a username")
//     }
//     return `${username}   just logged in`;
//}
// console.log(loggedIn());  //check the output for both the function

//************************************************************************************************************************* */
//for an shopping website 
function calculateCartPrice(val1,val2,...num1){  // rest operator
  return val1,val2,num1
}
// console.log(calculateCartPrice(200,233,980,8900))
//++++++++++++++++++++++++  --->Interview question 
// here in the example:val1->200,   val2->233 , num1->980,8900 so y only [980,8900] is printed

//object
// const user={
//   username:"nidhi",
//   price:"166"
// }
// function handleobject(anyobject){  //javascript dosnt know the object so y anyobject
//     //console.log(`Username is ${anyobject.username}  and the price is ${anyobject.price}`);
    
// }
// handleobject({
//   username:"nidhi",
//   price:23
// })    // pass an object 

// handleobject(user)  // passing the real object name which u have created
//------------------------------------------------------------------------------------------------------------------------------
//Arrays
// const myNewArray=[200,300,400,500] // new array 
// function return2value(getArray){
//   return getArray[3]
// } 
// console.log(return2value(myNewArray));
// console.log(return2value([100,200,400,800]))
 

//rest operator
function getvalue(nu1,n2,...num1){
  return num1;
}
// console.log(getvalue(200,55,44,99))   // here nu1-200 ,     n2-55,   num1-[44,99]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const user={
  username :"Hitesh",
  price:199
                  }

// function handleobject(object){
//   console.log(`Username is ${object.username} an price is ${object.price}`)
// }
// //handleobject(user)// call the function

// //or you can pass the function as this also
// handleobject({
//   username:"nidhi",
//   price:299
//})
//---------------------------------------------------------------------------------------------------------------------------------
//array with functions
const myArray=[10,50,40,70,6]
function  returnvalue(array){
  return array[4]
}
console.log(returnvalue([11,55,22,44,66,44]))