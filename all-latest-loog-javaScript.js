console.log("=========================> For in Loop and for of loop in javaScript  <=========================");

//=================== > For Of Loop  String and Array kisi pe b laga skty hai <======================
const Array = [1,2,3,4,5,6,7,8]
for (const number of Array) {
    // console.log(number);
    
}
//=================== > For Of Loop in string <======================
let username = " Sonia Ahmad "
for (const name of username) {
    // console.log(`My name is ${name}`);
    
}

//=================== > Map in JavaScript loop in for of  <======================
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
//============> it is unique in the Map's collection <===============
const map = new Map()
map.set("pk","Pakistan")
map.set("USA","United States Of America")
map.set("Fr","France")
// console.log(map);

for (const [key, value ] of map) {
    // console.log(key , ": => ", value);
    
}

//=================== >  for of in Object not working in Object  <======================

//=================== >   for in loop in  Object  <======================
let obj = {
    name :" waqas",
    gmail:"Wali@gmail.com"
}
// for (const [key, value ] of obj) {
//     console.log(key , ": => ", value);
// }
for (const key in obj) {
//    console.log(key);
// console.log(`keys : ${key} and value is :  ${obj[key]}`);

    
}

//=================== >   for in loop in  Array   <======================

let programing = ["javaScript","robi","paython","Java"]
for (const index in programing) {
    // console.log(`Index : ${index} and value is :  ${programing[index]}`);
    
}