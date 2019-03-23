$(document).ready(function () {
var m8b = {};
$("#answer").hide();

//array of answers
 m8b.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it", "Yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy", "Try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

// the method that works as an answergiver
 m8b.randomQuestion = function (question) {
//giving random answer
 $("#8ball").attr ("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
   $("#answer").fadeIn (4000);
var randomAnswer = this.listOfAnswers [Math.floor (Math.random () * this.listOfAnswers.length)];
   $("#answer").text (randomAnswer);
   
	 console.log (question);
    console.log (randomAnswer);

};
  

var clickButton = function () {
$("#answer").hide();
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
 
//setting Timeout
setTimeout (
	function (){
//show prompt 
var question = prompt ("Enter a YES/NO question!")
$("#8ball").effect ("shake")
 m8b.randomQuestion ("question")
}, 500);
};
$("#questionButton").click (clickButton);
});	

 


