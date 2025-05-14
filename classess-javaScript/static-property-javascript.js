class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static craeteId(){ 
        
        return `${Math.floor(Math.random()*10 + 1)}`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const userValue = new User("Nori")

const addTeacher = new Teacher("teacher1","teacher1@gmail.com")
console.log(addTeacher);
console.log(addTeacher.logMe());

// console.log(userValue.craeteId());
