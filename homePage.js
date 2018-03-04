
var cookieMinutes = 0.5;

(function() {
	if(getCookie("homePagePrompt") === "dismissed") {
		document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	}
}) ();

document.getElementById("dismissPrompt").onclick = function(){
	document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	var time = new Date();
	time.setTime(time.getTime() + (cookieMinutes*60*1000));
	document.cookie = "homePagePrompt=dismissed; expires="+time.toUTCString();
}

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