let score = "70";
let ValueNumver = Number(score)// convert in number 
// console.log(typeof ValueNumver);

// "33" ==> 33 convert number 
// "33abc" ==> conversion easly type is not a number 
// trure ==> 1 conversion ; false ==> 0


//================================================================================
//==                            Converting Boolean                              ==
//================================================================================
let isLoggedIn = "";
// let isLoggedIn = ""; false
// let isLoggedIn = "Waqas"; true
let BooleanIsLoggi = Boolean(isLoggedIn)
// console.table([BooleanIsLoggi])



//================================================================================
//==                            Converting Number In to String                  ==
//================================================================================
let AnyNumber = 33;
let convetNumverToString = String(AnyNumber)
// console.log( "Number converting Into String ==> :",typeof convetNumverToString);






//================================================================================
//==                            Operqation javaScript                           ==
//================================================================================

console.log("1"+2);   //12
console.log(2+"1");   //21
console.log("1"+2+2); //122
console.log(1+2+"3"); //33

//================================================================================
//==                         Prefix and postfix value                           ==
//================================================================================
 let gameCounter = 100;
//  gameCounter++
 ++gameCounter
console.table([gameCounter])
// Prefix  ==> phaly value increament hoti hai   
let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);

// postfix  ==> bad me value increament hoti hai   
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);



//================================================================================
//==                         comparision  Any number and Value                  ==
//================================================================================

// console.log( 2 > 1); // grater then 1
// console.log( 2 >= 1); // grater then or equal to 1
// console.log( 2 > 1 ); // less then 1
// console.log( 2 == 1 ); // equal 
// console.log( 2 != 1);  // not equal 

// inportant 
console.log("<=================Inportance avoid this type comparision ================>");
console.log( "2" > 1);
console.log( "02" > 1);
console.log( null > 0); // 0 se bara hai valye false 
console.log( null == 0); // equal hai nhi false
console.log( null >= 0); // grater then equal hai





