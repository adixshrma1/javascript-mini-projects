let nameError = document.getElementById("name-err");
let contactError = document.getElementById("contact-err");
let emailError = document.getElementById("email-err");
let messageError = document.getElementById("message-err");
let submitError = document.getElementById("submit-err");

function validateName() {
    let name = document.getElementById('name').value;

    if (name == "") {
        nameError.innerHTML = "Name is required."
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Full Name is required."
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateContact(){
    let contact = document.getElementById('contact').value; 
    if(contact.length == 0){
        contactError.innerHTML='Contact number is required';
        return false;
    }
    if(contact.length != 10){
        contactError.innerHTML = 'It must contain 10 digits.'
        return false;
    }
    if(!contact.match(/^[0-9]{10}/)){
        contactError.innerHTML = "Please enter numbers only";
        return false;
    }
    
    contactError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}


function validateEmail(){
    let email = document.getElementById('email').value;
    if(email.length == 0){
        emailError.innerHTML = "Email is Required";
        return false;
    }
    if(!email.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)){
        emailError.innerHTML = "Please enter a valid email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateMsg(){
    let message = document.getElementById('message').value;
    if(message.length == 0){
        messageError.innerHTML = `Message is required, minimum 30 characters long.`;
        return false;
    }
    if(message.length < 30){
        messageError.innerHTML = `${30 - message.length} characters left`;
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateSubmit(){
    if(!validateName() || !validateContact() || !validateEmail() || !validateMsg()){
        submitError.innerHTML = "Please fix errors";
        return false;
    }
}