console.log("=========================> Logic Flow in javaScript  <=========================");
let temerature = 41;
if(temerature === 55){
    // console.log("less the 50");   
}else{
    // console.log("temperature grater then 50");
    
}

const balance = 1000
if (balance > 500) {
    // console.log("less then 1000")
    
}
//===============================================================================================
console.log("=========================> logic login or debitCard ho to allaow using if else condication  <=========================");
const userLogin = true ;
const AtmDabitCard = false;

if (userLogin && AtmDabitCard) {
    // console.log("Allow to buy a Product ");
}else{
    // console.log("please provide all condentional ");
    
}

const loginEmail = false;
const googleLogin = false

if (loginEmail || googleLogin) {
    // console.log("wel come to my website ")
}else{
    // console.log("please login given condication");
    
}
//========================================== user raiting me switch used kr skty hai =============================
console.log("=========================> switch using condication  <=========================");
const month = 5;
switch (month) {
    case 1:
        console.log("january");
        
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Janu");
        break;

    default:
        console.log("default Case match");
        break;
}
//===============================================================================================
//========False value like => false , 0. -0, null , undefined , NaN and GigInt ==================
//========True  value like => true , "0" , "false", " " , [] empty array  , { } empty object and funcation(){} empty funcation =======

console.log("=========================> logic with true and false   <=========================");
//  const userEmail = " waqas@gmail.com ";
 const userEmail = []; // check array 

 if (userEmail) {
    // console.log('get user email ');
 }else{
    // console.log("dont,s have user email");
    
 }

 //=============================Array ko check krna hooooempty hai k nhi us ki data type array hai to us ki o property me  =======================================
 if (userEmail.length === 0) {
    // console.log("Array Is Empty ");
 }
 else{
    // console.log("Array is not Empty");
    
 }

  //=============================Object  ko check krna hoooo empty hai k nhi us ki data type array hai to us ki o property me  =====================================

  const emptyObject = {}
  if (Object.keys(emptyObject).length === 0) {
    // console.log("Object Is Empty ");

  }


//============================= Nullish Coalescing Operator (??): null ya undefined  ===================
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20




// console.log(val1);

//============================= Terniary Operator  =====================================
// condition ? true : flase // centext \

const icePrice = 10;
icePrice <=80 ? console.log("less Then 80") : console.log("more then 80");

