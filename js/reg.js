const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const dateOfBirth = document.querySelector('#date');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#password2');
const submit = document.querySelector('#submit');

// span labels
const displayFirstName = document.querySelector('#labelFirstName');
const displayLastName = document.querySelector('#labelLastName');
const displayDate = document.querySelector('#labelDate');
const displayEmail = document.querySelector('#labelEmail');
const displayTelephone = document.querySelector('#labelTelephone');
const displayPassword = document.querySelector('#labelPassword');
const displayPassword2 = document.querySelector('#labelPassword2');


// Event listeners
firstName.addEventListener('blur', validateName);
function validateName(){
	let ufirstName = firstName.value;
	let firstNamePattern = /^[a-z]+$/i;
	if(firstNamePattern.test(ufirstName) == true){
		firstName.style.color="3px solid green";
	}
	else{
		displayFirstName.innerHTML = "invalid name entered";
		displayFirstName.style.color = "red";
	}
}

lastName.addEventListener('blur', lastNameValidation);
function lastNameValidation() {
    let userLastName = lastName.value;
	let lastNamePattern = /^[a-z]+$/i;

	if (lastNamePattern.test(userLastName) == true) {
		lastName.style.border = "2px solid seagreen";
	} else {
		displayLastName.innerHTML = 'Invalid name entered';
        displayLastName.style.color = "red";
	}
}

dateOfBirth.addEventListener('blur', dateofBirthValidation);
function dateofBirthValidation() {
    let userDateOfBirth = dateOfBirth.value;
	let datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/i;

	if (datePattern.test(userDateOfBirth) == true) {
		dateOfBirth.style.border = "2px solid seagreen";
	} else {
		displayDate.innerHTML = 'Invalid date entered';
        displayDate.style.color = "red";
	}
}


email.addEventListener('blur', eValidation);
function eValidation() {
    let userEmail = email.value;
	let emailPattern = /^\w+@\w+\.[a-z]{2,6}$/i;

	if (emailPattern.test(userEmail) == true) {
		email.style.border = "2px solid seagreen";
	} else {
		displayEmail.innerHTML = 'Invalid email entered';
        displayEmail.style.color = "red";
	}
}

tel.addEventListener('blur', telvalidation);
function telvalidation(){
	let phoneUser = tel.value;
	let phonePattern = /[0]\d{10}/i;
	if(phonePattern.test(phoneUser) == true){
		tel.style.color = "2px solid green";
	}
	else{
		displayTelephone.innerHTML = "Invalid phone number";
		displayTelephone.style.color = "red";
	}
}


password.addEventListener('blur', passwordValidation);
function passwordValidation() {
	let userPassword = password.value;	
	let passwordPattern = /[a-z]\d\w+/i;

	if (passwordPattern.test(userPassword) == true) {
		password.style.border = "2px solid seagreen";
	} else {
		displayPassword.innerHTML = 'Invalid password entered';
        displayPassword.style.color = "red";
	}
}
confirmPassword.addEventListener('blur', confirmPasswordValidation);
function confirmPasswordValidation(){
	let confirmUserPassword = confirmPassword.value;
	let userPassword = password.value;
    let confirmPasswordPattern = /[a-zA-Z]\d\w+/i;

    if (confirmPasswordPattern.test(confirmUserPassword) == true) {
		password.style.border = "2px solid seagreen";
	} else if(confirmPassword != userPassword) {
		displayPassword2.innerHTML = 'Password entered does not match';
        displayPassword2.style.color = "red";
	}
}


