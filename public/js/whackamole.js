"use strict";

function disappearMole (id) {
	console.log(id);
}
function appearMole (id) {
	console.log(id);
	$('#' + id).addClass('active');
	setTimeout(function(){
	$("#" + id).removeClass('active');		
	},800);
};

function chooseHole () {
	var squares = $(".tile");
	var random = Math.floor(Math.random() * 9);
	var squareRandom = squares[random];
	var id = squareRandom.getAttribute("id");
	appearMole(id);
}

$('#start').click(function() {
	chooseHole();
	var gameInterval = setInterval(chooseHole, 1000);
});

$(".tile").click(function() {
	var imageClicked = $(this).attr("id");
	var blockNumber = "[id=" + imageClicked + "]";
	console.log(blockNumber);
	disappearMole(imageClicked);
	scoreUp();
});
var scoreUp = function() {
	var lastScore = $(".scoreUp").text()
	var newScore = parseInt(lastScore) + 1;
	$(".scoreUp").text(newScore);
}
