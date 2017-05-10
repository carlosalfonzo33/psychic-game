//Array of letters

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//Computer randomly selects the word 
var randomIndex = Math.floor(Math.random() * letters.length);
var compChoice = letters[randomIndex]
console.log("compChoice: ",compChoice);

//User Choice 
document.onkeyup = function(event) { 
	console.log("event: ", event)
	 var userChoice = event.key;  // this saves the key from user
	 console.log("userChoice: ", userChoice)
}