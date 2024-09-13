// Date- is a object
// let myDate= new Date()  // instance of Date
// console.log(myDate); // this object wouldn't be readble 
// // so stringify it
// console.log(myDate.toDateString()); // there exist many methods
// console.log(myDate.toLocaleString());

// let mynewDate =new Date(2024,8,13) // months start from 0 -so jan is equal =0
// console.log(mynewDate.toDateString());

// you can also add more parameter inyour dates -like hour,minutes ,seconds
// let myDate =new Date(2024,8,13,12,52,8)
// console.log(myDate.toLocaleString());



//  let mycreateDate=new Date("09-13-2024");
// //  console.log(mycreateDate.toLocaleString());
 
//  // timestamp
// let mytimestamp = Date.now();
// console.log(mytimestamp);       
// console.log(mycreateDate.getTime());       

let newDate=new Date();
// console.log(newDate.getMonth()); // you can always get the date by the methods

newDate.toLocaleString('default' ,{
    weekday:"long",
    
})
console.log(newDate);


