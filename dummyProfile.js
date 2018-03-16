
document.getElementById("signIn").addEventListener("click", signOut);

// This function runs immediately upon opening the page
(function() {
	console.log("signedIn cookie value is: " + getCookie("signedIn"));

	document.getElementById("MaCA").style.display = "initial";
	document.getElementById("myInterests").style.display = "initial";
}) ();

function signOut() {
	if(confirm("Are you sure you want to sign out?")) {
		document.cookie = "signedIn=none";
		document.location.href = "homePage.html";
	}
}

// Takes a cookie label and returns the value stored in the cookie
// If there is no such cookie, returns ""
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}