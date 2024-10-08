// console.log(2 > 1);
// console.log('2' > 1); // default conversion of '2' string to number while comparing

// these comparsion and conversion should be avoided  |
//      like with null                                |
//          & undefined                             \   /
//                                                   \ /
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);  //  here ,we need to know that <,>,<= or >= work differently than the equality operator(==) 

// === strictly checks both datatype and number both.while equaltity check or comparsion  
console.log("2" === 2);
console.log("2" == 2 )  // see the difference btw the outpput
