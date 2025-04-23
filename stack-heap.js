//================================================================================
// ============================>  stack Memory ====================================

//== stack Memory (primitive type means vlaue type ) copy milta hai data ka    ===
//=========> String , Number , Boolearn, null, undefined, Symbol , Bigint <=======
//================================================================================

let fullName= "Waqas Ahmad";
let atherName = fullName;
atherName = "noor"
// console.log(atherName);








//=================================================================================================================================
// ===============================================>  Heap Memory ==================================================================
//== Heap Memory (Non primitive type means referance type )koi b data change kry to us ka original data b change ho jata hai    ===
//==========================================> Array , Object , Funcations <========================================================
//=================================================================================================================================



let userOne = {
    name:"waqas",
    email:"waqas@gmail",

}

let userTwo = userOne;
userTwo.email ="Noor@gmail.com"

console.log("UserOne email ======> : " ,userOne.email);

console.log("UserTwo email ======> : ",userTwo.email); // heap me referance ki wajha sy original value b chage ho jati hai

 