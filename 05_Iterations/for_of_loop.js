// for of
// in array
// const arr=[1,2,3,4]
// for (const val of arr) {
//     console.log(val)
    
//}
// in a string
// const greeting="hello world"
// for (const greet of greeting) {
//     console.log(greet);
    
    
// }
// Maps --> do not allow duplicate values in it 
const map= new Map()
map.set("IN","india")
map.set("USA","america")
map.set("IN","india")

// console.log(map) //-->it is a object 

// If you want to get keys of the map 
for(const [key,value] of map){
    console.log(key ,':-' ,value )
    
}
// for of loop in object-->do not work for objects

const myobject={
    'game1':'Shoot game',
    'game':'Spiderman'

}
for(const game of myobject){
    console.log(key ,':-' ,value);
    
}
