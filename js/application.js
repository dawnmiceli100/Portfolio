$(document).ready(function() {

	// Hovering over the image of a project will highlight the description of that project

	$('#beer-picker').hover(function() {
		$('#picker-desc').toggleClass('desc-hover');
	});	

	$('#beer-quiz').hover(function() {
		$('#quiz-desc').toggleClass('desc-hover');
	});	

	$('#shopping-list').hover(function() {
		$('#shopping-desc').toggleClass('desc-hover');
	});	

	$('#hot-cold-game').hover(function() {
		$('#game-desc').toggleClass('desc-hover');
	});	

	$('#37signals').hover(function() {
		$('#37signals-desc').toggleClass('desc-hover');
	});	

	$('#google-clone').hover(function() {
		$('#google-desc').toggleClass('desc-hover');
	});	
	
});