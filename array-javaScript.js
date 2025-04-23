console.log("=========================> Well Come to Array in javaScript  <=========================");
// arry value access in indexing 
// aray create shallow copy banata hai share same raferance 
// Deep Copy do not share the same referance point 


//============================================================================================================================
                    console.log("Array create shallow :===> copy means same raferance....... ");

//================================>      shallow Copy In JavaScript   <=======================================================
//==                                                                                                                        ==
//==> jab b koi data khi copy krty hai to in ka original data ka rafferance  diya jata hai jo changing data k sat original  ==
//==                                           data b change ho jata hai                                                    ==
//==                                                                                                                        ==
//==========================================> Array , Object , Funcations <===================================================
//============================================================================================================================

console.log(" Deep Copy :===> do not share the same referance point........");


//============================================================================================================================

//================================>      Deep Copy In JavaScript   <==========================================================
//==                                                                                                                        ==
//==> jab b koi data khi copy krty hai to in ka original data ka rafferance nhi diya jata hai copy kr k diya jata hai alag  ==
//==                             jo b changinging hoti hai wo us ki copy me hoti hai only                                   ==
//==                                                                                                                        ==
//=====================> String , Number , Boolearn, null, undefined, Symbol , Bigint <=======================================
//============================================================================================================================

let myArray = [1,2,3,4,3,24,4]

// arry me join laga ay to to string me convert kr dy ga 
myArray.unshift(220)// add value in start 
myArray.shift(220) // remove value from start 
// myArray.indexOf(23) // agr valaue na mily to -1 return krta hai
// console.log("Using unshift method",myArray);
// console.log("Using shift method ",myArray);
// console.log("Using indexOf method ",myArray.indexOf(12));


console.log("==========> Inportant Tips With slice method <===============");
const mySliceArray = myArray.slice(1,3)// 3 range include in ho gi do not change original data in array 
console.log("Original Array With Using Slice method >===============> Array Valye : ",myArray);
console.log("Using slice method : " ,mySliceArray);


console.log("==========> Inportant Tips With Splice method <===============");
const mySpliceArray = myArray.splice(1,3)
console.log(" Original Array With Using Splice method >===============>  Array Valye : ",myArray);
console.log("Using splice method : " ,mySliceArray); //is me last range b include hoti hai or  jo hum arange dy thy hai wo part nikaal k original data b chage kr dt ta hai 



const marvalHero = ["Super Man","waqas Hero"];
const otherHero = ["pk hero","national herro"];
// const allHerro = marvalHero.concat(otherHero)
const allHerro = [...marvalHero, ...otherHero]// using alter nate sprid operator 

console.log("using method concat : ", allHerro)


console.log("===================> Inportant Interview Question <====================== ")
const multiArray =  [ 123,1,3,4,[12,445,13,[312,5,6]],[22,12,43,41,] ,[1221,31,41]]
const newArryMultiArry = multiArray.flat(Infinity)
console.log("using method flat : ", newArryMultiArry);

