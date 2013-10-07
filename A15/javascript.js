//run check on the database table to get any existing comments
$(document).ready(function(){
	$.post("checkDB.php", function(output){
		$("#commentDiv").append(output)
	});
	//had to use a delay because it was executing too fast and not getting the right data
	setTimeout(function(){getStats()},100);
});

function submitComment(){
	//get input from form
	var input = $("#comment").val();
	var user = $("#name").val().toLowerCase();
	
	var validName=false;
	var validComment=false;
	
	$("#stats").html("");
	
	if(document.getElementById("errors") == null)
	{
		$("#commentForm").before("<div id=\"errors\"></div>");
	}
	else
	{
		$("#errors").html("");
	}
	
	if(user==null || user=="")
	{
		document.forms["commentForm"]["name"].className="invalid";
		$("#errors").append("please provide name<br/>");
		validName=false;
	}
	else
	{
		document.forms["commentForm"]["name"].className="";

		validName=true;
	}
	
	if(input==null || input=="")
	{
		document.forms["commentForm"]["comment"].className="invalid";
		$("#errors").append("please type a comment<br/>");
		validComment=false;
	}
	else
	{
		document.forms["commentForm"]["comment"].className="";
		validComment=true;
	}
	
	if(validName && validComment)
	{
		//post to submitComment.php and with  append the output to the div
		//that will display all comments
		$.post("submitComment.php", {comment:input, name:user}, function(output){
			$("#commentDiv").append(output + "<br/><hr/>")
		});
		


		//reset the text fields for next input
		$("#comment").val("");
		$("#name").val("");
	}
	//had to use a delay because it was executing too fast and not getting the right data
	setTimeout(function(){getStats()},100);
};

function getStats()
{
	$.post("stats.php", function (output){
		$("#stats").append(output);
	});
};







