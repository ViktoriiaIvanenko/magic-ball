$(document).ready(function () {
var m8b = {};
//array of answers
 m8b.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it", "Yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy", "Try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
// the method that works as an answergiver
 m8b.randomQuestion = function (question) {
//giving random answer
var randomAnswer = this.listOfAnswers [Math.floor (Math.random () * this.listOfAnswers.length)];
   $("#answer").text (randomAnswer);
	 console.log (question);
    console.log (randomAnswer);

};
var clickButton = function () {
 prompt ("Enter a YES/NO question!");
 m8b.randomQuestion ("question");
};
$("#questionButton").click (clickButton);
});	

 


