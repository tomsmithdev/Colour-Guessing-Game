let numSquares = 6;
let colours = [];
let pickedColour;
let squares = document.querySelectorAll(".square");
let colourDisplay = document.getElementById("colourDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//Mode Button event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
			reset();
		});
	}
}

function setupSquares() {
	for (let i = 0; i < squares.length; i++) {
		//add cick listeners to squares
		squares[i].addEventListener("click", function () {
			//grab colour of clicked square
			let clickedColour = this.style.backgroundColor;
			//compare colour to pickedColour
			if (clickedColour === pickedColour) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColours(clickedColour);
				h1.style.backgroundColor = clickedColour;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	colours = generateRandomColours(numSquares);
	//pick a new random colour from array
	pickedColour = pickColour();
	//change colour display to match picked colour
	colourDisplay.textContent = pickedColour;
	resetButton.textContent = "New Colours";
	messageDisplay.textContent = "";
	//change colours of sqaures
	for (let i = 0; i < squares.length; i++) {
		if (colours[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
	reset();
});

for (let i = 0; i < squares.length; i++) {
	//add cick listeners to squares
	squares[i].addEventListener("click", function () {
		//grab colour of clicked square
		let clickedColour = this.style.backgroundColor;
		//compare colour to pickedColour
		if (clickedColour === pickedColour) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColours(clickedColour);
			h1.style.backgroundColor = clickedColour;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColours(colour) {
	//loop through all squares
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colour;
	}
	//change each colour to macth given colour
}

function pickColour() {
	let random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours(num) {
	//make an array
	let arr = [];
	//add num random colours to array
	for (let i = 0; i < num; i++) {
		//get random colour and push into array
		arr.push(randomColour());
	}
	//return that array
	return arr;
}

function randomColour() {
	//pick a "red" from 0 - 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
