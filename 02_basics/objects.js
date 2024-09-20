// obejct literal

//symbol
const mysymbol=Symbol("123")


const user ={
    "Userno":"1",
    [mysymbol]:"123",
    myname:"Nidhi",
    age:22,
    location:"Bangalore"
}
// } //define object

// //accessing object
// console.log(user.myname);
// console.log(user["Userno"]); // how you would access the " " 
// console.log(user[mysymbol]);

// Object.freeze(user);   //freeze()-->dosent allow any changes to be made on your object
// user.myname="NIDHI";
// console.log(user);

//adding function with objects;
user.greeting=function(){
    console.log(`hello user`)
}

user.greeting1=function(){
    console.log(`hello ${this.myname}`)
}

console.log(user.greeting()); // try it without the ()
console.log(user.greeting1());

