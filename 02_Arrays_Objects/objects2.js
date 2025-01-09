// //singleton

// // const tinderuser=new Object() // singleton object
// const tinderUser={}  // non-singleton object         [ ]--- >interview purposes

// tinderUser.id="123";
// tinderUser.name="Sma";
// // console.log(tinderUser);

// const regularUser ={
//     email:"one@gmail.com",
//     fullname:{
//         usernamefullname:"nidhi",
//         experience:{
//             a:"TATA",
//             b:"Accneture"
//         }
//     }
// }

// // console.log(regularUser.fullname.experience);

// const ob1={1:"a" ,2:"b"}
// const ob2={3:"c",4:"d"}   
// // const ob3=Object.assign({},ob1,ob2)  // one way to merge the values

// const b={...ob1,...ob2} // spread operator new and latest
// // console.log(ob3);
// // console.log(b);

// const arr=[        //object inside an array
    
//     {         
//         id:1,
//         email:"abc@gmail.com"
//     }
// ]
// console.log(arr[0].email);


// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))  // calculatees all the values in the objects

//to check wheather a property exists or not 

// console.log(
//     tinderUser.hasOwnProperty('id')); // to check wheather a specific property exists or not


//Object Destructuring

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstrctor:"Hitesh"

}
const{courseInstrctor} = course
console.log(courseInstrctor); // used in react -this is called object destructuring 
 
//API
//it is in json file-where json is also a a object 
//this what a json looks like {
//     user:"abs",
//     course:"js",
//     price: "free of cost"
// //}