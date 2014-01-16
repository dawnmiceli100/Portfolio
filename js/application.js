$(document).ready(function() {

	// Use typer to type name and title on page
	$('#name').typeTo("Dawn Miceli");
	$('#job').typeTo("Web and Application Developer");


	// Hovering over the image of a project will highlight the description and picture of that project

	$('#beer-picker').hover(function() {
		$('#picker-desc').toggleClass('desc-hover');
		$('#beer-picker').toggleClass('desc-hover');
	});	

	$('#beer-quiz').hover(function() {
		$('#quiz-desc').toggleClass('desc-hover');
		$('#beer-quiz').toggleClass('desc-hover');
	});	

	$('#shopping-list').hover(function() {
		$('#shopping-desc').toggleClass('desc-hover');
		$('#shopping-list').toggleClass('desc-hover');
	});	

	$('#hot-cold-game').hover(function() {
		$('#game-desc').toggleClass('desc-hover');
		$('#hot-cold-game').toggleClass('desc-hover');
	});	

	$('#37signals').hover(function() {
		$('#37signals-desc').toggleClass('desc-hover');
		$('#37signals').toggleClass('desc-hover');
	});	

	$('#google-clone').hover(function() {
		$('#google-desc').toggleClass('desc-hover');
		$('#google-clone').toggleClass('desc-hover');
	});	

	// Hovering over the description of a project will highlight the picture and description of that project

	$('#picker-desc').hover(function() {
		$('#picker-desc').toggleClass('desc-hover');
		$('#beer-picker').toggleClass('desc-hover');
	});	

	$('#quiz-desc').hover(function() {
		$('#quiz-desc').toggleClass('desc-hover');
		$('#beer-quiz').toggleClass('desc-hover');
	});	

	$('#shopping-desc').hover(function() {
		$('#shopping-desc').toggleClass('desc-hover');
		$('#shopping-list').toggleClass('desc-hover');
	});	

	$('#game-desc').hover(function() {
		$('#game-desc').toggleClass('desc-hover');
		$('#hot-cold-game').toggleClass('desc-hover');
	});	

	$('#37signals-desc').hover(function() {
		$('#37signals-desc').toggleClass('desc-hover');
		$('#37signals').toggleClass('desc-hover');
	});	

	$('#google-desc').hover(function() {
		$('#google-desc').toggleClass('desc-hover');
		$('#google-clone').toggleClass('desc-hover');
	});	
	
});