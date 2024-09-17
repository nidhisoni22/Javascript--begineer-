const heros=["ranbir","ranveer","avinash","hritik"]
const herione=["alia","deepika","sharadha","kriti"]


// console.log(heros); //takes the array itself as input and adds it

//concat func
//joins two arrays and stores it in a new array
let members=heros.concat(herione)
// console.log(members);
// Spread Operator(...)-allows you to merge as many arrays u want

const memt=[...herione,...heros];
// console.log(memt);

// anotheer function===> Flat()
const arrr=[1,2,3,[4,5,6],[9,7,8]];  //it puts all the elements in one new single array
// console.log(arrr.flat(Infinity));  // ----->Infinity is the depth of the array

// to check if the given input is array or not 
// console.log(Array.isArray([1,23,45,89]));            //--->returns true
//converts to array-->function
//console.log(Array.from("nidhi"));             // -->converst string to array

//interview 
//console.log(Array.from({name:"nidhi"})) // -->object cant be converted 


let score = 100
let score1=200
let score3 =300
console.log(Array.of(score,score1,score3))