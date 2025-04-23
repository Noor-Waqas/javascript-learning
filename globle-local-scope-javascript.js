console.log("=========================> Well Come to Globle and Local Scope in Javascript  <=========================");


//=== A closure is when a function “remembers” the variables from its lexical scope, even when the function is executed outside that scope =======

function one(){ 
    const userName = "Noor Ahmad"
    function two(){
        const myWeb = "Shadow App"
        console.log(userName); // chiled funcation parent funcation k variable to access kr skty hai lakin parent chiled k variable ko nhi access kr skty hai is ko hi closure
    }
    // console.log(myWeb);
    two()
    
}
// one()









//============================== concept hoisting in javaScript =================================
console.log(addOne(6)); 
function addOne (num){
    return num + 1
}


// console.log(addTwo(18));
// variable k through funcation banaty hai or agr us ko phaly access kry to wo undefined error dy ga arry funcation me or simple funcation me nhi dy ga error is ko hosting khty hai  
const  addTwo = function (num){
    return num + 2
}
