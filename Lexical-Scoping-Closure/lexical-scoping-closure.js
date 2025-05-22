console.log("================= Lexical Scoping Closure ===================");
let a = 4
let b = 3
a = a + b
b = a - b
a = a - b 
//console.log(`A value is: ${a} and B value is : ${b}`);

// Lexical Scoping scop  me inner funcation outer funcation k variable ka access milta hai 
// function init() {
//   let name = "Mozilla"; 
//   function displayName() {
//     console.log(name); 
//   }

//   displayName();
// }
// init();





// Closure me agr koi funcation return krty hai function return k sat pora laxical scope b return ho rha hota hai
function makeFunc() {
  const name = "Waqas Ahmad";
  function displayName() {
    console.log(name);
  }
  return displayName;// referance me return kr diya hai 
}

const myFunc = makeFunc();
// myFunc();



