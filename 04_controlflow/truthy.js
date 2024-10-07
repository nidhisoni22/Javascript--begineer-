const userEmail =[] 
if(userEmail){ 
    console.log("truthy values")
}
else{
    console.log("not truee");
    
}
//falsy values -->Few values that are considered false
// 0,-0, BigInt-0n ,"" ,null,undefined,NaN

//truthy values :when you pretend that the value is true but there some specific values to be considerd true
// "0","false"," " , array-->[],  object -->{} , fucntion(){}


//how to check if array is empty 
// if(userEmail.length === 0){
//     console.log("it is empty");
    
// }

// how to check for objects
const myobj={}
if(Object.keys(myobj).length === 0){
console.log("empty obbj");

}