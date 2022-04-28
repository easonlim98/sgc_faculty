<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$allComment = mysqli_query($db,
        "SELECT C.CommentID, C.PostID, C.UserID, C.CommentContent, C.CreatedAt
         FROM comment C"
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($allComment)) {
			$rows[] = $r;
		}
		echo json_encode($rows);
?>