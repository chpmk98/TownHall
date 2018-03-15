document.getElementById("create_account").onchange = function () {
	var password = document.getElementById("psw");
	var repeat_password = document.getElementById("psw-repeat");
	if (password.value != repeat_password.value) {
		repeat_password.setCustomValidity("Passwords don't match.");
	} else {
		repeat_password.setCustomValidity('');
	}
}
