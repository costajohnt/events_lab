console.log("Sanity Check: JS is working!");

$(document).ready(function(){

});
//We want collect values of each span ID that is clicked and log them
// When we click on a span id, add value of that cell as a line item to the unordered list under <h2> USE .APPEND!!!
$("span").click(function() {
	var dumb = $(this).html();
	$('ul').append('<li>' + dumb + '</li>');
});
