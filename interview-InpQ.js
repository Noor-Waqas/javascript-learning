// Write a pseudocode to sort the array without using any builtin function, it is purely a custom code (0,0,1,1,2,2,3,3,2,4,4,5,5,6,5,6,5)


let array = [0, 0, 1, 1, 2, 2, 3, 3, 2, 4, 4, 5, 5, 6, 5, 6, 5];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}
// console.log("Sorted Array:", array);


// Question 2: Write a pseudocode for the factorial function. A factorial of 5 is 5*4*3*2*1
//============================== using if else =====================================

function factorialRecursive(n) {
 if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

// Example
console.log(factorialRecursive(5)); 

//=============================  using for loop =====================================


function factorial(n) {
//   if (n < 0) {
//     return "negative numbers";
//   }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}


// console.log("Factorial of 5 is:", factorial(6));
//====================================================================================
// Question 3: Write a regular expression to validate email.The answer of the code should be true if the email is valid and false in other cases.
function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
// console.log(isValidEmail("test@example.com"));   // true
// console.log(isValidEmail("invalid-email@"));  


//====================================================================================
// Question 4: Write a pseudocode to remove all zeros from an array  (0, 1, 2, 0, 3, 2, 0, 53, 0, 3, 21):
let myArray = [0, 1, 2, 0, 3, 2, 0, 53, 0, 3, 21];
let result = [];
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] !== 0 )
 {
    result.push(myArray[i]);
  }
}

// console.log("Array without zeros:", result);


//====================================================================================
// Question 5: Write a pseudocode to split even & odd from the array (2,4,5,7,4,3,5,7,8)
// The answer of the code should be even array(2,4,4,8) odd array(5,7.3.5.7)

let arrayOne = [2,4,5,7,4,3,5,7,8];
let evenNumbers = [];
let oddNumbers = [];
for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] % 2 === 0) {
    evenNumbers.push(arrayOne[i]);
  }  else {
    oddNumbers.push(arrayOne[i]);
  }
}
// console.log("Even Numbers:", evenNumbers);
// console.log("Odd Numbers:", oddNumbers);


//=====================================================================================
// Question 6: Write a pseudocode to Reverse string Muhammad Yousaf without any built-in function.
let username = "Muhammad Yousaf";
let Reverse = "";

for (let i = username.length - 1; i >= 0; i--) {
  Reverse += username[i];
}

console.log("Reversed String:", Reverse);