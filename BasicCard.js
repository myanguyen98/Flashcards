var inquirer = require("inquirer");
function BasicCard(question,answer){
		this.question = question;
		this.answer = answer;
		this.printCard = function(){
			inquirer.prompt([
			{
				name:"question",
				message:this.question
			}
			]).then(function(inquirerResponse){
				if (inquirerResponse.question === answer) {
					console.log("You answered the question correctly!")
					console.log(answer)
				} else {
					console.log("Sorry, the correct answer was " + answer)
					console.log(answer)
				}
			})
			var answer = this.answer
		};
		this.printCard();
		

};

var quest1 = new BasicCard("Who was the 16th president of the United States?", "Abraham Lincoln");
//var quest2 = new BasicCard("Who was the 3rd president of the United States?","Thomas Jefferson");


//Example of adding new flashcard to existing constructor
/*var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");*/