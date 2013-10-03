//run check on the database table to get any existing comments
$(document).ready(function(){
	$.post("checkDB.php", function(output){
		$("#commentDiv").append(output)
	});
});

function submitComment(){
	//get input from form
	var input = $("#comment").val();

	
	//post to submitComment.php and with  append the output to the div
	//that will display all comments
	$.post("submitComment.php", {comment:input}, function(output){
		$("#commentDiv").append(output + "<br/><hr/>")
	});
};