const passwordBox = document.getElementById('password');
const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smalls = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specials = "!@#$%^&*()-_+=<>/?[]{}";

const allChars = capitals + smalls + numbers + specials;

let passwordLength = 12;

function generatePassword(){
    let password = "";
    password += capitals[Math.floor(Math.random() * capitals.length)];
    password += smalls[Math.floor(Math.random() * smalls.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specials[Math.floor(Math.random() * specials.length)];

    while(password.length < passwordLength){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");       // It's deprecated but I didn't found alternative.
}