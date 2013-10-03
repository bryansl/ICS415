<?php
	//get comment from post from the javascript function
	$comment = $_POST['comment'];

	//connect to my database called "bryan" with username and password
	$connection = mysqli_connect("localhost", "bryan", "password", "bryan");
	//in case of error
	if(mysqli_connect_errno($connection)){
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
	
	
	//create my query
	$sql="INSERT INTO Comments (Comment)
			VALUES ('$comment')";
	
	//execute the query
	mysqli_query($connection, $sql);

	//return the comment
	echo $comment;
	
	
	
	
	
	
	
?>

