//Arrow functions and this keyword
const user={
    username:"hitesh",
    price:599,
     welcomeMessage:function(){ 
        //console.log(`${this.username},Welcome to website`)          //this keyword -->helps u get referene of your object


    }

}
// user.welcomeMessage()
// user.username="Nidhi"
// user.welcomeMessage()
//************************************************************************************************************************** */
//Arrow function
const chai = () => {
    let username="absss"
    console.log(this.username)
}
chai() //you cant access this keyword inside an ARROW Function
 
// Arrow function Basic functin

// const addtwo=(num1,num2) => {
//     return num1 + num2
// }
// console.log(addtwo(2,6))


//implict return
const addtwo=