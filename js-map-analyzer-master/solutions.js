// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on
let row, column;

// Solution Functions...
function level1Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 4) {
		document.getElementById("currentTile").innerHTML = "sand"; // Set output text
	} else {
		document.getElementById("currentTile").innerHTML = "water"; // Set output text
	}
}

function level2Solution() {
	// USE CHAINED IF STATEMENT
	if (column <= 2) {
		document.getElementById("currentTile").innerHTML = "hills"; // Set output text
	} else if (column <= 7) {
		document.getElementById("currentTile").innerHTML = "sand"; // Set output text
	} else {
		document.getElementById("currentTile").innerHTML = "water"; // Set output text
	}
	
}

function level3Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 2 || column >= 8 ) {
		document.getElementById("currentTile").innerHTML = "hills"; // Set output text
	} else {
		document.getElementById("currentTile").innerHTML = "sand"; // Set output text
	}
}

function level4Solution() {
	// USE BINARY IF STATEMENT
	if (row >= 3 && row <= 7 ) {
		document.getElementById("currentTile").innerHTML = "sand";
	}  else {
		document.getElementById("currentTile").innerHTML = "hills";
	} // Set output text
}

function level5Solution() {
	// USE CHAINED IF STATEMENT
	if (row >= 6 && row <= 7 ){
		document.getElementById("currentTile").innerHTML = "water";
	} else if (row >= 3 && row <= 5){
		document.getElementById("currentTile").innerHTML = "sand";
	} else{
		document.getElementById("currentTile").innerHTML = "hills";
	}
}

function level6Solution() {
	// USE BINARY IF STATEMENT
	if (row >= 2 && row <= 5){
		document.getElementById("currentTile").innerHTML = "sand";
	} else {
		document.getElementById("currentTile").innerHTML = "water";
	}

 // Set output text
}

function level7Solution() {
	// USE BINARY IF STATEMENT
	if (column == 7 && row == 4){
	document.getElementById("currentTile").innerHTML = "water";
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}
	 // Set output text
}

function level8Solution() {
	// USE BINARY IF STATEMENT
	if (column == 2 || row == 5){
	document.getElementById("currentTile").innerHTML = "tree";
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}
 // Set output text
}

function level9Solution() {
	// USE BINARY IF STATEMENT
	if (column <= 5 && row <= 5){
		document.getElementById("currentTile").innerHTML = "water";
	} else {
		document.getElementById("currentTile").innerHTML = "sand";
	}

	 // Set output text
}

function level10Solution() {
	// USE CHAINED IF STATEMENT
	if(column <= 1){
		document.getElementById("currentTile").innerHTML = "hills";
	} else if (column >= 2 && column <= 3){
		document.getElementById("currentTile").innerHTML = "tree";
	} else if (column >=8 && column <= 11){
		document.getElementById("currentTile").innerHTML = "water";
	}else{
		document.getElementById("currentTile").innerHTML = "sand";
	}

	// Set output text
}

function level11Solution() {
	// USE CHAINED IF STATEMENT
	if(column <= 5 && row <= 3){
		document.getElementById("currentTile").innerHTML = "water";
	} else if(column >= 6 && row <= 3){
		document.getElementById("currentTile").innerHTML = "hills";
	} else if(column >= 6 && row >= 4){
		document.getElementById("currentTile").innerHTML = "tree";
	} else{
		document.getElementById("currentTile").innerHTML = "sand";
	}
 // Set output text
}

function level12Solution() {
	// USE BINARY IF STATEMENT
	if(column <= 5 && row <= 4){
		document.getElementById("currentTile").innerHTML = "water";
	} else if (column >= 6 && row >= 5){
		document.getElementById("currentTile").innerHTML = "water";
	} else{
		document.getElementById("currentTile").innerHTML = "sand";
	}
	 // Set output text
}

function level13Solution() {
	// USE BINARY IF STATEMENT
	if(column <= 3){
		document.getElementById("currentTile").innerHTML = "tree";
	} else if(row <= 1){
		document.getElementById("currentTile").innerHTML = "tree";
	} else if(row >= 6){
		document.getElementById("currentTile").innerHTML = "tree";
	} else if(column >= 10){
		document.getElementById("currentTile").innerHTML = "tree";
	} else{
		document.getElementById("currentTile").innerHTML = "sand";
	}
	 // Set output text
}

function level14Solution() {
	// USE CHAINED IF STATEMENT
	Id("currentTile").innerHTML = "----";
	 // Set output text
}
