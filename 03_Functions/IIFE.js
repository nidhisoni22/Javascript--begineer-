//Immeadiately invoked function expressions(IIFE)
(function chai(){
    console.log('DB connected ');
    
})();
//************************************************************************************************************************* */
//arrow function with iife
( () =>{
    console.log("DB 2 connect");
    
})();
//here when writing an arrow function ,a semicolon is needed why beacuse the invoked funcion have no context where to stop 
// so you need a semi-colon 

( () =>{
    console.log(2+3);
    
})()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//named IIFE
(function chai(){
    console.log("helllo");
    
})();
//parameterized IIFE
((namee) =>{
 console.log(`myself ${namee} here`)
})("nidhi");
