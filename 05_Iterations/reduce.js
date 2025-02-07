//1.reduce method
const mynums=[1,2,3,4]
// const total=mynums.reduce(function(acc,currval){
//     console.log(`acc : ${acc} and currval  ${currval} `)
//     return acc+currval
// },0)                                //0 -->the number you want to add
// console.log(total)

// 2.reduce with arrow function

// const myNumbers=mynums.reduce( (acc,currval) => acc+currval,2)
// console.log(total) 

//*******************************************************************************************/
//real-time ex:shooping cart
const shoppingCart=[
    {
        itemName:"JS course",
        price:500,   
    },
    {
        itemName:"Mobile Dev course",
        price:1000,
        
    },
    {
        itemName:"web dev course",
        price:1500,
        
    },

]
//to add a functionality to add all the prices of the courses
const reveal = shoppingCart.reduce( (acc,item) => acc+item.price,0

)    // acc is -0 as the initial value ,
     //currvalue -item.rice/item 
console.log(reveal);
