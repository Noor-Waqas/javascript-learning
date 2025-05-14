console.log("=========================> Prototype Object in javaScript  <=========================");

//  A new object is created: The new keyword initiates the creation of a new JavaScript object.
// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
// video Link : https://www.youtube.com/watch?v=uMI5cNeHTOc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=43
function createUser(username,score){
    this.username = username,
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}
const chai =new createUser("chai",25)
const tea =new createUser("teat",312)

// chai.printMe()


//prototype section start in hare 

let myName = "Waqas Ahamd     ";
// console.log(myName.trueLength);// create method remove extra space 


let myHeros = ["thor","spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPOwer:function(){
        console.log(`Spider Power is ${this.spiderman}`);
    }
}
Array.prototype.heyWaqas =  function(){
    // console.log("Well Come Dear Waqas Ahmad");
    
}

myHeros.heyWaqas()
// heroPower.heyWaqas()

// prototype is hum lick krty hai 
// Inheritance propertites ko used krta 

const User = {
    name:"waqas",
    gmail:"waqas@gmail.com"
}

const Teacher = {
    makeVide : true
}

const TeachingSuport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : TeachingSuport
}
Teacher.__proto__ = User



// Modren Syntex 
Object.setPrototypeOf(TeachingSuport,Teacher)







String.prototype.trueLength =  function (){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
    
    
}
