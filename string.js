console.log("========================= Well Come String =========================");
let name = "Waqas";
let repoAccount = 1233;
// console.log(` Hellow my name is ${name}, amd my repo account ${repoAccount}`);
let newString = name.substring(0,2)
// console.log(newString);

let trimString = "    waqas ahmad    ";
// console.log(trimString.trim());


let replaceStringURL = "http://waqas123.com"
// console.log(replaceStringURL.replace("123","@gmail"));
// console.log(replaceStringURL.includes("waqas"));

const otherNumber = 1238.899;
// console.log(otherNumber.toPrecision(4));


let hundreds = 10000000000000000000;
// console.log(hundreds.toLocaleString());




//================================================================================
//==                         Math In JavaScript                                 ==
//================================================================================


console.log("===========================  Math In JavaScript START  ====================== ");



console.log("===========================  Using round or floor amd abs method    ====================== ");

console.log("abs value : ", Math.abs(-4));// nagative value converting value in positive value
let scoreNumber = 123.94
console.log("Round valye : ", Math.round(scoreNumber));// valye round 
console.log("Floor valye :" , Math.floor(scoreNumber));// nechy wali value ly ga mean loest value ly ga


console.log("===========================  Using Min or Max  and random method     ====================== ");
let minValue = [3,4,6,8,2,3,4]
console.log( "Minimun vamye : " ,Math.min(...minValue)); // finde minimun value in array 
console.log("Maximun Value : ", Math.max(...minValue)); // finde maximun value in array 

console.log("Random genarate Value : ",( Math.random()*10) + 1);





// inportance age humy 10 sy uper chahiye value to hum asy use kry gy 
let min = 10;
let max = 20;
console.log("Using this mothed : ", Math.floor(Math.random() * (max -min + 1))+ min); // 1 add krny sy 1 se 9 tak value dy ga 













