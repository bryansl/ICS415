<?php
	//connect to my database called "bryan" with username and password
	$connection = mysqli_connect("localhost", "bryan", "password", "bryan");

	
	
	//get comment from post from the javascript function
	$comment = $_POST['comment'];
	$name = $_POST['name'];

	$findUser=  "SELECT Name
			FROM Users
			WHERE Name = '$name'";
			
	$result = mysqli_query($connection, $findUser);
	
	//check if user is already in table
	//if 0 then they aren't
	if(mysqli_num_rows($result) == 0)
	{
		$addUser = "INSERT INTO Users (Name)
					VALUES('$name')";

		mysqli_query($connection, $addUser);
		
		$value = 1;
		$time = time() + 60*60*24*7;
		setcookie($name, $value, $time);
	}
	else	//they are in table, so increment their current count
	{
		$value = $_COOKIE[$name];
		$time = time() + 60*60*24*7;
		$value++;
		setcookie($name, $value, $time);
	}

	$addComment="INSERT INTO Comments (Name, Comment)
			VALUES ('$name', '$comment')";
	
	mysqli_query($connection, $addComment);

	//return the comment
	echo "<b>". $name .":</b><br/>" . $comment;
	
	mysqli_close($connection);
?>

