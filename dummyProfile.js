
document.getElementById("signIn").addEventListener("click", signOut);

function signOut() {
	if(confirm("Are you sure you want to sign out?")) {
		document.cookie = "signedIn=none";
		document.location.href = "homepage.html";
	}
}