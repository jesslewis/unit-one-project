var gamePrompt = require('game-prompt'); // require is just a node function that loads an external library
var colors = require('colors');

// Global Variables

var playerName;
var vehicleName;
var gas = 1000;
var numberOfArtifacts = 0;
var planets = [
	{
		name: '(E)arth',
		distance: 10
	},
	{
		name: '(M)esnides',
		distance: 20
	}, 
	{
		name: '(L)aplides',
		distance: 50
	},
	{
		name: '(K)iyturn',
		distance: 120
	}, 
	{
		name: '(A)enides',
		distance: 25
	},
	{
		name: '(C)ramuthea',
		distance: 200
	},
	{
		name: '(S)meon T9Q',
		distance: 400
	},
	{
		name: '(G)leshan 7Z9',
		distance: 85
	}
];
var questions = [
	{
		ask: 'Ask about (A)rtifact.'
	},
	{
		ask: 'Ask about other (P)lanets.'
	},
	{
		ask: '(L)eave.'
	}
];


function startGame() {
	gamePrompt('S.R.S.V. press ENTER to start.' .green, intro);
}

function intro() {
	gamePrompt('You are the captain of a Solo Research Space Vehicle (S.R.S.V.) ' + 
		'on an expedition to explore foreign planets. Your mission is to ' +
		'make contact with three alien life forms, acquire an artifact representative ' +
		'of their culture, and bring back your findings to Earth.', collectInfo);
}

function collectInfo() {
	gamePrompt([
		'A voice comes on over the intercom.',
		'"Please state your name for identity verification"'
		], collectName);
}

function collectName(name) {
	playerName = name;

	gamePrompt([
		'"Thank you Captain ' + playerName + '."',
		'"Please state your vehicle name for identity verification.'
		], collectVehicleName);
}

function collectVehicleName(name) {
	vehicleName = name;

	gamePrompt([
		'Captain ' + playerName + ' your ship ' + vehicleName + ' only has 1000 gallons of fuel',
		'Make sure to use it wisely!'
		], whereToTravel);
}

function whereToTravel() {
	gamePrompt(['Where to Captain ' + playerName + '?\n' + listPlanets(planets)], navigate);
}

function listPlanets(planets){
	var planetsString = '';
	planets.forEach(function(planet){
		planetsString += planet.name + ' ' + planet.distance + ' light years \n';
	});
	return planetsString;
}

function navigate(planets){
	 var planetsLowerCase = planets.toLowerCase();

	  if (planetsLowerCase === 'e' || planetsLowerCase === 'earth') {
	    usedGas = 10;
	    gas -= 10;
	   	if (gas <= 0) {
	   		gamePrompt(['Sorry, you lose, try again'.red], startGame);
	   	} else {
		    var message = 'Flying to Earth...\n You used ' + gas + '.\n The ' + vehicleName +  ' now has ' + gas + ' gallons';
		    gamePrompt(message, earth);
		}
	  } else if (planetsLowerCase === 'm' || planetsLowerCase === 'mesnides') {
	  	usedGas = 20;
	  	gas -= 20;
	  	if (gas <= 0) {
	  		gamePrompt(['Sorry, you lose, try again'], startGame);
	   	} else {
	 	   var message = 'Flying to Mesnides...\n You used ' + usedGas + '.\n The ' + vehicleName +  ' now has ' + gas + ' gallons';
	    	gamePrompt(message, mesnides);
		}
	  } else if (planetsLowerCase === 'l' || planetsLowerCase === 'laplides') {
	  	usedGas = 50;
	    gas -= usedGas;
	    if (gas <= 0) {
	   		gamePrompt(['Sorry, you lose, try again'], startGame);
	   	} else {
		    var message = 'Flying to Laplides... \n You used ' + usedGas + '. \n The ' + vehicleName +  ' now has ' + gas + ' gallons';
		    gamePrompt(message, laplides);
		}
	  } else if (planetsLowerCase === 'k' || planetsLowerCase === 'kiytrun') {
	  	usedGas = 120;
	    gas -= usedGas;
	    if (gas <= 0) {
	   		gamePrompt(['Sorry, you lose, try again'], startGame);
	   	} else {
		    var message = 'Flying to Kiytrun... \n You used ' + usedGas + '. \n The ' + vehicleName +  ' now has ' + gas + ' gallons';
		    gamePrompt(message, kiytrun);
		}
	  } else if (planetsLowerCase === 'a' || planetsLowerCase === 'aenides') {
	  	usedGas = 25;
	    gas -= usedGas;
	    if (gas <= 0) {
	   		gamePrompt(['Sorry, you lose, try again'], startGame);
	   	} else {	
		    var message = 'Flying to Aenides... \n You used ' + usedGas + '. \n The ' + vehicleName +  ' now has ' + gas + ' gallons';
		    gamePrompt(message, aenides);
		}
	  } else if (planetsLowerCase === 'c' || planetsLowerCase === 'cramuthea') {
	  	usedGas = 200;
	    gas -= usedGas;
	    if (gas <= 0) {
	   		gamePrompt(['Sorry, you lose, try again'], startGame);
	   	} else {
		    var message = 'Flying to Cramuthea... \n You used ' + usedGas + '. \n The ' + vehicleName +  ' now has ' + gas + ' gallons';
		    gamePrompt(message, cramuthea);
		}
	  } else if (planetsLowerCase === 's' || planetsLowerCase === 'semon T9Q') {
	  	usedGas = 400;
	    gas -= usedGas;
	    if (gas <= 0) {
	   		gamePrompt(['Sorry, you lose, try again'], startGame);
	   	} else {
		    var message = 'Flying to Smeon T9Q... \n You used ' + usedGas + '. \n The ' + vehicleName +  ' now has ' + gas + ' gallons';
		    gamePrompt(message, smeonT9Q);
		}
	  } else if (planetsLowerCase === 'g' || planetsLowerCase === 'gleshan 7Z9') {
	  	usedGas = 85;
	    gas -= usedGas;
	    if (gas <= 0) {
	   		gamePrompt(['Sorry, you lose, try again'], startGame);
	   	} else {
		    var message = 'Flying to Gleshan7Z9... \n You used ' + usedGas + '. \n The ' + vehicleName +  ' now has ' + gas + ' gallons';
		    gamePrompt(message, gleshan7Z9);
		}
	  } else {
	    gamePrompt('That is not a planet', whereToTravel);
	  }
}

function listAsks(asks) {
	var asksString = '';
	asks.forEach(function(ask) {
		asksString += ask.ask + '\n';
	});
	return asksString;
}

function earth() {
	var addGas = 10;
	gas += 10;
	if (numberOfArtifacts >= 3) {
		var artifactResponse = 'You win';
	} else {
		gamePrompt(['You need more artifacts '], whereToTravel);
	}
	gamePrompt(['Welcome, traveler, to Earth\nWe will check your artifacts\n', artifactResponse], startGame);
}

function mesnides() {
	gamePrompt(['Welcome, traveler, to Mesnides.\nHow can we assist you?\n' + listAsks(questions)], mesnidesAnswer);

}

function mesnidesAnswer(answer) {
	var answerLowerCase = answer.toLowerCase();

	if (answerLowerCase === 'a') {
		numberOfArtifacts += 1;
		gamePrompt(['"Here, take this Myoin Horn, an ancient Mesnidian instrument."\n Myoin Horn added to inventory.\nYou now have ' +numberOfArtifacts + ' artifacts\nHow can we assist you?\n' + listAsks(questions)], mesnidesAnswer);
	} else if (answerLowerCase === 'p') {
		gamePrompt(['"Well, Laplides suffered from atomic war and has been uninhabited for centuries. You would do well to avoid it on your journey."\nHow can we assist you?\n' + listAsks(questions)], mesnidesAnswer);
	} else if (answerLowerCase === 'l') {
		gamePrompt(['Where to Captain ' + playerName + '?\n' + listPlanets(planets)], navigate);
	} else {
		gamePrompt(['How can we assist you?\n' + listAsks(questions)], mesnidesAnswer);
	}
}

function laplides() {
	gamePrompt(['You enter orbit around Laplides. Looking down at the planet, you see signs of atomic war and realize there is no option but to turn around.'], whereToTravel);
}

function kiytrun() {
	gamePrompt(['"Hello, what brings you to Kiyturn? You\'re not here to cause trouble are you?"\nHow can we assist you?\n' + listAsks(questions)], kiytrunAnswer);
}

function kiytrunAnswer(answer) {
	var answerLowerCase = answer.toLowerCase();

	if (answerLowerCase === 'a') {
		numberOfArtifacts += 1;
		gamePrompt(['"Here, take this Kiyturn Glass Bowl, a symbol of our civilization."\nKiyturn Glass Bowl added to inventory.\nYou now have ' + numberOfArtifacts + ' artifacts\nHow can we assist you?\n' + listAsks(questions)], kiytrunAnswer);
	} else if (answerLowerCase === 'p') {
		gamePrompt(['"I\'m sorry, but we do not leave our planet. The universe, to us, is a beautiful mystery."\nHow can we assist you?\n' + listAsks(questions)], kiytrunAnswer);
	} else if (answerLowerCase === 'l') {
		gamePrompt(['Where to Captain ' + playerName + '?\n' + listPlanets(planets)], navigate);
	} else {
		gamePrompt(['How can we assist you?\n' + listAsks(questions)], kiytrunAnswer);
	}
}

function aenides() {
	gamePrompt(['You enter orbit around Aenides. You attempt to land, but they begin to fire upon your S.R.S.V. and you are forced to retreat.'], whereToTravel);
}

function cramuthea() {
	gas += 500;
	gamePrompt(['Cramuthea has been abandoned due to global environmental disaster, but there are remnants of the people that left.\nYou are able to refuel your ship (+500 gallons) and read a beacon signal that tells you the Cramuthean people have migrated to Smeon T9Q.'], whereToTravel);
}

function smeonT9Q() {
	gas += 100;
	gamePrompt(['"Hello, welcome to Semon T9Q"\nHere are 100 gallons of gas\nHow can we assist you?\n' + listAsks(questions)], smeonT9QAnswer);
}

function smeonT9QAnswer(answer) {
	var answerLowerCase = answer.toLowerCase();

	if (answerLowerCase === 'a') {
		numberOfArtifacts += 1;
		gamePrompt(['"We love you, take this dried Cramun Flower."\nCramun Flower added to inventory.\nYou now have ' + numberOfArtifacts + ' artifacts\nHow can we assist you?\n' + listAsks(questions)], smeonT9QAnswer);
	} else if (answerLowerCase === 'p') {
		gamePrompt(['"The people of Aenides once tried to take over our planet by force. Do not visit them!"\nHow can we assist you?\n' + listAsks(questions)], smeonT9QAnswer);
	} else if (answerLowerCase === 'l') {
		gamePrompt(['Where to Captain ' + playerName + '?\n' + listPlanets(planets)], navigate);
	} else {
		gamePrompt(['How can we assist you?\n' + listAsks(questions)], smeonT9QAnswer);
	}
}

function gleshan7Z9() {
	gamePrompt(['"Hello, welcome to Gleshan 7Z9"\nHow can we assist you?\n' + listAsks(questions)], gleshan7Z9Answer);
}

function gleshan7Z9Answer(answer) {
	var answerLowerCase = answer.toLowerCase();

	if (answerLowerCase === 'a') {
		gamePrompt(['"We are poor"\nNo artifact given.\nHow can we assist you?\n' + listAsks(questions)], gleshman7Z9Answer);
	} else if (answerLowerCase === 'p') {
		gamePrompt(['"The people of Cramuthean are extremely weathly. Go visit them!"\nHow can we assist you?\n' + listAsks(questions)], gleshman7Z9Answer);
	} else if (answerLowerCase === 'l') {
		gamePrompt(['Where to Captain ' + playerName + '?\n' + listPlanets(planets)], navigate);
	} else {
		gamePrompt(['How can we assist you?\n' + listAsks(questions)], gleshman7Z9Answer);
	}
}

startGame();