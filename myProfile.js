
document.getElementById("signIn").addEventListener("click", signOut);

// This function runs immediately upon opening the page
(function() {
	console.log("signedIn cookie value is: " + getCookie("signedIn"));

	document.getElementById("TtYCO").style.display = "initial";
	document.getElementById("myInterests").style.display = "initial";
}) ();

function signOut() {
	if(confirm("Are you sure you want to sign out?")) {
		document.cookie = "signedIn=none";
		document.location.href = "homePage.html";
	}
}