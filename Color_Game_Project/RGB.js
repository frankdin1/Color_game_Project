var numSquares = 3;
var colors = randomColorArr(numSquares)

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var resultDisplay = document.querySelector("#resultDisplay");
var resetBtn = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var gameMode = document.querySelectorAll(".gameMode");

function reset(){
	resetBtn.innerHTML = "New Colors";
	resultDisplay.innerHTML = "";
	h1.style.backgroundColor = "steelblue";
	colors = randomColorArr(numSquares);
	pickedColor = pickColor();
	
	colorDisplay.innerHTML = pickedColor;
	easyMode();
}

function randomColorArr(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
//creating a random color
function randomColor(){
	var red = Math.floor(Math.random()*256)
	var green = Math.floor(Math.random()*256)
	var blue = Math.floor(Math.random()*256)
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//picking a random random color from our list that will show up in the title
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//making sure only three squares appear when in easy mode
function easyMode(){
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){//this checks if there is a square available to add background color to
				squares[i].style.display = "block";//this initializes all available squares in case we change game mode
				squares[i].style.backgroundColor = colors[i];
		}
		else{
				squares[i].style.display = "none";
		}
	}
}

easyMode();//calling easy mode function

//this click event is what we use to change modes and style of mode buttons
for(var i = 0; i < gameMode.length; i++){
	gameMode[i].addEventListener("click", function(){
		for(var i = 0; i < gameMode.length; i++){
			gameMode[i].classList.remove("selected");//initially remove the "selected" class from all elements in the .gameMode class
			this.classList.add("selected");//add the "selected" class to the element that was clicked
		}

		//the following statements determine how many squares will be used as parameters for the color creating function
		if (this.textContent === "Easy"){
			numSquares = 3;
		}
		else if(this.textContent === "Medium"){
			numSquares = 6;
		}
		else{
			numSquares = 9;
		}
		reset();
		
	})
}

var pickedColor = pickColor();

//we use the reset button to start a new game instead of having to refresh the screen each time
resetBtn.addEventListener("click", function(){
	reset();
});		

colorDisplay.innerHTML = pickedColor;//this line displays the rgb that user will try to guess

//the code below determines what happens when we select ofr fail to select the square with the right color
for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){//if the square you clicked on has the same color as the color at the tp of the screen
			resultDisplay.innerHTML = "Correct";//display this message
			for (var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = pickedColor;//let all the sqaures change color to that of the "winning" color
			}
			resetBtn.innerHTML = "PLAY AGAIN?";//change the mesage displayed
			h1.style.backgroundColor = pickedColor;//change the title background color
		}
		else{//if you click the wrong square
			resultDisplay.innerHTML = "Try Again!!";//display this message
			this.style.backgroundColor = "#232323";//make the square disappear
		}

	})
}