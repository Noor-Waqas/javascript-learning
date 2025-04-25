console.log("=========================> using reduse method in JavaScript  using in shopping cart <=========================");

// const array1 = [1, 2, 3, 4]; // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);



//================================================================================================================
const myNum = [1,2,3]
const totalNum = myNum.reduce((acc,carrval)=>{
    // console.log(`acc value ${acc} and Carrval Value : ${carrval}`);
    return acc + carrval
},0)
// console.log(totalNum);


//================> Add Shopping Cart first time batani prti hai accumulator value  <==================
// study link => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const products = [
    { productName: "Wireless Mouse", price: 50},
    { productName: "Bluetooth Headphones", price: 100 },
    { productName: "USB-C Charger", price: 150 },
    { productName: "Gaming Keyboard", price: 200 },
    { productName: "4K Monitor", price: 250 },
    { productName: "Smartphone Stand", price: 300 },
    { productName: "Webcam", price: 350 },
    { productName: "Portable SSD 1TB", price: 400 },
    { productName: "Laptop Cooling Pad", price: 450 },
    { productName: "Ergonomic Office Chair", price: 500 }
  ];
  
  const totalprice = products.reduce((acc,item)=>{
    return acc + item.price
  },0)
  console.log(`The Totle Price is : ${totalprice}`);
  