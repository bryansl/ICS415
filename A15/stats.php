<?php
	//connect to database
	$connection = mysqli_connect("localhost", "bryan", "password", "bryan");

	$query = "SELECT * FROM Users";
	
	$result = mysqli_query($connection, $query);

	//make sure the table isnt empty
	if(mysqli_num_rows($result) > 0)
	{
			while($row = mysqli_fetch_array($result))
			{
				//get cookie
				if(isset($_COOKIE[$row['Name']]))
				{
					echo $_COOKIE[$row['Name']] . " comment(s):  ";
				}
				else
				{
					echo "error with cookie";
				}

				//print out name of user
				echo $row['Name'] . "<br/>";
			}
	}
	mysqli_close($connection);
?>