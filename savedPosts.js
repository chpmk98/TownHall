
var cookieMinutes = 5;
var allPosts = document.getElementsByClassName("aPost");
var filterChecks = document.getElementsByClassName("container");

// This function runs immediately upon opening the page
(function() {
	// This if statement hides the banner if it has already been closed
	if(getCookie("savedPostsPrompt") === "dismissed") {
		document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	}
}) ();

// Closing the banner keeps it closed for 30 seconds, even if you leave
// the page and return.
document.getElementById("dismissPrompt").onclick = function() {
	document.getElementsByClassName("signInPrompt")[0].style.display = "none";
	var time = new Date();
	time.setTime(time.getTime() + (cookieMinutes*60*1000));
	document.cookie = "savedPostsPrompt=dismissed; expires="+time.toUTCString();
}

// Shows all the posts and unchecks all the filter check boxes
document.getElementById("resetFilter").onclick = function() {
	showAllPosts();
	for(var i = 0; i < filterChecks.length; i++) {
		filterChecks[i].getElementsByTagName("input")[0].checked = false;
	}
}


// Shows only posts that are in the checked topics/types
// If there is no type selected, there is no filtering
// done by type. Similarly, if no topic is selected, there
// is no filtering done by topic.
document.getElementById("startFilter").onclick = function() {
	hideAllPosts();
	
	// Shows all the posts of the checked topics
	var numTopics = 0;
	for(var i = 2; i < filterChecks.length; i++) {
		if(filterChecks[i].getElementsByTagName("input")[0].checked) {
			console.log("filter number " + i + " is checked");
			var topicName = filterChecks[i].id;
			console.log("filter number " + i + " is " + topicName);
			var postName = topicName.substring(0, topicName.length - 5)+"Post";
			console.log("postName is " + postName);
			var topicalPosts = document.getElementsByClassName(postName);
			console.log("we found " + topicalPosts.length + " posts about " + postName);
			
			for(var j = 0; j < topicalPosts.length; j++) {
				topicalPosts[j].style.display = "initial";
			}
			
			numTopics++;
		}
	}
	// If no topics were checked, show all the topics
	if(numTopics == 0) {showAllPosts();}

	// Sees how many type filters are checked
	var numTypes = 0;
	for(var i = 0; i < 2; i++) {
		if(filterChecks[i].getElementsByTagName("input")[0].checked) {numTypes++;}
	}

	// If either 0 or both type filters are checked, nothing is necessary.
	// Hides news or discussion posts if their boxes are unchecked
	if(numTypes == 1) {
		for(var i = 0; i < 2; i++) {
			if(!filterChecks[i].getElementsByTagName("input")[0].checked) {
				var iconName = filterChecks[i].getElementsByTagName("i")[0].classList[0];
			
				for(var j = 0; j < allPosts.length; j++) {
					if(allPosts[j].getElementsByTagName("i")[0].classList[0] == iconName) {
						allPosts[j].style.display = "none"
					}
				}
			}
		}
	}
	
}

// Hides all the posts
function hideAllPosts() {
	for(var i = 0; i < allPosts.length; i++) {
		allPosts[i].style.display = "none";
	}
}

// Shows all the posts
function showAllPosts() {
	for(var i = 0; i < allPosts.length; i++) {
		allPosts[i].style.display = "initial";
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