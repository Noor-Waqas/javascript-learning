console.log("============== Object Base Getter Setter ================");
const User = {
    _email : "wali@gmail.com", // _ means private value 
    _password : "12231",
    get email (){
         return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },

     get password (){
         return ` ${this._password}waq123`
    },
    set password(value){
        this._password = value
    }
}

const userData = Object.create(User)
console.log(userData.email);
console.log(userData.password);
