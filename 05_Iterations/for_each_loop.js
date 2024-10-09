//for each
const coding=["js","cpp","java","javascript"]
// coding.forEach(  function (item){
//     console.log(item);
// }) //prints the element in the array 


// using for-each in arrow function
// coding.forEach( (item) => {
//     console.log(item);
    
// })

// you can also add a function in the foreach function
function printme(item){
   // console.log(item)
}

coding.forEach(printme) // only the reference of the function 

/****************************************************************************************************************/
//You can also print the element,index and array 
coding.forEach((item,index,array) =>{
    //console.log(item,index,array);

})
//----------------------------------------------------------------------------------------------------------------------
// Array inside an object
const myCoding=[
    {
    languageName:"Javascipt",
    languageFilename:"js"
    },
    {
        languageName:"Java",
        languageFilename:"java"
    
    },
    {
        languageName:"python",
        languageFilename:"py"
    
    },

 ]
 myCoding.forEach((item) =>{
    console.log(item.languageName)
 })