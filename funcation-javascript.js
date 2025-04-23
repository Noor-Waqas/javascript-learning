console.log("=========================> Well Come to Funcations in javaScript  <=========================");



function addTwoNumber(num1, num2) { // funcation k ander jo value asign krty hai usy parameter khty hai 
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        console.log("Sum is Two number is :",num1 + num2);
    } else {
        console.log(' The value can not add because you are not provide a number plase provide number ');
    }
}
// addTwoNumber(4,7)//jab hum funcation ko call krwaty hai jab us m value pass krty hai wo argument khty hai









//================= return and store result value jab b hum return kry gy hum us ki value ko hum kisi varible me store kr skty hai  ====================

function addTwoValue(num1, num2) { // funcation k ander jo value asign krty hai usy parameter khty hai 
    if (typeof num1 === 'number' && typeof num2 === 'number') {
    //   let result = num1 + num2;
    //   return result
    return num1 + num2 
      console.log("Well Come to"); // ye kabi b execute nhi hoga jab hum koi retrun kr diya hai us k bad us k bad koi kam nhi kry ga funcation
      
    } else {
    console.log(' The value can not add because you are not provide a number plase provide number ');
    }
}

const result = addTwoValue(4,4)
// console.log("result Value : " ,result);//jab hum funcation ko call krwaty hai jab us m value pass krty hai wo argument khty hai



//============================= jab user login ho to koi message show krwana hon to  ==================================

function loginUserMessage (username = "Noor"){ // defauld value b dy skty hai if condication kbi run nhi ho ga 

    // if(username === undefined) // ye gab true hoga tab run hoga statement 
    if(!username) // convert true ko false and false convert in to true 
    {
        console.log("please enter a username");
        return
    }
    else{
        return `Dear ${username} Well Come to Shadwo App `
    }
}


// console.log(loginUserMessage());// jab hum koi value add nhi ki to undefined error a ay ga Q k wo defined nhi howa hai
// console.log(loginUserMessage("Waqas Ahmad"));



//============================= funcation in add shopping cart   ==================================

// function calculateCartPrice (val1 , val2 , ...num1) { // val1 or val2 me kya kya value a e hai val1 me 200, or val2 444 baki rest operator me a ja ay gi value 
//     return num1
// }
// console.log(calculateCartPrice(200,444,655,67));


//=============================  calculateCartPrice is currently just returning the array of values without summing them. To sum all values, you can use the reduce() method. ==================================

function calculateCartPrice(...num1) {
    return num1.reduce((total, current) => total + current, 0);
}
// console.log("Totle Price = ", calculateCartPrice(200, 200, 200, 400)); 






//============================= funcation in adding all price using loop    ==================================

function calculateCartPrice (...num1){
    let total = 0;
    for (let i = 0; i < num1.length; i++) {
        total += num1[i];
    }
    return total;
}
// console.log("Totle Price = ",calculateCartPrice(200,444,655,67,343,4,56,76,7,4));


//============================= Object pass in to  funcation   ==================================\
const product = {
    Item : "Oppo Mobile",
    price : "9000"
}
function handelObect (productAnyItem){
    console.log(` Product name ${productAnyItem.Item} amd proce is : ${productAnyItem.price}`);
}

// handelObect(product)// pass krna comparsary object 


//============================= dreact  Object pass kr skty  hai   ==================================\

// handelObect({
//     Item :"Iphone",
//     price : "1250"
// })


//============================= dreact  Array pass kr skty  hai   ==================================\

const MyDataAray = [200,400,333,444,55]
function returnSecondValue (getArray){
    return getArray[1]

}
// console.log("return Second Value :" ,returnSecondValue(MyDataAray));
console.log("return Second Value :" ,returnSecondValue([22,33,34,543]));


