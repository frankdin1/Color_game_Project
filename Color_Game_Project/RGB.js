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

function randomColor(){
	var red = Math.floor(Math.random()*256)
	var green = Math.floor(Math.random()*256)
	var blue = Math.floor(Math.random()*256)
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function easyMode(){
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
		}
		else{
				squares[i].style.display = "none";
		}
	}
}

easyMode();


for(var i = 0; i < gameMode.length; i++){
	gameMode[i].addEventListener("click", function(){
		for(var i = 0; i < gameMode.length; i++){
			gameMode[i].classList.remove("selected");
			this.classList.add("selected");
		}

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

resetBtn.addEventListener("click", function(){
	reset();
});		

colorDisplay.innerHTML = pickedColor;

for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			resultDisplay.innerHTML = "Correct";
			for (var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = pickedColor;
			}
			resetBtn.innerHTML = "PLAY AGAIN?";
			h1.style.backgroundColor = pickedColor;
		}
		else{
			resultDisplay.innerHTML = "Try Again!!";
			this.style.backgroundColor = "#232323";
		}

	})
}