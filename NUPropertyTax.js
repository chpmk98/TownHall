/*
	This JS is for replying on the NU Property Tax Community Forum thread
*/

var cookieMinutes = 10; // Determines how long the banner stays dismissed

inputField = document.getElementsByTagName("input")[0];

inputField.addEventListener("keyup", function(event) {

	event.preventDefault();

	if(event.keyCode === 13) {
		document.getElementById("yourTextBody").innerHTML = inputField.value;
		document.getElementById("yourReply").style.display = "initial";
		inputField.value = "";
	}
});

// This function runs immediately upon opening the page
(function() {
	console.log("signedIn cookie value is: " + getCookie("signedIn"));

	// Modifies the headbar depending on who's signed in
	if(getCookie("signedIn") === "mayor") {
		document.getElementById("TtYCO").style.display = "none";
		document.getElementById("signIn").style.display = "none";
		document.getElementById("MaCA").style.display = "initial";
		document.getElementById("mayorProfile").style.display = "initial";
		document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	} else if(getCookie("signedIn") === "rebmeistro") {
		document.getElementById("signIn").style.display = "none";
		document.getElementById("myInterests").style.display = "initial";
		document.getElementById("rebProfile").style.display = "initial";
		document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	} else {
		// Hides the reply boxes if not signed in
		for(var i = 0; i < document.getElementsByTagName("input").length; i++) {
			document.getElementsByTagName("input")[i].style.display = "none";
		}
		
		document.getElementsByClassName("signInPrompt")[0].style.display = "initial";
		document.getElementById("evanstonLoc").style.display = "initial";
		document.getElementById("curCity").style.display = "none";
	}

	// If the prompt has already been dismissed, do not show it
	if(getCookie("discussionPrompt") === "dismissed") {
		document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	}
}) ();

// Closing the banner keeps it closed for 10 minutes, even if you leave
// the page and return.
document.getElementById("dismissPrompt").onclick = function() {
	document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	var time = new Date();
	time.setTime(time.getTime() + (cookieMinutes*60*1000));
	document.cookie = "discussionPrompt=dismissed; expires="+time.toUTCString();
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