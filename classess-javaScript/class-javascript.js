console.log("=========================> Classess in javaScript  <=========================");

class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abs`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const user = new User("Noor Ahmad","noor@gmail.com",121313)
console.log(user);
console.log(user.encryptPassword());
console.log(user.changeUsername());


