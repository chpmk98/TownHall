
var cookieMinutes = 5;

// This function runs immediately upon opening the page
(function() {
	// This if statement hides the banner if it has already been closed
	if(getCookie("homePagePrompt") === "dismissed") {
		document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	}
}) ();

// Closing the banner keeps it closed for 30 seconds, even if you leave
// the page and return.
document.getElementById("dismissPrompt").onclick = function(){
	document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	var time = new Date();
	time.setTime(time.getTime() + (cookieMinutes*60*1000));
	document.cookie = "homePagePrompt=dismissed; expires="+time.toUTCString();
}

document.getElementById("startFilter").onclick = function(){
	hideAllPosts();
	
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