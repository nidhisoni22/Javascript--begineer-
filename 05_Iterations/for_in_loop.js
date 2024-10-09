//for in 
const myobject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    j:"java"

}
// for (const key in myobject) {
//     console.log(key)
// }

// for(const key in myobject){
//     console.log(`${key} is the short form of ${myobject[key]}`);
// }

 //for in loop in arrays :
 const program=["js","py","c++","c"]
 
 for (const key in program) {
    console.log(program[key])   //  -->program[key]
      // as when you print only keys it gives you the index of the program
    
 }
// Map is not iterable -->so no for in loop wont work in map

