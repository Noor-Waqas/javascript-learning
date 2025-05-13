console.log("=========================> Object Oriented in javaScript  <=========================");
// OOP 
// Why Use OOP



// OOp Four Pilar 
// Abstraction => detail Heid kr lena example featch 
// Encapsulation => Data wrap kr diya jo jo access krny dena or koi data access nhi krny dena hai 
// Inheritance => 
// Polymorphism  =>

    function User (username,loginCount,isLogin){
        this.username = username,
        this.loginCount = loginCount,
        this.isLogin = isLogin
        this.greating = function (){
            console.log(`Well Come Dear ${this.username} Can Enjoy This Site `);
   
        }
        //return this // return krny ka zarorat nhi hoti hai wasy b value return ho rha hota hai
    }
    // const userOne = User("Waqas",12,true)
    // // agr hum new keyword nhi laga ay gy to ye value ko over ride kr dy ga or agr hum new key word laga ay gy to ye object ki new copy bana dy ga plaha deta b rhy ga is sy 
    const userOne =new User("Waqas",12,true)
    // const userTwo = User("Ahmad",123,false) // new ka mtlb new instence data hai 
    const userTwo =new User("Ahmad",123,false) 
    // importent tip jab me hum new key word laga ty hai to sab sy phlay empty object create hota hai
    // new key word ki wjha sy value pass ho ja ay ay gi
    // this create howa us me add ho ja ay gy 



    console.log(userOne)
    userOne.greating()
    console.log(userTwo);

    