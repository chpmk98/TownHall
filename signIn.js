document.getElementById("signupbtn").addEventListener("click", login);

function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username==="mayor" && password==="evanston"){
    loginMayor();
  } else if (username==="rebmeistro" && password=="EECS330ismyJAM!"){
    loginReb();
  } else {
    failLogin();
  }
}

function loginMayor(){
  document.signInForm.action = "https://chpmk98.github.io/dummyProfile.html"
  document.cookie="signedIn=mayor";
  alert("Signed in as: " + getCookie("signedIn"));
}

function loginReb(){
  document.signInForm.action = "https://chpmk98.github.io/myProfile.html"
  document.cookie="signedIn=rebmeistro";
  alert("Signed in as: " + getCookie("signedIn"));
}

function failLogin(){
  alert("Incorrect Username or Password");
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