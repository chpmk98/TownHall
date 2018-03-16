
// This function runs immediately upon opening the page
(function() {
  console.log("signedIn cookie value is: " + getCookie("signedIn"));

  // Modifies the headbar depending on who's signed in
  if(getCookie("signedIn") === "mayor") {
    document.getElementById("TtYCO").style.display = "none";
    document.getElementById("signIn").style.display = "none";
    document.getElementById("MaCA").style.display = "initial";
    document.getElementById("myInterests").style.display = "initial";
    document.getElementById("mayorProfile").style.display = "initial";
    document.getElementsByClassName("signInPrompt")[0].style.display = "none";
  } else if(getCookie("signedIn") === "rebmeistro") {
    document.getElementById("signIn").style.display = "none";
    document.getElementById("myInterests").style.display = "initial";
    document.getElementById("rebProfile").style.display = "initial";
    document.getElementsByClassName("signInPrompt")[0].style.display = "none";
  }
}) ();

function submitForm() {
  var tracker = 0; //if tracker is not equal to zero, don't submit form
  if(document.getElementById("talkFirstName").value == '') {
    tracker = tracker + 1;
  }
  if(document.getElementById("talkLastName").value == '') {
    tracker = tracker + 1;
  }
  if(document.getElementById("talkStreetAddress").value == '') {
    tracker = tracker + 1;
  }
  if(document.getElementById("talkTopic").value == "default") {
    tracker = tracker + 1;
  }
  if(document.getElementById("talkSubject").value == '') {
    tracker = tracker + 1;
  }
  if(document.getElementById("talkMessageBox").value == '') {
    tracker = tracker + 1;
  }
  if(tracker == 0){
    popUpSuccess()
  }
  else {
    popUpFail()
  }
}


function popUpSuccess() {
  alert("Thank You For Your Message! You Will Hear Back From Us Shortly!")
  location = "homePage.html"
}

function popUpFail() {
  alert("Please Fill Out All Fields")
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