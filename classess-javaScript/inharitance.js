class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username) // inharitance propertites
        this.email = email;
        this,password = password;
    }

    addCoures(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}


const setValueUser = new Teacher("noor","nor@gmail.com",112242)
setValueUser.addCoures()


const addNewUser = new User("Wiki Ahmad")
addNewUser.logMe()

console.log(setValueUser instanceof Teacher);
