var filtering = 0;
var filtersArr = ["Schools-filter-box", "Environment-filter-box", "Politics-filter-box", "Arts-filter-box", "Sports-filter-box"]

document.getElementById("Schools-filter-box").onclick = function(){adjFilter("Schools-filter-box")};
document.getElementById("Environment-filter-box").onclick = function(){adjFilter("Environment-filter-box")};
document.getElementById("Politics-filter-box").onclick = function(){adjFilter("Politics-filter-box")};
document.getElementById("Arts-filter-box").onclick = function(){adjFilter("Arts-filter-box")};
document.getElementById("Sports-filter-box").onclick = function(){adjFilter("Sports-filter-box")};

//document.getElementById("clear-filter-button").onclick = function(){clearAndEndFiltering(); filter()};

function adjFilter(filterID){
	if(filtering == 0) {
		startFiltering();
	}
	var el = document.getElementById(filterID);
	if(el.value == 0){
		el.value = 1;
	} else {
		el.value = 0;
	}
	checkIfClear();
	filter();
}

function startFiltering(){
	for(i = 0; i < filtersArr.length; i++){
		document.getElementById(filtersArr[i]).value = 0;
	}
	filtering = 1;
}

function filter(){
	for(i = 0; i < filtersArr.length; i++){
		var elName = filtersArr[i];
		console.log(elName);
		if(document.getElementById(elName.substring(0, elName.length - 11))){
			if(document.getElementById(elName).value == 0){
				document.getElementById(elName.substring(0, elName.length - 11)).style.display = "none";
			} else {
				document.getElementById(elName.substring(0, elName.length - 11)).style.display = "inline";
			}
		}
	}
}

function checkIfClear(){
	var n = 0;
	for(i = 0; i < filtersArr.length; i++){
		n = document.getElementById(filtersArr[i]).value + n;
	}

	if(n == 0){
		clearAndEndFiltering();
	}
}

function clearAndEndFiltering(){
	for(i = 0; i < filtersArr.length; i++){
	document.getElementById(filtersArr[i]).value = 1;
	}
	filtering = 0;
}
