// console.log("=========================> Promise in javaScript  <=========================");

const promiseOne = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Asyns task is complete");
        resolve()
        
    },1000)
})
promiseOne.then((res)=>{
    console.log("promise consumeds");
    
})


new Promise ((res,rej)=>{
    setTimeout(() => {
       console.log("Async task Two ");
        res()
    }, 10000);
}).then((res)=>{
  console.log("complete B",res);
  
})

// data base connections parameter pass krna 
const promiseThree = new Promise((res,rej)=>{
    setTimeout(()=>{
        res({username:"Muhammad Waqas",email:"waqas@gmail.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
    
})



// web resquest k sat 
const promiseFore = new Promise((res,rej)=>{
    setTimeout(()=>{
       let erro = false;
       if (!erro) { // agar error nhi hai error k sat catch b laga ay gy
        res({username:"ahmad",password:"12345"})
       }else{
        rej("database Connection error :")
       }
    },1000)
})

promiseFore.then((user)=>{
    console.log(user);
    return user.username
}).then((user)=>{
    console.log(user);
    
}).catch((error)=>{
    console.log(error);
    
}).finally((res)=>{
    console.log("finaly result complete ",res);
    
})

const promiseFive = new Promise((res,rej)=>{
    setTimeout(()=>{
        let erro = true;
       if (!erro) { // agar error nhi hai error k sat catch b laga ay gy
        res({username:"javaScript",password:"12345"})
       }else{
        rej("javaScript is not working :")
       }
    },1000)
})


