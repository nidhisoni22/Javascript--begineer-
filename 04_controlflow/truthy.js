// const userEmail =[] 
// if(userEmail){ 
//     console.log("truthy values")
// }
// else{
//     console.log("not truee");
    
// }
//falsy values -->Few values that are considered false
// 0,-0, BigInt-0n ,"" ,null,undefined,NaN

//truthy values :when you pretend that the value is true but there some specific values to be considerd true
// "0","false"," " , array-->[],  object -->{} , fucntion(){}


//how to check if array is empty 
// if(userEmail.length === 0){
//     console.log("it is empty");
    
// }

// how to check for objects
// const myobj={}
// if(Object.keys(myobj).length === 0){
// console.log("empty obbj");

// }

// Nullish coalesing operator(??) : null undefined
let val1;
//val1= 5 ?? 10
// val1 =null ?? 10
// val1=undefined ?? 10
// val1=null ?? undefined
// val2=undefined ?? null
// clue1=null ?? 14
// console.log(val1);
// console.log(val2);
// console.log(clue1);


//ternary operator is different from the nullish operator
//ternary operator is --> ? 
//nullish operator is --> ?? 
let price=90
price >= 70 ? console.log("it is less than  ") : console.log("nah it is more");

