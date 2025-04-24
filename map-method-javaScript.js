console.log("=========================> using map method in JavaScript   <=========================");
//============================> using Map method <============================================\

const userNumber = [1,2,3,4,5,6,7,8,9,10] // add 10 number every element
// const newDataNumber = userNumber.map((num)=>{
//     return num + 10;
// })
// console.log(newDataNumber);



// const newDataNumber = userNumber.map((num)=>{
//    if (num > 5 ) {
//     return num + 10;
//    }
// })
// console.log(newDataNumber);

//============================> Chaining map Method JavaScript <============================================\

const Data  = [1,2,3,4,5,6,7,8,9,10] // update value pass ho next method 
const newData = Data.map((num)=>num * 10)
.map((num)=> num + 2)
.filter((num)=>{
    return num >= 40 
})
console.log(newData);
