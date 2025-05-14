console.log("=========================> Call And This in javaScript  <=========================");

// call useCase

function SetUsername (username){
    // complex DB Call
this.username = username
console.log("calling...........");

}

function createUser(username,email,password) {
    // SetUsername(username) // uper waly funcation ko used kr k name set  referance diya hai lakin call nhi ho wa 
    // call horha hai lakin refferance hold nhi ho rha us ko hold krny k liye call laga ay gy 
    SetUsername.call(this,username) // apna this used krto ga referance k liye contect pass krny k liye 
    this.email = email
    this.password = password 
}


const user = new createUser("waqas","waqas@gmail.com",12454)
console.log(user);
