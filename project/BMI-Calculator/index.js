const form = document.querySelector("form")
// this usecase will give you empty value 
// const weight = parseInt(document.querySelector("#weight").value)
form.addEventListener("submit", function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value) // jo value mily gi wo string hoga is liye parseInt laga ay gy 
    const weight = parseInt(document.querySelector("#weight").value)
    const result =document.querySelector("#results")
    if (height === "" || height <= 0 || isNaN(height)) {
        result.style.color = "red"
         result.innerHTML = `Please enter a valid height ${height}`
    }

    else if (weight === "" || weight <= 0 || isNaN(weight)) {
        result.style.color = "red"
        result.innerHTML = `Please enter a valid weight ${weight}`
   }
   else {
    // results show in hare
      const bmi =   (weight / ((height * height)/10000) ).toFixed(2)
       let message =  result.innerHTML = `<span> Your BMI is ${bmi} </span> <br>`
       if (bmi < 18.6) {
         message.style.color = "red"
        message += `Under Weight Less than 18.6 `;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        message.style.color = "green"
        message += `Normal Range 18.6 - 24.9 `;
    } else {
        message.style.color = "red"
        message += `Overweight Greater than 24.9`;
    }
    result.innerHTML = message;
}
})