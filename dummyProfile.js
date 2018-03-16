
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


var counter = 0;

function exitChat(){

  document.getElementById("chatScreen").style.display = "none";
}


//when chat button is clicked, the chat drop down appears
function displayChats() {
  var elem = document.getElementById("chatDropDown");
  if(counter % 2 == 0){ //if it's even it means the dropdown is not being shown
    elem.setAttribute("style","display: block;");
  }
  else{
    elem.setAttribute("style", "display: none;");
  }
  counter = counter + 1;
}

function selectChat() {
  document.getElementById("chatScreen").style.display = "block";
}

function sendMessage() {
  var thisMessage = document.getElementById("chat5");
   document.getElementById('chat5').innerHTML = document.getElementById('chatInput').value;
   thisMessage.setAttribute("style", "display: block;");
   document.getElementById("chatInput").style.display = "none";
  
}
