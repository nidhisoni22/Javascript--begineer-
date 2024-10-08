// for 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 just got printed");
//     }
//     console.log(element);
    
// } // for with if

// for loop within loop
// for (let i = 0; i < 10; i++) {
//     console.log(`print the value of i ${i}`);
    
//   for(let j=0;j<10;j++){
//     console.log(i + "*"+ j +'='+ i*j )
//   }
    
// }
//for with arrays
// let myarray=["flash","superman","ironman","thor"]
// for(let i=0; i <myarray.length ; i++){
//   const element=myarray[i];
//   //console.log(element);
  
//}
// special keyword
// break and continue
for (let i = 1; i <= 20 ; i++) {
  const element = i;
  if(i == 5){
  console.log("5 detected")
    continue;
  }
  
  console.log(element);
  
}