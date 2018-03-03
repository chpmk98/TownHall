function submitForm() {
	var tracker = 0; //if tracker is not equal to zero, don't submit form
	if (document.getElementById("username").value == '') {
		tracker = tracker + 1;
	}
	if (document.getElementById("password").value == '') {
		tracker = tracker + 1;
	}
	if (document.getElementById("passwordConfirm").value == '') {
		tracker = tracker + 1;
	}
	if (document.getElementById("zipcode1").value == '') {
		tracker = tracker + 1;
	}
	if (document.getElementById("zipcode2").value == '') {
		tracker = tracker + 1;
	}
	if (document.getElementById("zipcode3").value == '') {
		tracker = tracker + 1;
	}

	if (tracker == 0) {
		popUpSuccess()
	}
	else {
		popUpFail()
	}
}


function popUpSuccess() {
	alert("Profile was successfully created")
	location = "homePage.html"
}

function popUpFail() {
	alert("Please Fill Out All Fields")
}


var password = document.getElementById("password");
var confirm_password = document.getElementById("passwordConfirm");

function validatePassword() {
	if (password.value != passwordConfirm.value) {
		passwordConfirm.setCustomValidity("Passwords Don't Match");
	} else {
		passwordConfirm.setCustomValidity('');
	}
}

password.onchange = validatePassword;
passwordConfirm.onkeyup = validatePassword;