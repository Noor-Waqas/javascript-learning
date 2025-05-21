console.log("=================== getter-setter =================");

class user {
    constructor(email,password){
        this.email = email;
        this.password = password
    
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value // set property ko return nhi kr ty hai 
    }



    get password(){
        return `${this._password}noor`
    }
    set password(value){
        this._password = value

    }
}

const userData = new user ("waqas@gmail.com","121asd")
console.log(userData.password);
console.log(userData.email);


