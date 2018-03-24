
var friends = require("../data/friends.js");

module.exports= function (app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {

		var bestFriend= {
			name: "",
			photo: "",
			friendDifference:1000
		};


		console.log (req.body);

		var userData = req.body;
		var userScores = userData.scores;

		console.log (userScores);

		var totalDifference;

		for (var i = 0; i < friends.length; i++) {
			var currentFriend = friends [i];
			totalDifference = 0;

			for (var j = 0; i < currentFriend.scores.length; j++){
			   var currentFriendScore= currentFriend.scores[j];
			   var currentUserScore=userScores[j];



				totalDifference += math.abs(parseInt(currentUserScore-parseInt(currentFriendScore));

				if (totalDifference <= bestFriend.friendDifference) {

					bestFriend.name = currentFriend.name;
					bestFriend.photo = currentFriend.photo;
					bestFriend.friendDifference = totalDifference;



				}
			}
		}

		res.json(bestFriend);
		friends.push(userData);
	});

};
