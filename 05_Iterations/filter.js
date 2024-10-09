// Assigning a value to the loop 

// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item) =>{
//     console.log(item);
    
// })
// console.log(values);

  // you cant assign any value to the loop and expect to get the output -->it doesnt return anything

   const myNums=[1,2,3,4,5,6,7,8,9,10]
//   const value=myNums.filter((num) => num >4 )
//   console.log(value)
   
// if you {} in filter ex: ->you have to use the return keyword
// const value=myNums.filter((num) => {
//     return num >4 
// })
// console.log(value)

// real-time use of filter
const books=[
    {title:"1",genre:'Fiction',publish:1996},
    {title:"2",genre:'Science',publish:1969},
    {title:"3",genre:'Thriller',publish:1986},
    {title:"4",genre:'Romance',publish:1975},
    {title:"5",genre:'Non-Fiction',publish:1966},
];

 //const userbooks=books.filter((book) =>book.publish > 1995 )

/******************************************************************/ 
//using return keyword -->imp we are using the scope and {} so we need to add the return keyword
const users=books.filter( (bk) =>{ return bk.genre === "Romance"})
//console.log(users);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// when we have to use multiple conditions
const userbooks=books.filter((book) =>book.publish > 1905 && book.genre ==='Romance' )
console.log(userbooks);
 