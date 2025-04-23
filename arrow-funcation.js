console.log("=========================> Well Come to Arrow Funcation in Javascript  <=========================");

//============================== this key word current contect k bary me  bata tha hai =================================

const user = {
    userName : "Waqas Ahmad",
    price:"999",
    welComeMesasage: function(){
        console.log(`${this.userName} , Well to website`);

        
        // console.log(this);//object k ander funcation bana hoo  this current abject hai ye object k ander kam krta hai laikin funcation nhi kam krta hai 
    }
    
}
// agr browser k ander hai to wo window object ho ga this 
// user.welComeMesasage()
// console.log(this);// jab hum node inverment k ander hai to this empty object show kry ga 



//============================== this key word in Simple Funcation =================================
function hellow () {
    const username = "this used in funcation"
    // console.log(this.username);// show error undefined

    console.log("Simple Funcation This Keyword : ",this);
    
}
// hellow()

//============================== this key word in Arrow Funcation =================================

const arrowFuncation = ( ) =>{
    let username = "waqas"
    console.log("In Arrow Funcation This Keyword : ",this); // arrow funcation me empty object show hota hai
    
}
// arrowFuncation()


//============================== simple way  Arrow Funcation =================================
// const addTwo = (num1,num2) => num1 + num2
const addTwo = (num1,num2) => (num1 + num2) // is me return nhi lagaty hai agr hum {} brakit laga ay gy to return likhy gy ye technique react me bht used a ay ga 

    // const addTwo = (num1,num2) => ({username : "waqqs "}) is tarah ojbect return krty hai {} brakit k bagair hum object ko return nhi kr skty hai


// console.log(addTwo(4,4));



//============================== Immediately Invoked Funcation  data base funcation hoo execute krna hoo =================================

(function (){
    console.log("DB Connected"); //globle scope k polution sy problem hoti hai khi bar globle scope k variable ko hata ny k liye IIfe funsed krty hai 
    
})();

//============================== Immediately Invoked Funcation in arrow funcation  pass parameter =================================
((name) => {
    console.log(`user ${name} data base connected.....`); 
})("Waqas Ahmad");