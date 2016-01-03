function attackSelect() {
  var charId = prompt("Enter the ID of the character you are attacking");
  attackChar(charId);
};

function attackChar(charId) {
	var charId = "char" + charId;
	damage(charId);
};

function damage(charId) {
	characters[charId]["hp"] = (characters[charId]["hp"] - 10);
	var newHp = characters[charId]["hp"];
	$('#' + charId + ' .hp').text(newHp);
	var charName = characters[charId]["title"];
	$('#action').append("<p>You attacked "+ charName + "!</p>");
};

var characters = {
	"char1": {
		"id": 1,
		"title": "Knight",
		"hp": 300,
		"sp": 75,
		"speed": 10,
		"attack": [10, 30],
		"defense": [0.3, 0.5],
		"evasion": 1,
		"critical": 0.1,
		"accuracy": 0.9
	},
	"char2": {
		"id": 2,
		"title": "Computer",
		"hp": 300,
		"sp": 75,
		"speed": 10,
		"attack": [10, 30],
		"defense": [0.3, 0.5],
		"evasion": 1,
		"critical": 0.1,
		"accuracy": 0.9
	}
};

