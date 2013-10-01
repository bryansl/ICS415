<?php
	//get comment from post from the javascript function
	$comment = $_POST['comment'];

	//add line break and an "hr" to separate comments
	$comment .= "<br/><hr/>";
	
	//the name of the file that will store the comments
	$fileName = "commentList.txt";
	
	//need to do this if file that contains comments doesnt exist
	//this will create it
	$newFile = fopen($fileName, "a");
	fclose($newFile);
	
	//get the contents of the file
	$data = file_get_contents($fileName);
	//append the comment to the file
	$data .= $comment;
	//put the content with the new comment back in
	file_put_contents($fileName, $data);
	//echo all comments on file to be printed by the jquery function
	echo $data;
?>

