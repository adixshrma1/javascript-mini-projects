let inputBox = document.getElementById("dob");
inputBox.max = new Date().toISOString().split("T")[0];
let result = document.getElementById('result');

function calculateAge(){
    // my logic
    let birthDate = new Date(inputBox.value);
    let currentDate = new Date();
    let milliSec = currentDate - birthDate;
    let yearValue = milliSec/(1000*60*60*24*365)

    let years = Math.floor(yearValue)
    let months = Math.floor((yearValue - years)*12);
    let days = Math.floor(((yearValue - years)*12 - months)*30);

    result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days old.`
}