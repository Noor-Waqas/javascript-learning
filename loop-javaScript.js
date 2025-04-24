console.log("=========================> Loop in javaScript  <=========================");

//================================== For Loop ==================================================
for (let i = 0; i <= 10; i++) {
    const element = i;
   if (element == 5) {
    // console.log("5 is the best number in this seriuser");
    
   }
    // console.log(element);
}


//================================== For Loop table print ==================================================
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value ${i}`);
    
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner Loop value ${j} and inner value ${i}`);

        // console.log( i + "*" + j + ' + ' + i*j);
        
     
    }
    
}
//================================== For Loop in Array  ==================================================

const myArray = ['flash', 'batman','superman ']
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}


//================================== For Loop  keywork break and continue  ==================================================

// for (let i = 1; i < 20; i++) {
//     // console.log(`Value of i is ${i}`);
//     if (i == 5) {
//         console.log(" Detected is 5");
//         break
//     }
//         console.log(`Value of i is ${i}`);
    
// }

for (let i = 1; i < 20; i++) {
    // console.log(`Value of i is ${i}`);
    if (i == 5) {
        // console.log(" Detected is 5");
        continue // ek bar k liye ignor kr deta hai 
    }
        // console.log(`Value of i is ${i}`);
    
}

//================================== While and do while Loop  ==================================================

let index = 0
while (index <= 10 ) {
    // console.log(`Value of index is ${index}`);
    index = index + 2;
}

//================================== While loop using array   ==================================================
const Herrow = ['flash', 'batman','superman ']
let arry = 0;
while (arry < Herrow.length ) {
    // console.log(`Value is Array is ${Herrow[arry]}`);
    arry = arry + 1
}



//========================= do While loop me phaly kam hoga its means ek bar chalta hai or  condication end pe check ho gi  ====================

let score = 0;
do {
    console.log(`Score is ${score}`);
    score++ 
    
} while (score <= 10);