console.log("=========================> For each loop javaScript zeyada Array pe for each loop used krty hai  <=========================");
const programming = ["javaScript","Ruby","Java","python"]

//============> ForEach loop kuch b return nhi krta hai <===============
//===========> Using Simple Funcation or coll back funcation ka name nhi hota hai <================
programming.forEach(function (item){
    // console.log(` Using Simple Funcation :  ${item}`);
    
})

//===========> Using Arrow Funcation <================
programming.forEach((item)=>{
    // console.log( ` Using Arrow Funcation : ${item} `);
    
})



//===========> funcation pass in argument in foreach loop  <================
function printMe(itme) {
    // console.log(itme);
}
programming.forEach(printMe) // provide referance is hare not executed the funcation

//=================================================================================

programming.forEach((key, index , array)=>{
    // console.log(key,index,array);
    
})

//======================= Array of object looping  =========================================

const userFile = [
    {
        userId:12,
        username:"wasqas",
        email:"waqas@gmail.com"
    },
    {
        userId:212,
        username:"Sonia",
        email:"sonia@gmail.com"
    },
    {
        userId:3212,
        username:"Lucky",
        email:"lucky@gmail.com"
    }
]
userFile.forEach((item)=>{
    console.log(`User Id : ${item.userId}  UserName : ${item.username}  UserEmail is :${item.email}` );
    
})