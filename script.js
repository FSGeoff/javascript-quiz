var scoreKeeper = document.getElementById("score-keep");
var timeKeeper = document.getElementById("count-down");
var startButton = document.getElementById("start-btn");
var testBox = document.getElementById("test-box");
var firstPage = document.getElementById("home-page");
var testAnswers = document.getElementById("test-answers");
var answerMessage = document.getElementById("answer-message");
var finalScore = document.getElementById("final-score");
var goBackButton = document.getElementById("go-back");
var clearScoresButton = document.getElementById("clear-scores");
var finalResultsBox = document.getElementById("results-box");
var initialsInput = document.getElementById("initials-input");
var submitButton = document.getElementById("submit-btn");
var highScoresPage = document.getElementById("high-scores");
var initialsDisplay = document.getElementById("initials-display");
var goBackButton = document.getElementById("go-back");

localStorage.getItem("score");

var finalResults = [];
var count = 75;
var timeInterval;
var rightAnswers = [
	"3. alert",
	"4. console.log",
	"4. all of the above",
	"3. quotes",
];
function beginTest() {
	startButton.addEventListener("click", function () {
		firstPage.style.display = "none";
		timer();
	});
}

function timer() {
	timeInterval = setInterval(function () {
		count--;
		timeKeeper.textContent = count;
		console.log(count);
		if (count === 0) {
			clearInterval(timeInterval);
		}
	}, 1000);
	quizQuestion1();
}

function quizQuestion1() {
	var question1Answers = [
		"1. strings",
		"2. booleans",
		"3. alert",
		"4. numbers",
	];
	var question1 = document.createElement("h4");
	question1.textContent = "Commonly used data types DO NOT include:";
	testBox.append(question1);

	for (let i = 0; i < question1Answers.length; i++) {
		var testButtons = document.createElement("button");

		testButtons.setAttribute("data-value", question1Answers[i]);
		testButtons.style.margin = "2px";
		testButtons.style.backgroundColor = "#772877";
		testButtons.style.color = "white";
		testButtons.textContent = question1Answers[i];
		testBox.append(testButtons);
		testButtons.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				var answerSelected = event.target.getAttribute("data-value");
				finalResults.push(answerSelected);
			}
			if (answerSelected === question1Answers[2]) {
				answerMessage.innerHTML = "CORRECT!";
			} else {
				answerMessage.innerHTML = "WRONG!";
				count = count - 10;
			}
			setTimeout(function () {
				testBox.textContent = "";
				testButtons.textContent = "";
				answerSelected.innerHTML = "";
				answerMessage.innerHTML = "";
				quizQuestion2();
			}, 1000);
		});
	}
}

function quizQuestion2() {
	var question2Answers = [
		"1. Javascript",
		"2. terminal/bash",
		"3. for loops",
		"4. console.log",
	];
	var question2 = document.createElement("h4");
	question2.textContent =
		"A very useful tool used during development and debugging for printing content to the debugger is: ";
	testBox.appendChild(question2);
	for (let i = 0; i < question2Answers.length; i++) {
		var testButtons = document.createElement("button");

		testButtons.setAttribute("data-value", question2Answers[i]);
		testButtons.style.margin = "2px";
		testButtons.style.backgroundColor = "#772877";
		testButtons.style.color = "white";
		testButtons.textContent = question2Answers[i];
		testBox.append(testButtons);

		testButtons.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				var answerSelected = event.target.getAttribute("data-value");
				finalResults.push(answerSelected);
			}
			if (answerSelected === question2Answers[3]) {
				answerMessage.innerHTML = "CORRECT!";
			} else {
				answerMessage.innerHTML = "WRONG!";
				count = count - 10;
			}
			setTimeout(function () {
				testBox.textContent = "";
				testButtons.textContent = "";
				answerSelected.innerHTML = "";
				answerMessage.innerHTML = "";
				quizQuestion3();
			}, 1000);
		});
	}
}

function quizQuestion3() {
	var question3Answers = [
		"1. numbers and strings",
		"2. other arrays",
		"3. booleans",
		"4. all of the above",
	];
	var question3 = document.createElement("h4");
	question3.textContent = "Arrays in Javascript can be used to store _____?";
	testBox.appendChild(question3);

	for (let i = 0; i < question3Answers.length; i++) {
		var testButtons = document.createElement("button");

		testButtons.setAttribute("data-value", question3Answers[i]);
		testButtons.style.margin = "2px";
		testButtons.style.backgroundColor = "#772877";
		testButtons.style.color = "white";
		testButtons.textContent = question3Answers[i];
		testBox.append(testButtons);

		testButtons.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				var answerSelected = event.target.getAttribute("data-value");
				finalResults.push(answerSelected);
			}
			if (answerSelected === question3Answers[3]) {
				answerMessage.innerHTML = "CORRECT!";
			} else {
				answerMessage.innerHTML = "WRONG!";
				count = count - 10;
			}
			setTimeout(function () {
				testBox.textContent = "";
				testButtons.textContent = "";
				answerSelected.innerHTML = "";
				answerMessage.innerHTML = "";
				quizQuestion4();
			}, 1000);
		});
	}
}

function quizQuestion4() {
	console.log("4 here");
	var question4Answers = [
		"1. commas",
		"2. curly brackets",
		"3. quotes",
		"4. parenthesis",
	];

	var question4 = document.createElement("h4");
	question4.textContent =
		"String values must be enclosed with _____ when being assigned to variables.";
	testBox.append(question4);

	for (let i = 0; i < question4Answers.length; i++) {
		var testButtons = document.createElement("button");

		testButtons.setAttribute("data-value", question4Answers[i]);
		testButtons.style.margin = "2px";
		testButtons.style.backgroundColor = "#772877";
		testButtons.style.color = "white";
		testButtons.textContent = question4Answers[i];
		testBox.append(testButtons);
		testButtons.addEventListener("click", function (event) {
			if (event.target.matches("button")) {
				var answerSelected = event.target.getAttribute("data-value");
				finalResults.push(answerSelected);
			}
			if (answerSelected === question4Answers[2]) {
				answerMessage.innerHTML = "CORRECT!";
			} else {
				answerMessage.innerHTML = "WRONG!";
			}
			setTimeout(function () {
				testBox.textContent = "";
				testButtons.textContent = "";
				answerSelected.innerHTML = "";
				answerMessage.innerHTML = "";
				timeKeeper.style.display = "none";
				finalResultsBox.style.display = "block";
				finalResultsBox.style.margin = "auto";
				yourScore();
			}, 1000);
		});
	}
}

function yourScore() {
	var score = 0;
	if (finalResults[0] === rightAnswers[0]) {
		score++;
	}
	if (finalResults[1] === rightAnswers[1]) {
		score++;
	}
	if (finalResults[2] === rightAnswers[2]) {
		score++;
	}
	if (finalResults[3] === rightAnswers[3]) {
		score++;
	}
	finalScore.textContent = score;

	submitButton.addEventListener("click", function () {
		event.preventDefault();
		finalResultsBox.style.display = "none";
		highScoresPage.style.display = "block";
		highScoresPage.style.margin = "auto";

		localStorage.setItem("score", score);

		highScores();
		// scoreCard();
	});
}

function highScores() {
	console.log("High scores here");
	goBackButton.addEventListener("click", function (event) {
		if (event.target.matches("button")) {
			event.preventDefault();
			initialsDisplay.value = score;
			beginTest();
		}
	});
}
beginTest();

function scoreCard() {}

// GIVEN I am taking a code quiz
// WHEN I click the start button

// THEN a timer starts and I am presented with a question
//

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// ```
