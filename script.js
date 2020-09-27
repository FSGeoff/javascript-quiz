var scoreKeeper = document.getElementById("highScores");
var timeKeeper = document.getElementById("countDown");
var startButton = document.getElementById("start-btn");

var quizQuestions = [
	{
		question: "Commonly used data types DO NOT include:",
		answers: ["strings", "booleans", "alert", "numbers"],
	},
	{
		question:
			"The condition in an if/else statement is enclosed within _______.",
		answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
	},
	{
		question: "Arrays in JavaScript can be used to store _____.",
		answers: [
			"numbers and strings",
			"other arrays",
			"booleans",
			"all of the above",
		],
	},
	{
		question:
			"String values must be enclosed within ______ when being assigned to variables",
		answers: ["commas", "curly brackets", "quotes", "parenthesis"],
	},
];

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// ```
