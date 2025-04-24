console.log("=========================> Filter or Map And Reduse in JavaScript   <=========================");
const programming = ["javaScript","Ruby","Java","python"]
//============> ForEach loop kuch b return nhi krta hai <===============
// const data = programming.forEach((item)=>{
//     console.log(item);
    
// })
// console.log(data);


//============================ using Filter method============================================
//==================> Returns the elements of an array that meet the condition specified in a callback function. <=====================
//============================> After condication value return krta hai <============================================

const userNumber = [1,2,3,4,5,6,7,8,9,10]
// const newDats = userNumber.filter( (num) => num > 5)
const newDats = userNumber.filter( (num) => {
    return num > 5
})

// console.log(newDats);



//=====================================> Logic using With forEach Loop <======================================
const userAllNumber = [1,2,3,4,5,6,7,8,9,10]
const userValue =[]
userAllNumber.forEach((num)=>{
    if (num > 5) {
        userValue.push(num)
    }
})
// console.log(userValue);



//======================================> Books Data Array of object <===============================================================
const books = [
    {
      id: 1,
      title: "The Silent Forest",
      author: "Emily Hart",
      genre: "Mystery",
      publishedYear: 2018,
      price: 12.99
    },
    {
      id: 2,
      title: "Stars Beyond Time",
      author: "Emily Hart",
      genre: "Science Fiction",
      publishedYear: 2020,
      price: 15.50
    },
    {
      id: 3,
      title: "Whispers of the Past",
      author: "Olivia Moore",
      genre: "Historical Fiction",
      publishedYear: 2015,
      price: 10.00
    },
    {
      id: 4,
      title: "Code of Shadows",
      author: "Noah Reed",
      genre: "Thriller",
      publishedYear: 2022,
      price: 18.75
    },
    {
      id: 5,
      title: "The Hidden Garden",
      author: "Sophia Lane",
      genre: "Romance",
      publishedYear: 2019,
      price: 9.99
    },
    {
      id: 6,
      title: "Digital Dreams",
      author: "James Carter",
      genre: "Cyberpunk",
      publishedYear: 2023,
      price: 20.00
    },
    {
      id: 7,
      title: "The Last Empire",
      author: "Ava Brooks",
      genre: "Fantasy",
      publishedYear: 2016,
      price: 14.45
    },
    {
      id: 8,
      title: "Journey Through Ice",
      author: "Mason Clarke",
      genre: "Adventure",
      publishedYear: 2021,
      price: 11.25
    }
  ];
 
//   const  userBooks = books.filter((item)=>item.author === "Emily Hart") 
  const  userBooks = books.filter((item)=>item.publishedYear < 2020) 
  console.log(userBooks);
  
  
