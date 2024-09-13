let inputBox = document.getElementById("dob");
inputBox.max = new Date().toISOString().split("T")[0];
let result = document.getElementById('result');

function calculateAge(){
    // my logic
    let birthDate = new Date(inputBox.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() +1;
    let y1 = birthDate.getFullYear();

    let currentDate = new Date();

    let d2 = currentDate.getDate();
    let m2 = currentDate.getMonth() +1;
    let y2 = currentDate.getFullYear();

    let days, months, years;
    years = y2 - y1;

    if(m2 >= m1) months = m2 - m1;
    else{
        years--;
        months = 12 + m2 - m1;
    }

    if(d2 >= d1) days = d2 - d1;
    else{
        months--;
        days = getDaysInMonth() + d2 - d1;
    }

    if(months < 0){
        years--;
        months = 11;
    }

    function getDaysInMonth(){
        return new Date(years, months, 0).getDate();
    }

    result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days old.`
}