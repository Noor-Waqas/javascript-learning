console.log("============== How To Change Math.PI Value in Object ====================");

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);

const user = {
    name : "laptop Hp",
    price : 958,
    isAvailable : true,
    orderLaptop : function(){
        console.log("thanks for order .................");
        
    }

}

console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user, "name",{
    writable: false,
    enumerable: false,
})
// console.log(Object.getOwnPropertyDescriptor(user,"name"));

for (const [key , Value] of Object.entries(user)) {
//typeof value agr nhi hai funcation k 
    if (typeof Value !== "function") {
        
        console.log(`${key} ${Value}`);
    }
    
}