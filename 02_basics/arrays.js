// Arrays -is object in javascript .They are resizeble .
const myArr= [0,1,2,3,4,5] 
// arrays create shallow copies. (interview question ) any changes made in the arrays are reflected on the original ones.
// Declaring an Array 
//method -1 
const arr1=["nidh","jash","aviii"];
// console.log(arr1);
//method -2 
//using keyword
// const arr2=new Array("nidzz","avni");
// console.log(arr2);

// Arrays methods.

myArr.push(6);  // adds  the element in array
// console.log(myArr);
// myArr.pop()
// console.log(myArr);
myArr.unshift(0) // adds the element in the start of the array
// console.log(myArr); 
//shift removes the element from the start
myArr.shift()
// console.log(myArr)


// a method called includes-return boolean value to check if the element is present or not
// console.log(myArr.includes(9));

// indexof-returns the indexof the number
// console.log(myArr.indexOf(6));   // ----returns the index of the elemnet

// JOIN IN ARRAYS -MERGES THE ELEMENTS OF  ARRAY  BUT IN STRING TYPE.
const arrray=myArr.join()
// console.log(arrray);

// Slice and Splice ---interview questions 
// slice -doesnt include range and dont ,manupliate the orginal data.
//splice -it includs the ranges but it also manupliates the original data (check this eg)
console.log("A " , myArr); //original array


const myn1=myArr.slice(1,3)
console.log("B " , myArr);
console.log(myn1);

const myn2=myArr.splice(1,3);
console.log("C  ", myArr) // manupliates the original arrays
console.log(myn2);












