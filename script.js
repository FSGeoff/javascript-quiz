var scoreKeeper = document.getElementById("highScores");
var timeKeeper = document.getElementById("countDown");
var startButton = document.getElementById("start-btn");
var testBox = document.getElementById("test-box");
var firstPage = document.getElementById("home-page");
var testAnswers = document.getElementById("test-answers");

startButton.addEventListener("click", function () {
	firstPage.style.display = "none";
	timer();
	quizQuestion1();
});

function timer() {
	setInterval(function () {
		function countDown() {
			count = 75;
			for (let i = count; i > 0; i--) {
				count--;
				return count;
			}
		}
	}, 1000);
}

function quizQuestion1() {
	var question1Answers = [
		"1. strings",
		"2. booleans",
		"3. alert",
		"4. numbers",
	];

	for (let i = 0; i <= question1Answers.length; i++) {
		var testButtons = document.createElement("button");
		testButtons.setAttribute("class", "btn-group-vertical");
		testButtons.setAttribute("data-value", question1Answers[i]);
		testButtons.style.margin = "2px";
		testButtons.textContent = question1Answers[i];
		testAnswers.append(testButtons);
	}
	var question1 = document.createElement("h4");
	question1.textContent = "Commonly used data types DO NOT include:";
	testButtons.appendChild(question1);
	testAnswers.addEventListener("click", function (event) {
		if (event.target.matches("button")) {
			var answerSelected = event.target.getAttribute("data-value");
			console.log(answerSelected);
		}
	});
}
// var jsQuiz = [
// 	{
// 		question: "Commonly used data types DO NOT include:",
// 		answers: ["1. strings", "2. booleans", "3. alert", "4. numbers"],
// 	},
// 	{
// 		question:
// 			"The condition in an if/else statement is enclosed within _______.",
// 		answers: [
// 			"1. quotes",
// 			"2. curly brackets",
// 			"3. parenthesis",
// 			"4. square brackets",
// 		],
// 	},
// 	{
// 		question: "Arrays in JavaScript can be used to store _____.",
// 		answers: [
// 			"1. numbers and strings",
// 			"2. other arrays",
// 			"3. booleans",
// 			"4. all of the above",
// 		],
// 	},
// 	{
// 		question:
// 			"String values must be enclosed within ______ when being assigned to variables",
// 		answers: [
// 			"1. commas",
// 			"2. curly brackets",
// 			"3. quotes",
// 			"4. parenthesis",
// 		],
// 	},
// ];

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
