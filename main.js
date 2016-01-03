function attackSelect() {
  var charId = prompt("Enter the ID of the character you are attacking");
  charId = "char" + charId;
	damage(charId);
};

function damage(charId) {
	// Initial attack based on attacking character's Attack stats
  var minDamage = characters[curChar]["attack"][0];
  var maxDamage = characters[curChar]["attack"][1];
  var realDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;

  // Find block percentage based on defending character's Defense stats
  var minBlock = characters[charId]["defense"][0];
  var maxBlock = characters[charId]["defense"][1];
  var realBlock = Math.random() * (maxBlock - minBlock) + minBlock;

  // Reduce initial damage by block percentage, then round down to nearest integer
  var finalDamage = Math.floor(realDamage * (1 - realBlock));

  var specialMessage = '';

  var randCritical = Math.random();
	if(randCritical < characters[curChar]["critical"]) {
		finalDamage = Math.floor(maxDamage * (1 - realBlock));
		specialMessage = ' with a CRITICAL HIT';
	};

	var randAccuracy = Math.random();
	if(randAccuracy > characters[curChar]["accuracy"]) {
		finalDamage = 0;
		specialMessage = ' and MISSED';
	};

	characters[charId]["hp"] = (characters[charId]["hp"] - finalDamage);

	var newHp = characters[charId]["hp"];
	$('#' + charId + ' .hp').text(newHp);

	var charName = characters[charId]["title"];
	$('#action').append("<p>You attacked "+ charName + specialMessage + "! " + charName + " lost " + finalDamage + " hp</p>");
};

var characters = {
	"char1": {
		"id": 1,
		"title": "Knight",
		"hp": 300,
		"sp": 75,
		"speed": 10,
		"attack": [10, 30],
		"defense": [0, 0.2],
		"evasion": 0,
		"critical": 0.3,
		"accuracy": 0.7
	},
	"char2": {
		"id": 2,
		"title": "Computer",
		"hp": 300,
		"sp": 75,
		"speed": 10,
		"attack": [10, 30],
		"defense": [0, 0.2],
		"evasion": 0,
		"critical": 0.3,
		"accuracy": 0.7
	}
};

var curChar = "char1";

