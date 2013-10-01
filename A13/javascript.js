function submitComment(){
	//get input from form
	var input = $("#comment").val();

	//set the comment display div to be empty
	//this is because in my php i always put all data from file
	//into the div so to prevent duplicate comments it needs to be emptied
	$("#commentDiv").html("");
	
	//post to submitComment.php and with  append the output to the div
	//that will display all comments
	$.post("submitComment.php", {comment:input}, function(output){
		$("#commentDiv").append(output)
	});
};