
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
