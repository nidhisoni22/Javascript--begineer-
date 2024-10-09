const myNumbers=[1,2,3,4,5,6,7,8,9]

// myNumbers.forEach((item) =>{
//     console.log(item+10)
// })
// using map -->why map? because it returns the value but you cant store it in the variable

// const result= myNumbers.map((item) => item+10)
// console.log(result);

//********************************************************************************************* */
//using more than one method:METHOD CHAINING
const ans=myNumbers.map((num) => num*10)    // the value is calculated here
                    .map((num) => num + 1)  //then passed here 
                    .filter((num) => num >=30) // and then the filter is applied -->and stored in ans 
console.log(ans)

