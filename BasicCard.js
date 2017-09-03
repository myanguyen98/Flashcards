function BasicCard(question,answer){
		this.question = question;
		this.answer = answer;
		this.printCard = function(){
			console.log("Answer the question: "+this.question+
				"\nYour answer: "+//take user input here
				"\nThe correct answer was: "+this.answer)
		}

};

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