// genarate a random color 
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
let intervalId;
const startChangingColor = function(){
   
    function changeBgColor(){
        const bgColor = randomColor();
        const textColor = randomColor();

        document.body.style.backgroundColor = bgColor

        let colorDisplay = document.querySelector("#colorChange")
        colorDisplay.style.color = textColor;
        colorDisplay.innerHTML = `Background: ${bgColor} | Text: ${textColor}`;
    }

    if (!intervalId) {  //agr intervalId hai is nhi to
        intervalId = setInterval(changeBgColor, 2000);
    }
}

// console.log(randomColor());

document.querySelector("#start").addEventListener("click",()=>{
    startChangingColor()
})

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}


document.querySelector("#stop").addEventListener("click",()=>{
    stopChangingColor()
})
