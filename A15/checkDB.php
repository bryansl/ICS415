<?php
	//connect to database
	$connection = mysqli_connect("localhost", "bryan", "password", "bryan");
	if(mysqli_connect_errno($connection)){
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	function checkTable($con)
	{
		//create table if it doesnt exist
		$sql="CREATE TABLE Comments
			(
				Name CHAR(30) NOT NULL,
				Comment CHAR(100)
			)";
	
		if (mysqli_query($con,$sql))
		{
			//do nothing - table is empty and did not previously exist
		}
		else
		{
			//table exists so get comments from table
			printTable($con);
		}
	}

	//create table of users so there is a list
	//if it exists already then doesn't matter what the error is
	function checkUserTable($con)
	{
		$sql="CREATE TABLE Users
			(
				Name CHAR(30) NOT NULL
			)";
	
		mysqli_query($con,$sql);
	}

	function printTable($con)
	{
		//run the select all query
		$result = mysqli_query($con,"SELECT * FROM Comments");
		
		//if there are results then print
		if(mysqli_num_rows($result) > 0)
		{
			while($row = mysqli_fetch_array($result))
			{
				//echo each comment with formatting since it will only get
				//appended after the whole php script ends
				echo "<b>".$row['Name'].":</b><br/>" . $row['Comment'] . "<br/><hr/>";
			}
		}
	}

	checkTable($connection);
	checkUserTable($connection);
	mysqli_close($connection);
?>