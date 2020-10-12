var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var resultDisplay = document.querySelector("#resultDisplay");
var newColors = document.querySelector("#newColors");
var titleBar1 = document.querySelector("#title-bar-1");
var easyMode = document.querySelector("#easy");
var hardMode = document.querySelector("#hard");
var colors = randomColorArr(6)
hard.classList.add("selected");

easyMode.addEventListener("click", function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	colors = randomColorArr(3);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor;
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardMode.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	colors = randomColorArr(6);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor;
	for (var i = 0; i < squares.length; i++){
		squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
});

var rgb = [];

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

var pickedColor = pickColor();
titleBar1.style.backgroundColor = "blue";
//console.log("Initial value of pickedColor: "+pickedColor);

newColors.addEventListener("click", function(){
	newColors.innerHTML = "New Colors";
	titleBar1.style.backgroundColor = "blue";
	var pickedColor = pickColor();
	var colors = randomColorArr(6);
	//console.log("value of picedColor inside reset event listener: "+pickedColor);
	colorDisplay.innerHTML = pickedColor
	for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
});		

colorDisplay.innerHTML = pickedColor;
//console.log("third value of pickedColor: "+pickedColor);

//console.log(pickedColor)
for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
			resultDisplay.innerHTML = "Correct";
			for (var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = pickedColor;
			}
			newColors.innerHTML = "PLAY AGAIN?";
			titleBar1.style.backgroundColor = pickedColor;
		}
		else{
			resultDisplay.innerHTML = "Try Again!!";
			this.style.backgroundColor = "#232323";
		}

	})
}