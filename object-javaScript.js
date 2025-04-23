console.log("=========================> Well Come to Object in javaScript  <=========================");
const newUser = new Object() // singlw tun object hai
const mySym = Symbol("key1")


const user = {
    firstName :"Muhammd Waqas",
    lastName  : "Noor Ahmad",
    "full name " : "Muhammad Waqas Ahamd ",
    age : 24,
    email : "waqas@gmail.com",
    isLogin: false,
    lastLoginDay : ["mmonday","saturday"],
    [mySym]:"myKey1",

    
}
//================== add funcation in object =============================================
user.greeting = function(){
    console.log("well come to javaScript.............");
}
user.greetingTwo = function(){
    console.log(`hellow javaScript User ${this.firstName}`);// same object ko rafferance krna hooo to us me jitni b property hai wo mil ja ay gi
    
}
// console.log(user.greeting);// funcation return back 
// console.log(user.greeting());
console.log(user.greetingTwo());



//====================================== change object value =================================================

// console.log(user.email);
// console.log(user["full name "])//square notations 
// console.log(user[mySym]);


user.email="ahmad@gmail.com";//change value
// console.log(user.email);
// console.log(user);

//=================== Object Combaining ===================
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

let obj4 = Object.assign({},obj1,obj2,obj3)//copy all enumerable awn property ya object return modify object and this is target of object {} im used in this feild
// alter native use this alwasy 
const mainObj = {...obj1,...obj2,...obj3}
// console.log("Two Object are Combaining is : ", obj4);
// console.log("Two Object are Combaining  with dot notations  : ", mainObj);

//=========================== Data Base is Jab Data a Ay ga array of object ================================

const newUserData = [
    {
      id:1,
      email:"Hr@gmail.com"  
    },
    {
        id:2,
        email:"ahmad@gmail.com"  
    },
     {
        id:3,
        email:"Ali@gmail.com"  
    },
    {
        id:4,
        email:"Hoor@gmail.com"  
     }
]

// console.log(Object.keys(obj1));// key nikaal k hum is me loop laga skty hai
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));
// console.log(obj1.hasOwnProperty("email"));//is name ki property hai k nhi 



//=========================== De structure in object   ================================

const course = {
    courseName: "javaScript",
    price : "1842",
    courseInstructure : "Noor Ahmad",
}
const { courseInstructure : teacher } = course; // name change krna hoooooooooooooooo
// console.log(teacher);


// const navbar = ({teacher}) =>{} // used in react De structure
// navbar(teacher="Noor Agmad")



//=========================== api in object value recived in json form  ======================================
const api = "https://randomuser.me/api/"
fetch(api)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // console.log('Random User:', data.results[0]);
    const email = data.results[0].email;
    console.log('Email:', email);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
